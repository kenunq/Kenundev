from django.shortcuts import render

from django.views.generic.base import TemplateView

class HomePageView(TemplateView):
    template_name = "index.html"

class CharPageView(TemplateView):
    template_name = "char.html"

class TestAnim(TemplateView):
    template_name = "testanim.html"

# Create your views here.
