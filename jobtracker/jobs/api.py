from .models import Jobs
from rest_framework import viewsets, permissions
from .serializers import JobSerializer


class JobViewSet(viewsets.ModelViewSet):
    queryset = Jobs.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class = JobSerializer
