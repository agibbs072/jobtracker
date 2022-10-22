from rest_framework import routers
from .api import StageViewSet, StatusViewSet

router = routers.DefaultRouter()
router.register("api/statuses", StatusViewSet, "statuses")
router.register("api/stages", StageViewSet, "stages")

urlpatterns = router.urls
