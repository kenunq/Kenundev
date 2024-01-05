from django.urls import path

from user.views import *

app_name = "user"

urlpatterns = [
    path("login/", UserLoginView.as_view(), name="login"),
    path("registration/", RegistrationView.as_view(), name="registration"),
    path("logout/", UserLogoutView.as_view(), name="logout"),
    path("profile/", ProfileView.as_view(), name="profile"),
    path("profile2/", profileView2, name="profile2"),
    path("confirm-email/<str:uidb64>/<str:token>/<str:email>", UserConfirmEmailView.as_view(), name="confirm_email"),
    path("email-confirmed/", EmailConfirmedView.as_view(), name="email_confirmed"),
    path("confirm-email-failed/", EmailConfirmationFailedView.as_view(), name="email_confirmation_failed"),
    path("reset-password/", UserResetPasswordView.as_view(), name="reset_password"),
    path("reset-password2/", UserResetPasswordView2.as_view(), name="password_reset_confirm"),
    path('password-reset/<uidb64>/<token>/', PasswordResetConfirmCustomView.as_view(),
         name='password_reset_confirm'),
    path('password-reset/complete/', PasswordResetCompleteCustomView.as_view(),
         name='password_reset_complete'),
]

