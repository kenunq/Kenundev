from django.core.handlers.asgi import ASGIRequest
from django.http import HttpResponseRedirect
from django.urls import reverse
from django.utils.decorators import method_decorator
from django.views.decorators.cache import never_cache
from django.views.decorators.csrf import csrf_protect
from django.views.decorators.debug import sensitive_post_parameters


class RedirectAuthUser:
    """#### Класс перенаправления авторизованных пользователей на страницу указанную в свойстве:
    >>> redirect_auth_user_url"""

    redirect_auth_user_url = None

    @method_decorator(sensitive_post_parameters())
    @method_decorator(csrf_protect)
    @method_decorator(never_cache)
    def dispatch(self, request: ASGIRequest, *args, **kwargs):
        if self.redirect_auth_user_url and request.user.is_authenticated:
            return HttpResponseRedirect(reverse(self.redirect_auth_user_url))

        return super().dispatch(request, *args, **kwargs)
