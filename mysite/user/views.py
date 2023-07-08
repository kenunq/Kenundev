from django.shortcuts import render

from django.views.generic.base import TemplateView

class RegistrationView(TemplateView):
    template_name = "registration.html"