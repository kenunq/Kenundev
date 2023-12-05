from re import findall

from django import template
from django.utils.html import format_html
from django.utils.safestring import SafeString

from CharPage.models import CharModel

register = template.Library()


@register.filter
def get_race_img_by_dress_room_url(url: str) -> str:
    """Принимает url dressing room комнаты и пытается получить из БД расу привязаную к этой
    комнате если получается, то возвращает url иконки расы, иначе возвращает дефолтную иконку."""

    room_id = findall(r"/char/([A-Za-z0-9\-]+)", url)
    if not room_id:
        return "/static/images/other/close.png"

    dressing_room = CharModel.objects.filter(room_id=room_id[0])
    if (
        not dressing_room
        or dressing_room[0].race in dressing_room.model.RACES_WITHOUT_ICON
    ):
        return "/static/images/other/close.png"

    race = dressing_room.model.RACES.get(dressing_room[0].race).lower()
    gender = dressing_room.model.GENDERS.get(dressing_room[0].gender).lower()

    return f"{dressing_room.model.DEFAULT_ICON_URL}race_{race}_{gender}.jpg"


RACES = {
    1: ["Человек", "race_human"],
    2: ["Орк", "race_orc"],
    3: ["Дворф", "race_dwarf"],
    4: ["Ночной эльф", "race_nightelf"],
    5: ["Нежить", "race_scourge"],
    6: ["Таурен", "race_tauren"],
    7: ["Гном", "race_gnome"],
    8: ["Тролль", "race_trol"],
    9: ["Гоблин", "race_goblin"],
    10: ["Эльф крови", "race_bloodelf"],
    11: ["Дреней", "race_draenei"],
}

PROFFESIONS = {
    0: ["Ювелирное дело", "Jewelcrafting"],
    1: ["Ювелирное дело", "Jewelcrafting"],
    2: ["Инженерное дело", "Engineering"],
    3: ["Кузнечное дело", "Blacksmithing"],
    4: ["Портняжное дело", "Tailoring"],
    5: ["Кожевничество", "Leatherworking"],
    6: ["Травничество", "Herbalism"],
    7: ["Наложение чар", "Enchanting"],
    8: ["Алхимия", "Alchemy"],
    9: ["Начертание", "Inscription"],
    10: ["Горное дело", "Mining"],
    11: ["Снятие шкур", "Skinning"],
}


@register.simple_tag
def get_race_name_rus(race: int) -> str:
    return RACES[race][0]


@register.simple_tag
def get_prof_html(prof: str) -> SafeString:
    prof_list = eval(prof)
    # prof_list_len = 0
    result = ""

    # if prof_list[0] != 0:
    #     prof_list_len += 1
    # if prof_list[1] != 0:
    #     if prof_list_len == 0:
    #         prof_list.pop(0)
    #     prof_list_len += 1
    for i in range(2):
        if prof_list[i] == 0:
            result += f'''
                    <img src="static/img/Professions/medium/{PROFFESIONS[prof_list[i]][1]}.jpg" height="36" width="36" style='opacity: 0;'>
                    '''
            continue
        result += f'''
        <img src="static/img/Professions/medium/{PROFFESIONS[prof_list[i]][1]}.jpg" height="36" width="36">
        '''
    return format_html(result)