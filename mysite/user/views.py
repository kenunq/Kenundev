from django.contrib import auth
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import HttpResponseRedirect
from django.shortcuts import render, resolve_url
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView
from django.urls import reverse, reverse_lazy
from django.views.generic.base import TemplateView
from django.conf import settings

from services.models import ServicesModel
from user.forms import UserRegistrationForm, UserLoginForm
from user.models import User


class RegistrationView(SuccessMessageMixin, CreateView):
    model = User
    form_class = UserRegistrationForm
    template_name = "registration.html"
    success_url = reverse_lazy("user:login")
    success_message = "Вы успешно зарегистрировались!"


class UserLoginView(LoginView):
    template_name = "login.html"
    form_class = UserLoginForm


def userlogout(request):
    auth.logout(request)
    return HttpResponseRedirect(request.META["HTTP_REFERER"])


class ProfileView(TemplateView):
    template_name = "profile.html"

    def get_context_data(self, **kwargs):
        context = super(ProfileView, self).get_context_data(**kwargs)
        context['user_services'] = list(reversed(ServicesModel.objects.filter(creator=self.request.user)))
        return context

