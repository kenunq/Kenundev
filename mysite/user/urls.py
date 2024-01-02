from django.urls import path

from user.views import *

app_name = "user"

urlpatterns = [
    path("login/", UserLoginView.as_view(), name="login"),
    path("registration/", RegistrationView.as_view(), name="registration"),
    path("logout/", LogoutView.as_view(next_page=reverse_lazy("home")), name="logout"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("confirm-email/<str:uidb64>/<str:token>/<str:email>", UserConfirmEmailView.as_view(), name="confirm_email"),
    path("email-confirmed/", EmailConfirmedView.as_view(), name="email_confirmed"),
    path("'confirm-email-failed/", EmailConfirmationFailedView.as_view(), name="email_confirmation_failed"),
]

