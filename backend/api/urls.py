from django.urls import path, include, re_path
from . import views
from djoser.views import UserViewSet
from rest_framework import routers
from djoser import urls

router = routers.DefaultRouter()
router.register(r'portfolio', views.PortfolioViewSet, basename='portfolio')

urlpatterns = [
    re_path(r'^auth/', include('djoser.urls')),
    re_path(r'^auth-token/', include('djoser.urls.authtoken')),
    path('', include(router.urls))
]
