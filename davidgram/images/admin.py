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

  list_display = (
    'file',
    'location',
    'caption',
    'creator',
    'created_at',
    'updated_at',
  ) # 기본적으로는 models의 __str__을 return하지만 list_display를 입력해줌으로써
    # 이 order으로 정렬하여 보여준다. Super cool!


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
