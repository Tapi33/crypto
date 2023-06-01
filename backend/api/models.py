from django.db import models
from django.contrib.auth.models import AbstractUser
from django.contrib.auth import get_user_model


class User(AbstractUser):
    """
    Расширенная модель пользователь
    """
    email = models.EmailField(verbose_name="Адрес электронной почты", blank=False)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email', 'password']

    class Meta:
        verbose_name = 'Пользователь'
        verbose_name_plural = 'Пользователи'

    def __str__(self):
        return self.username


class Portfolio(models.Model):
    id_crypto = models.CharField(max_length=20, verbose_name='Id crypto coin')
    price = models.DecimalField(max_digits=20, decimal_places=10, verbose_name='Цена закупки')
    quantity = models.DecimalField(max_digits=20, decimal_places=10, verbose_name='Количество')
    user = models.ForeignKey(User, verbose_name='Пользователь', on_delete=models.CASCADE)

    class Meta:
        verbose_name = 'Портфолио'
        verbose_name_plural = 'Портфолии'

    def __str__(self):
        return '{} ()'.format(self.id_crypto, self.user)