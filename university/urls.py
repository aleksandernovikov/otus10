from django.urls import path

from university.views import IndexPage

urlpatterns = [
    path('', IndexPage.as_view(), name='index'),
]
