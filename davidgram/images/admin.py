from django.contrib import admin
from . import models
# Register your models here.

@admin.register(models.Image)
class ImageAdmin(admin.ModelAdmin):

  list_display_links = (
    'location',
    'caption',
  ) # list_display에서 수정하고 싶은것들을 여기 집어넣는다.

  search_fields = (
    'location',
    'caption'
  )

  list_filter = (
    'location',
    'creator',
  )

  #list_display에서는 admin 패널에서 보여주고 싶은 내용들을 넣는다.
  list_display = (
    'file',
    'location',
    'caption',
    'creator',
    'created_at',
    'updated_at',
  )


@admin.register(models.Like)
class LikeAdmin(admin.ModelAdmin):

  list_display = (
    'creator',
    'image',
  )


@admin.register(models.Comment) #간격생기면 에러생긴다.(Decorator)
class CommentAdmin(admin.ModelAdmin):

  list_display = (
    'message',
    'creator',
    'image',
    'created_at',
    'updated_at',
  )
