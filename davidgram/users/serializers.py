from rest_framework import serializers
from rest_auth.registration.serializers import RegisterSerializer
from allauth.account.adapter import get_adapter
from allauth.account.utils import setup_user_email
from . import models
from davidgram.images import serializers as images_serializers
from rest_auth.serializers import PasswordResetSerializer
from allauth.account.forms import ResetPasswordForm

# rest-auth와 allauth가 충돌하므로 이를 base.py에서 작업해줄거다.
class PasswordSerializer(PasswordResetSerializer):
    password_reset_form_class = ResetPasswordForm

class UserProfileSerializer(serializers.ModelSerializer):

  # ReadOnlyField에 해당하는 것들은 수정이 불가능하다.
  images = images_serializers.CountImageSerializer(many=True, read_only=True)
  post_count = serializers.ReadOnlyField()
  followers_count = serializers.ReadOnlyField()
  following_count = serializers.ReadOnlyField()

  class Meta:
    model = models.User
    fields = (
      'profile_image',
      'username',
      'name',
      'bio',
      'website',
      'post_count',
      'followers_count',
      'following_count',
      'images',
    )

class SimpleUserProfileSerializer(serializers.ModelSerializer):

  class Meta:
    model = models.User
    fields = (
      'profile_image',
      'username',
    )


class ListUserSerializer(serializers.ModelSerializer):

    following = serializers.SerializerMethodField()

    class Meta:
        model = models.User
        fields = (
        'id',
        'profile_image',
        'username',
        'name',
        'following'
        )

    # obj = user model and request is from context in views.
    # This part tells that we are following somebody or not!
    def get_following(self, obj):
        if 'request' in self.context:
            request = self.context['request']
            if obj in request.user.following.all():
                return True
        return False



class SignUpSerializer(RegisterSerializer):

    name = serializers.CharField(required=True, write_only=True)

    def get_cleaned_data(self):
        return {
            'name': self.validated_data.get('name', ''),
            'username': self.validated_data.get('username', ''),
            'password1': self.validated_data.get('password1', ''),
            'email': self.validated_data.get('email', '')
        }

    def save(self, request):
        adapter = get_adapter()
        user = adapter.new_user(request)
        self.cleaned_data = self.get_cleaned_data()
        adapter.save_user(request, user, self)
        setup_user_email(request, user, [])
        user.save()
        return user