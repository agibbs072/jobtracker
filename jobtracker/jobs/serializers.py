from rest_framework import serializers
from .models import Statuses, Stages


class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = Statuses
        fields = '__all__'


class StagesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Stages
        fields = '__all__'
