import mimetypes
import uuid

from django.conf import settings
from django.core.handlers.asgi import ASGIRequest
from django.http import HttpResponse, JsonResponse
from django.views.generic.base import TemplateView

from HomePage.tasks import send_problem_message
import logging

from common.mixin.views import TitleMixin


class HomePageView(TitleMixin, TemplateView):
    """Представление обрабатывающее главную страницу."""

    template_name = "HomePage/HomePage.html"
    title = 'Главная страница'

    def get(self, request, *args, **kwargs):
        resp = super().get(request, *args, **kwargs)
        id_class = request.GET.get("class")

        if request.GET.get("data") == "talents":
            return HttpResponse(
                open(
                    f"./static/js/javascript/data-class={id_class}.js",
                    "r",
                    encoding="utf-8",
                ),
                content_type="application/x-javascript; charset=utf-8",
            )

        if request.GET.get("data") == "item-scaling":
            return HttpResponse(
                open(
                    "./static/js/javascript/data-item-scaling.js",
                    "r",
                    encoding="utf-8"
                ),
                content_type="application/x-javascript; charset=utf-8",
            )

        return resp

    def post(self, request: ASGIRequest, *args, **kwargs):
        if self.request.user.is_anonymous:
            return JsonResponse({"status": "access error"})

        if request.FILES:
            # Заполняем словарь нужными данными, так как селери не принимает файлы
            files = {}
            for file in request.FILES:
                files[request.FILES[file].name] = [
                    request.FILES[file].read(),
                    mimetypes.guess_type(request.FILES[file].name)[0],
                ]
        else:
            files = None

        text = request.POST.get("comment", "")

        if files or text != "":
            send_problem_message.delay(files, text)
            return JsonResponse({"status": "complaint sent successfully"})

        return JsonResponse({"status": "complaint not sent"})

    def render_to_response(self, context, **response_kwargs):
        response = super(HomePageView, self).render_to_response(context, **response_kwargs)

        if self.request.user.is_anonymous:
            if not self.request.COOKIES.get('userID'):
                response.set_cookie(
                    key='userID',
                    value=uuid.uuid4(),
                    domain=settings.PARENT_DOMAIN
                )

        return response

