from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import TaskViewSet

router = DefaultRouter()
router.register(r'tasks', TaskViewSet)

# URLS for the API endpoints for the tasks app
urlpatterns = [
    path('', include(router.urls)),
]