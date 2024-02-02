from django.db.models import Count
from django.views.generic import TemplateView
from django.views.generic.list import ListView
from django.core.cache import cache

from addons.models import Addon, AddonCategory
from common.mixin.views import TitleMixin


# Create your views here.


class AddonsView(TitleMixin, ListView):
    """Представление обрабатывающее страницу товаров с аддонами."""
    model = Addon
    template_name = 'addons/addons_shop.html'
    title = "Магазин аддонов"
    # paginate_by = 4

    def get_queryset(self):
        queryset = super(AddonsView, self).get_queryset()
        category_id = self.kwargs.get('category_id')
        if category_id:
            cache.clear()

        filter = self.request.GET.get('filter')


        if filter:
            list_filter = {'price': 'price', '-price': '-price', "popular": "name"}

            return queryset.filter(category__id=category_id, is_published=True).order_by(
                    list_filter.get(filter, "")) if category_id else queryset.filter(is_published=True).order_by(
                    list_filter.get(filter, ""))
        else:
            return queryset.filter(category__id=category_id, is_published=True) if category_id else queryset.filter(is_published=True)

    def get_context_data(self, *, object_list=None, **kwargs):
        context = super(AddonsView, self).get_context_data()

        categories = cache.get('categories')

        if not categories:
            #возвращаем только те категории, которые используются
            context['categories'] = AddonCategory.objects.annotate(one=Count('a_category')).filter(one__gt=0)
            cache.set('categories', context['categories'], 30)
        else:
            context['categories'] = categories
        return context


class AddonPageView(TemplateView):
    """Представление обрабатывающее страницу товара(аддона)."""
    template_name = 'addons/addon_page.html'

    def get_context_data(self, **kwargs):
        context = super(AddonPageView, self).get_context_data()
        context['addon'] = Addon.objects.filter(slug=kwargs['addon_slug'])[0]
        context['title'] = context['addon'].name
        return context
