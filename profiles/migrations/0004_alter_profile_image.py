# Generated by Django 3.2.21 on 2023-10-03 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('profiles', '0003_alter_profile_image'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='image',
            field=models.ImageField(default='https://res.cloudinary.com/dyv8xopsd/image/upload/v1695037025/DjangoREST/default_profile_sqedgc.jpg', upload_to='images/'),
        ),
    ]
