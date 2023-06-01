from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response
from . import serializers, models
from rest_framework import permissions


class PortfolioViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.PortfolioSerializer

    def get_queryset(self):
        return models.Portfolio.objects.filter(user=self.request.user).all()
