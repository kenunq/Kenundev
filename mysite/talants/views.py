import json

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
            # отображаем персонажей у которых привязано меньше двух талантов
            context['chars'] = reversed(CharModel.objects.annotate(num_talents=Count('talents')).filter(creator=creator, creating=True, num_talents__lt=2))
            # filter(proffesions__contains=0) отображать чаров у которых свободна одна или более проффесия
            print(context['chars'])
        return context

    def post(self, request: ASGIRequest, *args, **kwargs):
        data: dict = json.loads(request.body)
        creator = self.request.user
        print(data)
        if data.get('char'):
            char = CharModel.objects.get(room_id=data['char'])
            bids = TalentsModel.objects.create(name=data['name'], creator=creator, url=data['url'], talent_class=data['class'], talent_spec=data['spec'])
            bids.charmodel_set.add(char)
            bids.save()
        else:
            bids = TalentsModel(name=data['name'], creator=creator, url=data['url'], talent_class=data['class'], talent_spec=data['spec'])
            bids.save()

        # print(bids.charmodel_set.all()) #получить всех персонажей привязанных к данным талантам
        # print(char.talents.all()) #получить все таланты привязанные к данному персонажу

        return JsonResponse({'status': 'data was successfully saved'})
