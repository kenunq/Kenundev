import os

from django.core.asgi import get_asgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'mysite.settings')

app = get_asgi_application()

from channels.routing import ProtocolTypeRouter, URLRouter
from channels.auth import AuthMiddlewareStack
from channels.security.websocket import AllowedHostsOriginValidator

from support import routing

application = ProtocolTypeRouter({
    'http': app,
    'websocket': AllowedHostsOriginValidator((AuthMiddlewareStack(URLRouter(routing.websocket_urlpatterns))))
})
