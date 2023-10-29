from django.contrib import admin

from addons.models import AddonCategory, Addon, AddonImage


# Register your models here.

@admin.register(AddonCategory)
class CategoryAdmin(admin.ModelAdmin):
    pass


class ImageInline(admin.TabularInline):
    fk_name = 'addon'
    model = AddonImage


@admin.register(Addon)
class AddonAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')
    inlines = [ImageInline, ]
