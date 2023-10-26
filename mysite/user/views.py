from django.contrib import auth
from django.contrib.auth.views import LoginView, LogoutView
from django.shortcuts import HttpResponseRedirect
from django.shortcuts import render, resolve_url
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView
from django.urls import reverse, reverse_lazy
from django.views.generic.base import TemplateView
from django.conf import settings

from user.forms import UserRegistrationForm, UserLoginForm
from user.models import User

class RegistrationView(SuccessMessageMixin, CreateView):
	model = User
	form_class = UserRegistrationForm
	template_name = 'registration.html'
	success_url = reverse_lazy('user:login')
	success_message = 'Вы успешно зарегистрировались!'

class UserLoginView(LoginView):
	template_name = 'login.html'
	form_class = UserLoginForm


# class UserLogout(LogoutView):
#
# 	def get(self, request, *args, **kwargs):
# 		return HttpResponseRedirect(request.META['HTTP_REFERER'])
#
# 	def get_success_url(self):
# 		return reverse_lazy('home')

def UserLogout(request):
	print(request.META)
	auth.logout(request)
	return HttpResponseRedirect(request.META['HTTP_REFERER'])