from django.db import models
from django.utils.encoding import python_2_unicode_compatible
from davidgram.users import models as user_models
from taggit.managers import TaggableManager
# Create your models here.

@python_2_unicode_compatible
class TimeStampedModel(models.Model):

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  # abstract = True는 TimeStampedModel의 Table을 생성을 안하는 역할을 한다.
  # TSM이 다른 모델의 parent(base)로 들어갈 때 필드를 생성해주는 역할만 하도록!
  class Meta:
    abstract = True


@python_2_unicode_compatible
class Image(TimeStampedModel):

  """ IMAGE MODEL """


  file = models.ImageField()
  location = models.CharField(max_length=140)
  caption = models.TextField()
  creator = models.ForeignKey(user_models.User, null=True, on_delete=models.PROTECT, related_name="images")
  tags = TaggableManager()

  # property의 역할은 like_count를 DB에 보내지는 않지만 serializer 혹은 다른 모델에서 사용은 가능하도록 한다.
  @property
  def like_count(self):
    return self.likes.all().count()

  @property
  def comment_count(self):
    return self.comments.all().count()

  def __str__(self):
    return '{} - {}'.format(self.location, self.caption)

  class Meta:
    ordering = ['-created_at']


@python_2_unicode_compatible
class Comment(TimeStampedModel):

  """ COMMENT MODEL """

  message = models.TextField()
  image = models.ForeignKey(Image, null=True, on_delete=models.PROTECT, related_name="comments")
  creator = models.ForeignKey(user_models.User, null=True, on_delete=models.PROTECT)

  def __str__(self):
    return self.message


@python_2_unicode_compatible
class Like(TimeStampedModel):

  """ LIKE MODEL """

  creator = models.ForeignKey(user_models.User, null=True, on_delete=models.PROTECT)
  image = models.ForeignKey(Image, null=True, on_delete=models.PROTECT, related_name="likes")

  def __str__(self):
    return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)