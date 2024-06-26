# Generated by Django 5.0.6 on 2024-06-25 14:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='recipe',
            name='cook_time',
            field=models.IntegerField(help_text='Temps de cuisson en minutes'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='ingredients',
            field=models.TextField(help_text='Liste des ingrédients séparés par des virgules'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='instructions',
            field=models.TextField(help_text='Instructions générales'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='prep_time',
            field=models.IntegerField(help_text='Temps de préparation en minutes'),
        ),
        migrations.AlterField(
            model_name='recipe',
            name='servings',
            field=models.IntegerField(help_text='Nombre de portions'),
        ),
    ]