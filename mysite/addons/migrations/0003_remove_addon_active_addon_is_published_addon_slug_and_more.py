# Generated by Django 4.2.1 on 2023-10-28 15:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('addons', '0002_addon_active'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='addon',
            name='active',
        ),
        migrations.AddField(
            model_name='addon',
            name='is_published',
            field=models.BooleanField(default=False, verbose_name='Публикация'),
        ),
        migrations.AddField(
            model_name='addon',
            name='slug',
            field=models.SlugField(default='', max_length=255, unique=True, verbose_name='Слаг'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='category',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='a_category', to='addons.addoncategory', verbose_name='Категория'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='description',
            field=models.TextField(verbose_name='Краткое описание аддона'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='full_description',
            field=models.TextField(verbose_name='Полное описание аддона'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='images',
            field=models.ImageField(upload_to='addons_images', verbose_name='Картинки аддона'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='name',
            field=models.CharField(max_length=256, verbose_name='Название аддона'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='preview',
            field=models.ImageField(upload_to='addons_images/preview', verbose_name='Картинка карточки аддона'),
        ),
        migrations.AlterField(
            model_name='addon',
            name='price',
            field=models.DecimalField(decimal_places=2, max_digits=6, verbose_name='Цена'),
        ),
    ]