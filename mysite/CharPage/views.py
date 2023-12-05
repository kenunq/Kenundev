import json
from datetime import timedelta, datetime
from os.path import exists
from pathlib import Path
from typing import Any
from uuid import uuid4

from django.conf import settings
from django.utils import timezone
from django.core.handlers.asgi import ASGIRequest
from django.db.models import QuerySet
from django.http import (
    HttpResponse,
    Http404,
    JsonResponse,
)
from django.shortcuts import redirect
from django.views.generic.base import TemplateView, View

import requests

from CharPage.models import CharModel
from talants.models import TalentsModel
from user.models import User


class CharPageView(TemplateView):
    template_name = "index.html"


class TestAnim(TemplateView):
    template_name = "testanim.html"


# class ZamimgProxyView(View):
#
#     def get(self, request, *args, **kwargs):
#         """Проксирует запрос к zamimg API через этот сервер,
#         т.к. zamimg сервер не установил Cross-Origin Resource Sharing заголовки,
#         для возможности отправки запроса со стороны клиента используя JavaScript.
#         https://developer.mozilla.org/ru/docs/Web/HTTP/CORS"""
#
#         headers_get = {
#             'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) \
#                 AppleWebKit/537.36 (KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36'
#         }
#         url = 'https://wow.zamimg.com/modelviewer/' + kwargs.get('modelviewer_path')
#
#         response = requests.get(url, headers=headers_get, timeout=5)
#
#         return HttpResponse(response.content)

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
GENDERS = {0: "male", 1: "female"}

