# Generated by Django 3.2.21 on 2023-10-03 13:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0002_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='../default_profile_sqedgc', upload_to='images/'),
        ),
    ]