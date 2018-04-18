from django.db import models
from davidgram.users import models as user_models

# Create your models here.

#@python_2_unicode_compatible
class TimeStampedModel(models.Model):

  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    abstract = True


#@python_2_unicode_compatible
class Image(TimeStampedModel):

  """ IMAGE MODEL """

  file = models.ImageField()
  location = models.CharField(max_length=140)
  caption = models.TextField()
  creator = models.ForeignKey(user_models.User, null=True, on_delete=models.PROTECT)

  def __str__(self):
    return '{} - {}'.format(self.location, self.caption)


#@python_2_unicode_compatible
class Comment(TimeStampedModel):

  """ COMMENT MODEL """

  message = models.TextField()
  image = models.ForeignKey(Image, null=True, on_delete=models.PROTECT)
  creator = models.ForeignKey(user_models.User, null=True, on_delete=models.PROTECT)

  def __str__(self):
    return self.message


#@python_2_unicode_compatible
class Like(TimeStampedModel):

  """ LIKE MODEL """

  creator = models.ForeignKey(user_models.User, null=True, on_delete=models.PROTECT)
  image = models.ForeignKey(Image, null=True, on_delete=models.PROTECT)

  def __str__(self):
    return 'User: {} - Image Caption: {}'.format(self.creator.username, self.image.caption)