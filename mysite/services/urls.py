from django.urls import path

from services.views import *

app_name = "services"

urlpatterns = [
    path("", ServicesView.as_view(), name="services"),
    path("success", SuccessAddView.as_view(), name="success_add"),
]
