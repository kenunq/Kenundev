from django.views.generic import TemplateView


# Create your views here.

class ServicesView(TemplateView):
    template_name = "services/appointment_page.html"