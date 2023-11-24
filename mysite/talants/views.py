from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import TemplateView

from CharPage.models import CharModel


# Create your views here.


class TalantsView(TemplateView):
    template_name = 'talants/talants.html'

    def get_context_data(self, **kwargs):
        context = super(TalantsView, self).get_context_data(**kwargs)
        creator = self.request.user
        if not creator.is_anonymous:
            context['chars'] = reversed(CharModel.objects.filter(creator=creator, creating=True))
            # filter(proffesions__contains=0) отображать чаров у которых свободна одна или более проффесия
            print(context['chars'])
        return context

    # def get(self, request, *args, **kwargs):
    #     req = super(TalantsView, self).get(request, *args, **kwargs)
    #     print(request)
    #     return req
