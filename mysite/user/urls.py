from django.contrib.auth.decorators import login_required
from django.urls import path
from django.contrib.auth.views import LogoutView

from user.views import *

app_name = 'user'

urlpatterns = [
    path('login/', UserLoginView.as_view(), name='login'),
    path('registration/', RegistrationView.as_view(), name='registration'),
    path('logout/', LogoutView.as_view(next_page=reverse_lazy('home')), name='logout'),
]