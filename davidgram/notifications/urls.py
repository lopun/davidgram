from django.conf.urls import url
from django.urls import path
from . import views

app_name = "notification" #Django 2.0에서는 app_name을 써줘야 인식을 한다.
urlpatterns = [
  url(
    regex=r'^$',
    view=views.Notifications.as_view(),
    name='notifications'
  )
]