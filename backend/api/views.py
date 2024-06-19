from django.shortcuts import render
from django.contrib.auth.models import User
from rest_framework import generics
from .serializers import UserProfile, UserProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
# Create your views here.
    
class CreateUserView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]
    
    
class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return self.request.user.profile
    