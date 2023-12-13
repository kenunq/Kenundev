
from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.base import TemplateView, View




class HomePageView(TemplateView):
    template_name = "HomePage/HomePage.html"

    def get(self, request, *args, **kwargs):
        resp = super().get(request, *args, **kwargs)
        print(request.GET.get('data'))
        id_class = request.GET.get('class')
        if request.GET.get('data') == 'talents':
            return HttpResponse(open(f'.\static\js\javascript\data-class={id_class}.js', 'r', encoding="utf-8"), content_type="application/x-javascript; charset=utf-8")

        if request.GET.get('data') == 'item-scaling':
            return HttpResponse(open('.\static\js\javascript\data-item-scaling.js', 'r', encoding="utf-8"),
                                content_type="application/x-javascript; charset=utf-8")
        return resp
