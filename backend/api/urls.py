from django.urls import path, include
from . import views

urlpatterns = [
    path("user/", views.CreateUserView.as_view(),name="create_user"),  
    #path('google-login/', views.GoogleLogin.as_view(), name='google_login'),

]