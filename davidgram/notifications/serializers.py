from rest_framework import serializers
from . import models
from davidgram.users import serializers as user_serializers
from davidgram.images import serializers as image_serializers

class NotificationSerializer(serializers.ModelSerializer):

  creator = user_serializers.ListUserSerializer()
  image = image_serializers.SmallImageSerializer()


  class Meta:
    model = models.Notification
    fields = (
      'creator', 'to', 'notification_type', 'image', 'comment', 'natural_time', 'id', 'updated_at', 'created_at'
    )