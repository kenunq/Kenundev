from django.shortcuts import render
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView
from django.urls import reverse, reverse_lazy
from django.views.generic.base import TemplateView

from user.forms import UserRegistrationForm
from user.models import User

class RegistrationView(SuccessMessageMixin, CreateView):
	model = User
	form_class = UserRegistrationForm
	template_name = 'registration.html'
	success_url = reverse_lazy('home')
	success_message = 'Вы успешно зарегистрировались!'

