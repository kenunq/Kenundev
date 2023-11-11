from re import findall

from django import template

from CharPage.models import CharModel

register = template.Library()


@register.filter
def get_race_img_by_dress_room_url(url: str) -> str:
    """Принимает url dressing room комнаты и пытается получить из БД расу привязаную к этой
    комнате если получается то возвращает url иконки расы, иначе возвращает дефолтную иконку."""

    room_id = findall(r"/char/([A-Za-z0-9\-]+)", url)
    if not room_id:
        return '/static/images/other/close.png'

    dressing_room = CharModel.objects.filter(room_id=room_id[0])
    if not dressing_room or dressing_room[0].race in dressing_room.model.RACES_WITHOUT_ICON:
        return '/static/images/other/close.png'

    race = dressing_room.model.RACES.get(dressing_room[0].race).lower()
    gender = dressing_room.model.GENDERS.get(dressing_room[0].gender).lower()

    return f'{dressing_room.model.DEFAULT_ICON_URL}race_{race}_{gender}.jpg'








