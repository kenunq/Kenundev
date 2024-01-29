from django import template
from django.utils.html import format_html
from django.utils.safestring import SafeString

from user.models import User

register = template.Library()

html_obj = {True: '<p style="color: green;">В сети</p>', False: '<p style="color: red;">Оффлайн</p>'}

@register.simple_tag
def get_admin_status() -> SafeString:
    admins = User.objects.filter(is_superuser=True)
    status = False
    for admin in admins:
        if admin.is_online():
            status = True

    return format_html(html_obj[status])


@register.simple_tag
def get_user_status(user_id: str) -> SafeString:

    user = User.objects.get(id=user_id)
    status = user.is_online() if user else False

    return format_html(html_obj[status])
