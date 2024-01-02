import json

from django.contrib import auth
from django.contrib.auth import update_session_auth_hash
from django.contrib.auth.tokens import default_token_generator
from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.sites.models import Site
from django.core.handlers.asgi import ASGIRequest
from django.http import JsonResponse
from django.shortcuts import HttpResponseRedirect, redirect
from django.shortcuts import render, resolve_url
from django.contrib.messages.views import SuccessMessageMixin
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode, urlsafe_base64_decode
from django.views.generic.edit import CreateView
from django.urls import reverse, reverse_lazy
from django.views.generic.base import TemplateView, View
from django.conf import settings

from services.models import ServicesModel
from user.forms import UserRegistrationForm, UserLoginForm
from user.models import User
from user.tasks import send_update_email_message


class RegistrationView(SuccessMessageMixin, CreateView):
    model = User
    form_class = UserRegistrationForm
    template_name = "registration.html"
    success_url = reverse_lazy("user:login")
    success_message = "Вы успешно зарегистрировались!"

    def render_to_response(self, context, **response_kwargs):
        if not self.request.user.is_anonymous:
            return redirect("user:profile")

        return super(RegistrationView, self).render_to_response(
            context, **response_kwargs
        )


class UserLoginView(LoginView):
    template_name = "login.html"
    form_class = UserLoginForm

    def render_to_response(self, context, **response_kwargs):
        if not self.request.user.is_anonymous:
            return redirect("user:profile")

        return super(UserLoginView, self).render_to_response(
            context, **response_kwargs
        )


def userlogout(request):
    auth.logout(request)
    return HttpResponseRedirect(request.META["HTTP_REFERER"])


class ProfileView(TemplateView):
    template_name = "profile.html"

    def get_context_data(self, **kwargs):
        context = super(ProfileView, self).get_context_data(**kwargs)
        if self.request.user.is_anonymous:
            return context
        context['user_services'] = list(reversed(ServicesModel.objects.filter(creator=self.request.user)))
        return context

    def render_to_response(self, context, **response_kwargs):
        if self.request.user.is_anonymous:
            return redirect("home")

        return super(ProfileView, self).render_to_response(
            context, **response_kwargs
        )

    def post(self, request: ASGIRequest, *args, **kwargs):
        data: dict = json.loads(request.body)

        if data.get("update_discord"):
            user = self.request.user
            user.discord = data['update_discord']
            user.save()
            return JsonResponse({"status": "data was successfully discrod updated"})

        if data.get("update_password"):
            user = self.request.user
            old_password = data['old_password']
            new_password = data['update_password']
            if user.check_password(old_password):
                user.set_password(new_password)
                user.save()
                update_session_auth_hash(request, self.request.user) # Сохранение авторизации пользователя
                return JsonResponse({"status": "data was successfully password updated"})

        if data.get("update_email"):
            user = self.request.user
            token = default_token_generator.make_token(user)
            uid = urlsafe_base64_encode(force_bytes(user.pk))
            email = urlsafe_base64_encode(force_bytes(data["update_email"]))
            activation_url = reverse_lazy('user:confirm_email', kwargs={'uidb64': uid, 'token': token, 'email': email})
            # current_site = Site.objects.get_current().domain
            current_site = "127.0.0.1:8000"
            send_update_email_message.delay(user.email, current_site, activation_url)
            return JsonResponse({"status": "data was successfully discrod updated"})


class UserConfirmEmailView(View):
    def get(self, request, uidb64, token, email):
        try:
            uid = urlsafe_base64_decode(uidb64)
            user = User.objects.get(pk=uid)
            email = urlsafe_base64_decode(email)
        except (TypeError, ValueError, OverflowError, User.DoesNotExist):
            user = None

        if user is not None and default_token_generator.check_token(user, token):
            user.email = email.decode('utf-8')
            user.save()
            return redirect('user:email_confirmed')
        else:
            return redirect('user:email_confirmation_failed')


class EmailConfirmedView(TemplateView):
    template_name = 'email_confirmed.html'


class EmailConfirmationFailedView(TemplateView):
    template_name = 'email_confirmed_failed.html'
