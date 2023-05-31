from rest_framework import serializers

from . import models


class PortfolioSerializer(serializers.ModelSerializer):
    user = serializers.HiddenField(default=serializers.CurrentUserDefault())

    class Meta:
        model = models.Portfolio
        fields = '__all__'
