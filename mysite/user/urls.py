from django.urls import path

from user.views import *

app_name = "user"

urlpatterns = [
    path("login/", UserLoginView.as_view(), name="login"),
    path("registration/", RegistrationView.as_view(), name="registration"),
    path("logout/", LogoutView.as_view(next_page=reverse_lazy("home")), name="logout"),
    path("profile/", ProfileView.as_view(), name="profile"),
]

