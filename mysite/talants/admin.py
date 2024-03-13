from django.contrib import admin

from talants.models import TalentsModel


# Register your models here.


@admin.register(TalentsModel)
class TalentsModelAdmin(admin.ModelAdmin):
    list_display = ("name",)

    search_fields = ("name",)
