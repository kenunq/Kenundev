from django.contrib import admin
from django.utils.safestring import SafeText, mark_safe

from CharPage.models import CharModel


# Register your models here.


@admin.register(CharModel)
class CharModelAdmin(admin.ModelAdmin):

    model: CharModel = CharModel

    raw_id_fields = ('creator',)

    list_display = ('get_short_room_id', 'allow_edit', 'get_race_name', 'get_gender_name', 'last_update_time')

    list_editable = ('allow_edit',)

    search_fields = ('room_id',)

    readonly_fields = ('race_img65x65',)

    fields = ('room_id', 'creator', 'allow_edit', 'creating', ('race', 'race_img65x65'), 'char_name',
              'gender', 'char_class', 'proffesions', 'talents', 'last_update_time', 'items', 'face')

    def get_short_room_id(self, obj: CharModel) -> str:
        # print(getattr(self, 'GENDERS')) # self.__class__.__getattribute__(self, 'GENDERS')
        # print(vars(obj)) # obj.__dict__
        # print(vars(obj._meta))
        # print(obj.__doc__)
        # self.__class__.get_short_room_id.__setattr__('short_description', obj._meta.get_field('room_id').verbose_name)
        # setattr(self.__class__.get_short_room_id, 'short_description', obj._meta.get_field('room_id').verbose_name)

        setattr(type(self).get_short_room_id, 'short_description',
                obj._meta.get_field('room_id').verbose_name)
        length = len(obj.room_id)
        return f'...{obj.room_id[length-7:length]}'

    def get_race_name(self, obj: CharModel) -> str:
        setattr(type(self).get_race_name, 'short_description',
                obj._meta.get_field('race').verbose_name)
        return self.model.RACES.get(obj.race, 'Раса неизвестна')

    def get_gender_name(self, obj: CharModel) -> str:
        setattr(type(self).get_gender_name, 'short_description',
                obj._meta.get_field('gender').verbose_name)
        return self.model.GENDERS.get(obj.gender, 'Пол неизвестен')

    def race_img65x65(self, obj: CharModel) -> SafeText:
        setattr(type(self).race_img65x65, 'short_description', '')

        if obj.race in self.model.RACES_WITHOUT_ICON:
            src = '/static/images/other/close.png'
        else:
            race = self.model.RACES.get(obj.race).lower()
            gender = self.model.GENDERS.get(obj.gender).lower()

            src = f'{self.model.DEFAULT_ICON_URL}race_{race}_{gender}.jpg'

        return mark_safe(f'<img src="{src}" width="65">')

