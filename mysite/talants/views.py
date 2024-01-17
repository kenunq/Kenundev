import json

from django.contrib import messages
from django.core.handlers.asgi import ASGIRequest
from django.db.models import Count
from django.http import HttpResponse, JsonResponse
from django.shortcuts import render
from django.views.generic import TemplateView

from CharPage.models import CharModel
from talants.models import TalentsModel


# Create your views here.


class TalantsView(TemplateView):
    template_name = 'talants/talants.html'

    def get_context_data(self, **kwargs):
        context = super(TalantsView, self).get_context_data(**kwargs)
        creator = self.request.user
        if not creator.is_anonymous:

            # оборачиваем в лист для корректной работы {% if user_talents|length > 0 %}
            context['user_talents'] = list(reversed(TalentsModel.objects.filter(creator=creator)))
            # отображаем персонажей у которых привязано меньше двух талантов
            context['chars'] = reversed(CharModel.objects.annotate(num_talents=Count('talents')).filter(creator=creator, creating=True, num_talents__lt=2))
            # filter(proffesions__contains=0) отображать чаров у которых свободна одна или более профессия
        return context

    def post(self, request: ASGIRequest, *args, **kwargs):
        data: dict = json.loads(request.body)

        if self.request.user.is_anonymous:
            return JsonResponse({"status": "access error"})

        creator = self.request.user
        if data.get('deltalent_id'):
            TalentsModel.objects.filter(id=data["deltalent_id"]).delete()
            messages.success(self.request, 'Таланты успешно удалены.')
            return JsonResponse({'status': 'data was successfully talent deleted'})

        if data.get('char'):
            char = CharModel.objects.get(room_id=data['char'])
            if char.talents.count() < 2:
                bids = TalentsModel.objects.create(name=data['name'], creator=creator, url=data['url'], talent_class=data['class'], talent_spec=data['spec'])
                bids.charmodel_set.add(char)
                bids.save()
                return JsonResponse({'status': 'talents are successfully saved and tied to the character'})
            else:
                return JsonResponse({'status': 'the character has too many talents'})
        else:
            bids = TalentsModel(name=data['name'], creator=creator, url=data['url'], talent_class=data['class'], talent_spec=data['spec'])
            bids.save()
            return JsonResponse({'status': 'talents successfully saved'})

