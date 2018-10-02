from django.apps import AppConfig


class UsersConfig(AppConfig):
    name = "davidgram.users"
    verbose_name = "Users"

    def ready(self):
        """Override this to put in:
            Users system checks
            Users signal registration
        """
        # try:
        #     import users.signals  # noqa F401
        # except ImportError:
        #     pass
        from .signals import user_signed_up
