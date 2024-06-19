from django.urls import path, include
from . import views

urlpatterns = [
    path("user/", views.CreateUserView.as_view(),name="create_user"),  
]