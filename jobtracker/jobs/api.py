from .models import Stages, Statuses
from rest_framework import viewsets, permissions
from .serializers import StatusSerializer, StagesSerializer


class StatusViewSet(viewsets.ModelViewSet):
    queryset = Statuses.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StatusSerializer


class StageViewSet(viewsets.ModelViewSet):
    queryset = Stages.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = StagesSerializer

