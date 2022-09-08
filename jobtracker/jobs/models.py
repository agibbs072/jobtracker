from django.db import models


class Jobs(models.Model):
    status_choices = [
        ("accepted", "accepted"),
        ("rejected", "rejected"),
        ("pending", "pending")
    ]
    stage_choices = [
        ("application submitted", "application submitted"),
        ("phone screen", "phone screen"),
        ("on-site interview", "on-site interview")
    ]

    company_name = models.CharField(max_length=50)
    position = models.CharField(max_length=50)
    date_of_application = models.DateField()
    stage = models.CharField(
        max_length=50,
        choices=stage_choices
    )
    status = models.CharField(
        max_length=50,
        choices=status_choices
    )
    notes = models.CharField(max_length=100)
