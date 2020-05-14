from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

from api.views import ListCourses

api_router = DefaultRouter()

api_router.register('courses', ListCourses, basename='courses')

urlpatterns = [
                  # auth
                  path('token/get/', TokenObtainPairView.as_view(), name='obtain-token-pair'),
                  path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token')
              ] + api_router.urls
