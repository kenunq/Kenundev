from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic.base import TemplateView, View

import requests

class HomePageView(TemplateView):
    template_name = "index.html"


class CharPageView(TemplateView):
    template_name = "char.html"


class TestAnim(TemplateView):
    template_name = "testanim.html"


class ZamimgProxyView(View):

    def get(self, request, *args, **kwargs):
        """Проксирует запрос к zamimg API через этот сервер,
        т.к. zamimg сервер не установил Cross-Origin Resource Sharing заголовки,
        для возможности отправки запроса со стороны клиента используя JavaScript.
        https://developer.mozilla.org/ru/docs/Web/HTTP/CORS"""

        headers_get = {
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
                AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
        }
        url = 'https://wow.zamimg.com/modelviewer/' + kwargs.get('modelviewer_path')

        response = requests.get(url, headers=headers_get, timeout=5)

        return HttpResponse(response.content)