from django.urls import path
from .views import send_project_request

urlpatterns = [
    path('send-request/', send_project_request.as_view(), name='send-request'),
]