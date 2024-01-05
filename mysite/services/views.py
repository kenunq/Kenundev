import json
# from .services import send_message_zapis
from .tasks import send_telegram_message


from django.contrib import messages
from django.core.handlers.asgi import ASGIRequest
from django.shortcuts import redirect
from django.urls import reverse
from django.utils import timezone, dateformat
from django.http import JsonResponse
from django.views.generic import TemplateView

from services.models import TypeModel, ServerModel, FractionModel, ClassModel, MentorModel, CommunicationModel, \
    ServicesModel


# Create your views here.

class ServicesView(TemplateView):
    template_name = "services/appointment_page.html"

    def get_context_data(self, **kwargs):
        context = super(ServicesView, self).get_context_data(**kwargs)
        # TODO сделать проверку на дискорд, если есть то предвписывать его. Избавиться от того что написано ниже
        context['types'] = TypeModel.objects.all()

        context['servers'] = ServerModel.objects.all()

        context['fractions'] = FractionModel.objects.all()

        context['classes'] = ClassModel.objects.all()

        context['mentors'] = MentorModel.objects.all()

        context['communications'] = CommunicationModel.objects.all()

        return context

    def post(self, request: ASGIRequest, *args, **kwargs):
        data: dict = json.loads(request.body)
        if not self.request.user.is_anonymous:
            creator = self.request.user
        else:
            creator = None
        comment = data.get('comment', '')
        telegram_id = MentorModel.objects.get(name=data['mentor']).telegram_id
        bids = ServicesModel.objects.create(
            type=data['type'],
            server=data['server'],
            fraction=data['fraction'],
            class_name=data['class'],
            mentor=data['mentor'],
            communication=data['communication'],
            username=data['username'],
            comment=comment,
            creator=creator,
            time_of_create=timezone.now()
        )
        bids.save()

        # messages.success(request, data['mentor'])
        request.session['mentor'] = data['mentor']

        # send_message_zapis(telegram_id, data)
        send_telegram_message.delay(telegram_id, data)

        return JsonResponse({"status": "data was successfully saved"})


class SuccessAddView(TemplateView):
    template_name = "services/success_add.html"

    def render_to_response(self, context, **response_kwargs):
        if not context.get('mentor'):
            return redirect(reverse("services:services"))

        return super(SuccessAddView, self).render_to_response(
            context, **response_kwargs
        )

    def get_context_data(self, **kwargs):
        context = super(SuccessAddView, self).get_context_data(**kwargs)
        if self.request.session.get('mentor'):
            context['mentor'] = self.request.session['mentor']
            del self.request.session['mentor']
        return context

