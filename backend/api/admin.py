from django.contrib import admin
from . import models


@admin.register(models.User)
class UserAdmin(admin.ModelAdmin):
    pass


@admin.register(models.Portfolio)
class PortfolioAdmin(admin.ModelAdmin):
    pass
