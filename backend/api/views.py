from django.shortcuts import render, redirect
from django.contrib.auth.models import User
from rest_framework import generics, status
from rest_framework.response import Response
from .serializers import UserProfile, UserProfileSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from django.conf import settings
# Create your views here.
    
class CreateUserView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perform_create(serializer)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class UserProfileView(generics.RetrieveUpdateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]

    def get_object(self):
        return self.request.user.profile

    
# def google_login_view(request):
#     client_id = settings.SOCIALACCOUNT_PROVIDERS['google']['APP']['client_id']
#     redirect_uri = 'http://localhost:8000/api/google-login/'  # Assurez-vous que cette URL correspond à celle configurée dans Google Cloud
#     scope = 'openid profile email'

#     auth_url = f'https://accounts.google.com/o/oauth2/auth?client_id={client_id}&redirect_uri={redirect_uri}&response_type=code&scope={scope}'

#     return redirect(auth_url)

# class GoogleLogin(SocialLoginView):
#     adapter_class = GoogleOAuth2Adapter
    