PROFFESIONS = {
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


class ZamimgProxyView(View):
    """Проксирует запрос к zamimg API через этот сервер,
    т.к. zamimg сервер не установил Cross-Origin Resource Sharing заголовки,
    для возможности отправки запроса со стороны клиента используя JavaScript.
    https://developer.mozilla.org/ru/docs/Web/HTTP/CORS
    И кэширует файлы локально для уменьшения количества запросов к zamimg API."""

    def get(self, request, *args, **kwargs):
        modelviewer_path: str = kwargs.get("modelviewer_path")

        # Костыль для частичной работы "Нагрудников" на wrath патче
        if modelviewer_path.startswith("wrath/meta/armor/5/"):
            file_name = modelviewer_path.rsplit("/", 1)[-1]
            modelviewer_path = f"live/meta/armor/5/{file_name}"

        # Костыль для работы "Шадоуморна" на лайв патче..
        elif modelviewer_path == "live/meta/item/65153.json":
            modelviewer_path = "wrath/meta/item/65153.json"

        STATIC_ROOT = settings.BASE_DIR / "static"
        full_path = f"{STATIC_ROOT}/CharPage/json/modelviewer/{modelviewer_path}"

        if not exists(full_path):
            headers_get = {
                "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
                "(KHTML, like Gecko) Chrome/106.0.0.0 Safari/537.36"
            }
            zamimg_url = f"https://wow.zamimg.com/modelviewer/{modelviewer_path}"

            response = requests.get(zamimg_url, headers=headers_get, timeout=5)

            path_to_file, file_name = full_path.rsplit("/", maxsplit=1)
            path_obj = Path(path_to_file)
            path_obj.mkdir(parents=True, exist_ok=True)

            with open(f"{path_to_file}/{file_name}", "wb+") as file:
                file.write(response.content)
            return HttpResponse(response.content)

        with open(full_path, "rb") as file:
            return HttpResponse(file.read())


class CharPageView(View):
    """#### Представление которое генерирует uuid4\
    и использует его для создания уникального url адреса для примерочной страницы."""

    def get(self, request, *args, **kwargs):
        return redirect("char_page_room", uuid4())


class UniqueCharPageView(TemplateView):
    """#### Представление обрабатывающее примерочную страницу."""

    template_name = "index.html"

    time_delta = timedelta(days=365)

    def _time_checking(self):
        """Обновляет время для текущей комнаты и
        проверяет все остальные комнаты на предмет устаревания
        для последующего удаления."""

        current_datetime = self.timezone_now
        self.dressing_room.update(last_update_time=current_datetime)

        dressing_rooms = CharModel.objects.all().only("creator", "last_update_time")

        for room in dressing_rooms:
            if current_datetime - self.time_delta >= room.last_update_time:
                # Если пользователь не прикреплён к модели удаляем модель
                if not room.creator:
                    room.delete()

    def _get_my_saved_rooms(
        self, creator: dict[str, str | User]
    ) -> tuple[list[dict[str, str | int | bool]], QuerySet]:
        """Создание даты для отображения списка созданных комнат у текущего пользователя."""
        dressing_rooms = CharModel.objects.filter(creator=creator)
        my_saved_rooms = []

        for room in dressing_rooms:
            my_saved_rooms.append(
                self.create_my_saved_rooms(
                    room.last_update_time,
                    room.room_id,
                    room.allow_edit,
                    room.race,
                    room.gender,
                )
            )

        if not self.dressing_room:
            my_saved_rooms.append(
                self.create_my_saved_rooms(self.timezone_now, self.room_id)
            )

        my_saved_rooms.sort(
            key=lambda room: datetime.strptime(
                room["last_update_time"], "%d-%m-%Y %H:%M:%S"
            ),
            reverse=True,
        )
        return my_saved_rooms, dressing_rooms

    def create_my_saved_rooms(
        self,
        last_update_time: datetime,
        room_id: str,
        allow_edit: bool = False,
        race: int = 1,
        gender: int = 1,
    ) -> dict[str, Any]:
        return {
            "room_id": room_id,
            "allow_edit": allow_edit,
            "race": race,
            "gender": gender,
            "last_update_time": timezone.localtime(last_update_time).strftime(
                "%d-%m-%Y %H:%M:%S"
            ),
        }

    def create_character_data(
        self,
        allow_edit: bool = False,
        race: int = 1,
        gender: int = 1,
        items: str = "",
        face: str = "0,0,0,0,0",
    ) -> dict[str, Any]:
        return {
            "room_creator": self.is_room_creator,
            "allow_edit": allow_edit,
            "race": race,
            "gender": gender,
            "items": items,
            "face": face,
        }

    def get_context_data(self, *, object_list=None, **kwargs):
        """Создаёт запись в БД с новой страницей и добавляет character_data в контекст шаблона."""

        context = super().get_context_data(**kwargs)
        my_saved_rooms = []
        self.timezone_now = timezone.now()

        # self.room_id = str(self.request.resolver_match.kwargs.get('room_id')) # <class 'uuid.UUID'>
        self.room_id = str(kwargs.get("room_id"))  # <class 'uuid.UUID'>
        self.dressing_room = CharModel.objects.filter(room_id=self.room_id)

        # Получаем все комнаты (если они существуют)
        # которые привязаны к текущему Cookie либо пользователю
        if not self.request.user.is_anonymous:
            my_saved_rooms, dressing_rooms = self._get_my_saved_rooms(self.request.user)

        # Если эта комната записана в БД
        if self.dressing_room:
            self.creator_id = self.dressing_room[0].creator

            self.is_room_creator = self.creator_id == self.request.user

            current_room = CharModel.objects.filter(room_id=self.room_id)
            context["creating"] = getattr(current_room[0], "creating")
            context["class"] = getattr(current_room[0], "char_class").lower()
            context["race"] = RACES[getattr(current_room[0], "race")][0]
            context[
                "race_image"
            ] = f"../static/img/rass/{GENDERS[getattr(current_room[0], 'gender')]}/{RACES[getattr(current_room[0], 'race')][1]}.jpg"
            context["name"] = getattr(current_room[0], "char_name")
            if eval(getattr(current_room[0], "proffesions"))[0] == 0:
                if eval(getattr(current_room[0], "proffesions"))[1] == 0:
                    pass
                else:
                    context[
                        "proffesion1_icon"
                    ] = f"../static/img/Professions/large/{PROFFESIONS[eval(getattr(current_room[0], 'proffesions'))[1]][1]}.jpg"
                    context["proffesion1"] = PROFFESIONS[
                        eval(getattr(current_room[0], "proffesions"))[1]
                    ][0]
            else:
                context[
                    "proffesion1_icon"
                ] = f"../static/img/Professions/large/{PROFFESIONS[eval(getattr(current_room[0], 'proffesions'))[0]][1]}.jpg"
                context["proffesion1"] = PROFFESIONS[
                    eval(getattr(current_room[0], "proffesions"))[0]
                ][0]
                if not eval(getattr(current_room[0], "proffesions"))[1] == 0:
                    context[
                        "proffesion2_icon"
                    ] = f"../static/img/Professions/large/{PROFFESIONS[eval(getattr(current_room[0], 'proffesions'))[1]][1]}.jpg"
                    context["proffesion2"] = PROFFESIONS[
                        eval(getattr(current_room[0], "proffesions"))[1]
                    ][0]

            context["talents"] = current_room[0].talents.all()
            if not self.request.user.is_anonymous:
                context["talents_all"] = reversed(
                    TalentsModel.objects.filter(creator=self.request.user)
                )
                context["user_chars"] = reversed(
                    CharModel.objects.filter(creator=self.request.user, creating=True)
                )

            # Если пользователь авторизован
            if not self.request.user.is_anonymous:
                # Если в этой комнате не записан создатель
                if not self.dressing_room[0].creator:
                    # Если creator_id из БД равен creator_id из Cookie
                    if self.is_room_creator:
                        # Записываем текущего пользователя как создателя этой комнаты
                        # т.к. id из его Cookie равен id записанному в БД
                        self.dressing_room.update(creator=self.request.user)
                # Иначе если какой либо пользователь записан в этой комнате
                # сравниваем его с текущим пользователем который послал GET запрос
                # и понимаем является ли он создателем этой комнаты
                else:
                    self.is_room_creator = (
                        self.dressing_room[0].creator == self.request.user
                    )

            self._time_checking()

            character_data = self.create_character_data(
                self.dressing_room[0].allow_edit,
                self.dressing_room[0].race,
                self.dressing_room[0].gender,
                self.dressing_room[0].items,
                self.dressing_room[0].face,
            )
        else:
            if len(my_saved_rooms) > 1:
                self.creator_id = dressing_rooms[0].creator
            else:
                self.creator_id = str(uuid4().hex)
            self.is_room_creator = True

            default_create_config = {
                "room_id": self.room_id,
                "allow_edit": False,
                "last_update_time": self.timezone_now,
                "race": 1,
                "gender": 1,
                "items": "",
                "face": "0,0,0,0,0",
            }
            if not self.request.user.is_anonymous:
                default_create_config["creator"] = self.request.user

            self.dressing_room.create(**default_create_config)

            character_data = self.create_character_data()
            current_room = CharModel.objects.filter(room_id=self.room_id)
            context["creating"] = getattr(current_room[0], "creating")

        character_data.update({"my_saved_rooms": my_saved_rooms})

        context.update({"character_data": json.dumps(character_data)})
        print(context)
        return context

    def render_to_response(self, context, **response_kwargs):
        if context["creating"] == False:
            return redirect("createchar", self.room_id)
        return super(UniqueCharPageView, self).render_to_response(
            context, **response_kwargs
        )
        # return redirect('createchar', uuid4())

    def post(self, request: ASGIRequest, *args, **kwargs) -> JsonResponse:
        """Получает character_data с фронта и на её основе обновляет запись в БД."""

        room_id = str(kwargs.get("room_id"))

        self.dressing_room = CharModel.objects.filter(room_id=room_id)

        if not self.dressing_room:
            raise Http404

        creator_id = self.dressing_room[0].creator
        # Если пользователь авторизован и в этой комнате записан создатель
        if not request.user.is_anonymous and self.dressing_room[0].creator:
            # Если создатель этой комнаты равен текущему пользователю
            if self.dressing_room[0].creator == request.user:
                # Тогда получаем creator_id из БД вместо Cookie
                creator_id = self.dressing_room[0].creator

        # print(f'room_creator_id: {self.dressing_room[0].room_creator_id}',
        #       f'creator_id: {creator_id}',
        #       f'allow_edit: {self.dressing_room[0].allow_edit}', sep='\n')

        # data: dict = [json.loads(key) for key in request.POST.keys()][0]
        data: dict = json.loads(request.body)

        if data.get("talent_id"):
            if self.dressing_room[0].talents.count() < 2:
                talent = TalentsModel.objects.get(id=int(data["talent_id"]))
                talent.charmodel_set.add(self.dressing_room[0])
                return JsonResponse({"status": "data was successfully update talent"})

        if data.get("deltalent_id"):
            if self.dressing_room[0].talents.count() > 0:
                talent = TalentsModel.objects.get(id=int(data["deltalent_id"]))
                talent.charmodel_set.remove(self.dressing_room[0])
                return JsonResponse({"status": "data was successfully delete talent"})

        if data.get("delete_room"):
            dressing_room = CharModel.objects.get(room_id=data["delete_room"])
            dressing_room.delete()
            return JsonResponse({"status": "data was successfully deleted"})

        self.dressing_room.update(**data)

        return JsonResponse({"status": "data was successfully saved"})


class CreateCharView(TemplateView):
    template_name = "create_char.html"

    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        # Сделать в пост
        self.room_id = self.kwargs["room_id"]
        current_room = CharModel.objects.get(room_id=self.kwargs["room_id"])
        context["creating"] = getattr(current_room, "creating")
        # setattr(current_room, 'creating', True)
        # current_room.save()
        # print(getattr(current_room, 'creating'))
        # ----------------
        return context

    def render_to_response(self, context, **response_kwargs):
        if context["creating"] == True:
            return redirect("char_page_room", self.room_id)
        return super(CreateCharView, self).render_to_response(
            context, **response_kwargs
        )

    def post(self, request: ASGIRequest, *args, **kwargs):
        data: dict = json.loads(request.body)

        current_room = CharModel.objects.get(room_id=self.kwargs["room_id"])
        setattr(current_room, "char_name", data["Name"])
        setattr(current_room, "proffesions", str(data["Proffesions"]))
        setattr(current_room, "gender", data["Gender"])
        setattr(current_room, "race", data["Race"])
        setattr(current_room, "char_class", data["Class"])
        setattr(current_room, "face", ",".join(map(str, data["Face_options"])))
        setattr(current_room, "creating", True)
        current_room.save()
        # return redirect('char_page_room', self.kwargs['room_id'])

        # return HttpResponsePermanentRedirect(
        #     reverse('char_page_room', kwargs={'room_id': self.kwargs['room_id']})
        # )

        # return redirect(request.META.get('HTTP_REFERER'))

        return JsonResponse({"status": "data was successfully saved"})


class CharListPageView(TemplateView):
    template_name = 'char_list_page.html'

    def get_context_data(self, **kwargs):
        context = super(CharListPageView, self).get_context_data(**kwargs)
        if not self.request.user.is_anonymous:
            context['all_chars'] = reversed(CharModel.objects.filter(creator=self.request.user, creating=True))

        return context