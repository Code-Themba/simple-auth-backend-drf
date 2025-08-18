from datetime.datetime import timezone
from django.db import models
from django.contrib.auth.models import BaseUserManager, AbstractBaseUser

class UserAccountManager(BaseUserManager):
    def create(self, username, email, password=None):
        if not email:
            raise ValueError("Please enter a valid email address.")
        
        user = self.model(
            email=self.normalize_email(email),
            username=username,
        )

        user.set_password(password)
        user.save(using=self.db)
        return user
    
    def create_superuser(self, username, email, password=None):
        user = self.create_user(
            email,
            username=username,
            password=password,
        )
        user.is_admin = True
        user.save(using=self.db)
        return user
    


class User(AbstractBaseUser):
    username = models.CharField(unique=True, max_length=50, blank=False)
    email = models.EmailField(max_length=255, unique=True, blank=False)
    password = models.CharField(max_length=255, blank=False)
    created_at = models.DateTimeField(auto_now_add=True, default=timezone.now)
    updated_at = models.DateTimeField(auto_now_add=True,default=timezone.now)