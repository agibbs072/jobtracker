from django.db import models


class Stages(models.Model):
    stage_choices = [
        ("application submitted", "application submitted"),
        ("phone screen", "phone screen"),
        ("on-site interview", "on-site interview")
    ]

    stage = models.CharField(
        max_length=50,
        choices=stage_choices
    )


class Statuses(models.Model):
    status_choices = [
        ("accepted", "accepted"),
        ("rejected", "rejected"),
        ("pending", "pending")
    ]

    status = models.CharField(
        max_length=50,
        choices=status_choices
    )

