from django import template
from django.utils.html import format_html
from django.utils.safestring import SafeString

from user.models import User

register = template.Library()

# TODO сделать отслеживание онлайна


@register.simple_tag
def get_admin_status() -> SafeString:
    # <p>В сети</p>
    html_obj = {True: '<p style="color: green;">В сети</p>', False: '<p style="color: red;">Оффлайн</p>'}
    admins = User.objects.filter(is_superuser=True)
    status = False
    for admin in admins:
        if admin.is_active:
            status = True

    return format_html(html_obj[status])


@register.simple_tag
def get_user_status(user_id: int) -> SafeString:
    html_obj = {True: '<p style="color: green;">В сети</p>', False: '<p style="color: red;">Оффлайн</p>'}
    user = User.objects.filter(id=user_id)
    status = False
    if user.is_active:
        status = True

    return format_html(html_obj[status])
