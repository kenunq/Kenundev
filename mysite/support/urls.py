from django.urls import path

from support.views import *

app_name = "support"

urlpatterns = [
    path("chat/", SupportChatView.as_view(), name="chat"),
    path("admin-chat/", AdminSupportChatView.as_view(), name="admin-chat"),
]
