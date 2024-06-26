from django.urls import path, include
from . import views
from .views import UserProfileView, MyTokenObtainPairView, RecipeViewSet, RecipeStepViewSet
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'recipes', RecipeViewSet)
router.register(r'steps', RecipeStepViewSet)
urlpatterns = [
    path("user/", views.CreateUserView.as_view(),name="create_user"),
    path('user/profile/', UserProfileView.as_view(), name='user_profile'),
    path('api/token/', MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('', include(router.urls)),

]