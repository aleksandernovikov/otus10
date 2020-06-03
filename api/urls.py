from django.urls import path
from rest_framework.routers import DefaultRouter
from rest_framework_simplejwt.views import TokenRefreshView

from api.views import CoursesViewSet, UserViewSet, CustomTokenObtainPairView

api_router = DefaultRouter()
api_router.register('courses', CoursesViewSet, basename='courses')
api_router.register('loginForm', UserViewSet, basename='loginForm')

urlpatterns = [
                  # auth
                  path('token/get/', CustomTokenObtainPairView.as_view(), name='obtain-token-pair'),
                  path('token/refresh/', TokenRefreshView.as_view(), name='refresh-token')
              ] + api_router.urls
