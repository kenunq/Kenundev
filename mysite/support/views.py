import json

from django.core.handlers.asgi import ASGIRequest
from django.http import JsonResponse
from django.shortcuts import redirect
from django.views.generic import TemplateView

from common.mixin.views import TitleMixin
from support.models import ChatRoom
from user.models import User


# Create your views here.


class SupportChatView(TitleMixin, TemplateView):
    """Представление обрабатывающее страницу чата с технической поддержкой."""

    template_name = "support/chat.html"
    title = "Техническая поддержка"

    def get(self, request, *args, **kwargs):
        if not self.request.COOKIES.get("userID"):
            return redirect("home")
        return super(SupportChatView, self).get(request, *args, **kwargs)

    def get_context_data(self, **kwargs):
        context = super(SupportChatView, self).get_context_data(**kwargs)

        if not self.request.user.is_anonymous:
            user_id = self.request.user.id
            user = self.request.user
        else:
            user_id = self.request.COOKIES.get("userID")
            user = None

        chat_room = ChatRoom.objects.filter(slug=user_id)

        # если комната записана в бд
        if chat_room:
            context["chat_messages"] = chat_room[0].messages.all()
        else:
            ChatRoom.objects.create(user=user, slug=user_id)

        return context

    def render_to_response(self, context, **response_kwargs):
        response = super(SupportChatView, self).render_to_response(
            context, **response_kwargs
        )

        if self.request.user.is_superuser:
            return redirect("support:admin-chat")

        return response


class AdminSupportChatView(TitleMixin, TemplateView):
    """Представление обрабатывающее страницу чата технической поддержки с пользователями."""

    template_name = "support/chat_admin.html"
    title = "Техническая поддержка"

    def get_context_data(self, **kwargs):
        context = super(AdminSupportChatView, self).get_context_data(**kwargs)

        if self.request.GET.get("user-id"):
            user_id = self.request.GET.get("user-id")
            if len(user_id) < 36:
                user = User.objects.get(id=user_id)
                context["client"] = user
            else:
                context["client"] = {"id": user_id, "username": "Anonymous"}

            chat_room = ChatRoom.objects.filter(slug=user_id)
            context["chat_messages"] = chat_room[0].messages.all()

        context["all_chats"] = ChatRoom.objects.exclude(messages__isnull=True)

        return context

    def post(self, request: ASGIRequest, *args, **kwargs):
        data: dict = json.loads(request.body)

        if data.get("change_state"):
            user_id = self.request.GET.get("user-id")
            chat_room = ChatRoom.objects.get(slug=user_id)
            chat_room.state = data["change_state"]
            chat_room.save()
            return JsonResponse({"status": "status changed successfully"})

    def render_to_response(self, context, **response_kwargs):
        response = super(AdminSupportChatView, self).render_to_response(
            context, **response_kwargs
        )

        if not self.request.user.is_superuser:
            return redirect("support:chat")

        return response
