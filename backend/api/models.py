from django.db import models

class Donation(models.Model):
    name = models.CharField(max_length=255)
    email = models.EmailField()
    address = models.TextField()
    amount = models.CharField(max_length=50)
    cause = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)

class Volunteer(models.Model):
    full_name = models.CharField(max_length=255)
    email = models.EmailField()
    phone = models.CharField(max_length=20)
    interest = models.CharField(max_length=255)
    availability = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)