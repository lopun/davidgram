from rest_framework import serializers
from . import models
from davidgram.users import models as user_models

class CountImageSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.Image
    fields =  (
      'id',
      'file',
      'comment_count',
      'like_count',
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


class ImageSerializer(serializers.ModelSerializer):

  comments = CommentSerializer(many=True)
  creator = FeedUsersSerializer()

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
      'created_at'
    )

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