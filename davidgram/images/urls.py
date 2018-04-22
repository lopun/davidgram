from django.conf.urls import url
from django.urls import path
from . import views

app_name = "images" #Django 2.0에서는 app_name을 써줘야 인식을 한다.
urlpatterns = [
  url(
    regex=r'^$',
    view=views.Images.as_view(),
    name='Images'
  ),
  url(
    regex=r'^(?P<image_id>[0-9]+)/$',
    view=views.ImageDetail.as_view(),
    name='feed'
  ),
  url(
    regex=r'^(?P<image_id>[0-9]+)/likes/$',
    view=views.LikeImage.as_view(),
    name='like_image'
  ),
  url(
    regex=r'^(?P<image_id>[0-9]+)/unlikes/$',
    view=views.UnLikeImage.as_view(),
    name='like_image'
  ),
  url(
    regex=r'^(?P<image_id>[0-9]+)/comments/$',
    view=views.CommentOnImage.as_view(),
    name='comment_image'
  ),
  url(
    regex=r'^(?P<image_id>[0-9]+)/comments/(?P<comment_id>[0-9]+)$',
    view=views.ModerateComments.as_view(),
    name='moderate_comment'
  ),
  url(
    regex=r'^comments/(?P<comment_id>[0-9]+)/$',
    view=views.Comment.as_view(),
    name='comment'
  ),
  url(
    regex=r'^search/$',
    view=views.Search.as_view(),
    name='search'
  ),
]