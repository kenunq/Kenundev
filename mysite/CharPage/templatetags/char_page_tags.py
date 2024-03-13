from django import template
from django.utils.html import format_html
from django.utils.safestring import SafeString


register = template.Library()


RACES: dict[int, list[str]] = {
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

PROFFESIONS: dict[int, list[str]] = {
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
    """Возвращает название расы"""
    return RACES[race][0]


@register.simple_tag
def get_prof_html(prof: list[int]) -> SafeString:
    """Возвращает html объект содержащий иконку профессии"""
    prof_list = eval(prof)
    result = ""

    for i in range(2):
        if prof_list[i] == 0:
            result += f"""
                    <img src="static/img/Professions/medium/{PROFFESIONS[prof_list[i]][1]}.jpg" height="36" width="36" style='opacity: 0;'>
                    """
            continue
        result += f"""
        <img src="static/img/Professions/medium/{PROFFESIONS[prof_list[i]][1]}.jpg" height="36" width="36">
        """
    return format_html(result)
