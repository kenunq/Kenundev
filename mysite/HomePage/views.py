import json
import mimetypes

from django.core.files.base import ContentFile
from django.core.files.storage import FileSystemStorage
from django.core.handlers.asgi import ASGIRequest
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic.base import TemplateView, View

from HomePage.tasks import send_problem_message


class HomePageView(TemplateView):
    template_name = "HomePage/HomePage.html"

    def get(self, request, *args, **kwargs):
        resp = super().get(request, *args, **kwargs)
        print(request.GET.get('data'))
        id_class = request.GET.get('class')
        if request.GET.get('data') == 'talents':
            return HttpResponse(open(f'.\static\js\javascript\data-class={id_class}.js', 'r', encoding="utf-8"),
                                content_type="application/x-javascript; charset=utf-8")

        if request.GET.get('data') == 'item-scaling':
            return HttpResponse(open('.\static\js\javascript\data-item-scaling.js', 'r', encoding="utf-8"),
                                content_type="application/x-javascript; charset=utf-8")
        return resp

    def post(self, request: ASGIRequest, *args, **kwargs):

        if request.FILES:
            #Заполняем словарь нужными данными, так как селери не принимает файлы
            files = {}
            for file in request.FILES:
                files[request.FILES[file].name] = [request.FILES[file].read(),
                                                   mimetypes.guess_type(request.FILES[file].name)[0]]
        else:
            files = None

        text = request.POST.get("comment", "")

        if files or text != "":
            send_problem_message.delay(files, text)

        return JsonResponse({"status": "data was successfully deleted"})
