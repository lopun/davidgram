from rest_framework import serializers
from . import models
from taggit_serializer.serializers import (TagListSerializerField, TaggitSerializer)
from davidgram.users import models as user_models

class CountImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields =  (
      'id',
      'file',
      'comment_count',
      'like_count',
      'caption'
    )


class FeedUsersSerializer(serializers.ModelSerializer):

  class Meta:
    model = user_models.User
    fields = (
      "username",
      "profile_image"
    )

class CommentSerializer(serializers.ModelSerializer):

  creator = FeedUsersSerializer(read_only=True)

  class Meta:
    model = models.Comment
    fields = (
      'id',
      'message',
      'creator'
    )


class LikeSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Like
    fields = '__all__'


# TaggitSerializer을 추가!
class ImageSerializer(TaggitSerializer, serializers.ModelSerializer):

  comments = CommentSerializer(many=True)
  creator = FeedUsersSerializer()
  # Tags를 위한 Field 따로 생성!
  tags = TagListSerializerField()
  is_liked = serializers.SerializerMethodField()

  class Meta:
    model = models.Image
    fields = (
      'id',
      'file',
      'location',
      'caption',
      'comments',
      'like_count',
      'creator',
      'tags',
      'natural_time',
      # is_liked도 redux로 들어가서 Liked state를 조정해준다.
      'is_liked',
    )

  # SerializerMethodField 설명 읽어보기. get_+fieldname. obj는 model(image)를 의미함..
  def get_is_liked(self, obj):
    if 'request' in self.context:
      request = self.context['request']
      try:
        models.Like.objects.get(
          creator__id=request.user.id, image__id=obj.id)
        return True # 하트 핑크색(Liked)
      except models.Like.DoesNotExist:
        return False # 하트 검은색(Not Liked)
    return False


class SmallImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields = (
      'file',
    )

class InputImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields = (
      'file',
      'location',
      'caption'
    )