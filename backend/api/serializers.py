from django.contrib.auth.models import User
from rest_framework import serializers
from .models import UserProfile, Recipe, RecipeStep

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ["id", "username", "email", "first_name", "last_name", "password"]
        extra_kwargs = {
            "password": {"write_only": True}
        }

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ["user", "phone_number", "avatar"]

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        user = UserSerializer.create(UserSerializer(), validated_data=user_data)
        profile = UserProfile.objects.create(user=user, **validated_data)
        return profile

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user')
        user = instance.user

        instance.phone_number = validated_data.get('phone_number', instance.phone_number)
        instance.avatar = validated_data.get('avatar', instance.avatar)
        instance.save()

        user.username = user_data.get('username', user.username)
        user.email = user_data.get('email', user.email)
        user.first_name = user_data.get('first_name', user.first_name)
        user.last_name = user_data.get('last_name', user.last_name)
        user.save()

        return instance
    

class RecipeStepSerializerexemple(serializers.ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = ['step_number', 'description', 'photo']

class RecipeSerializerexemple(serializers.ModelSerializer):
    steps = RecipeStepSerializerexemple(many=True)

    class Meta:
        model = Recipe
        fields = ['title', 'ingredients', 'prep_time', 'cook_time', 'servings', 'photo', 'author', 'steps']

    def create(self, validated_data):
        steps_data = validated_data.pop('steps')
        recipe = Recipe.objects.create(**validated_data)
        for step_data in steps_data:
            RecipeStep.objects.create(recipe=recipe, **step_data)
        return recipe

    def update(self, instance, validated_data):
        steps_data = validated_data.pop('steps')
        instance.title = validated_data.get('title', instance.title)
        instance.ingredients = validated_data.get('ingredients', instance.ingredients)
        instance.prep_time = validated_data.get('prep_time', instance.prep_time)
        instance.cook_time = validated_data.get('cook_time', instance.cook_time)
        instance.servings = validated_data.get('servings', instance.servings)
        instance.photo = validated_data.get('photo', instance.photo)
        instance.save()

        for step_data in steps_data:
            step_id = step_data.get('id')
            if step_id:
                step = RecipeStep.objects.get(id=step_id, recipe=instance)
                step.step_number = step_data.get('step_number', step.step_number)
                step.description = step_data.get('description', step.description)
                step.photo = step_data.get('photo', step.photo)
                step.save()
            else:
                RecipeStep.objects.create(recipe=instance, **step_data)
        return instance
    
    
class RecipeStepSerializer(serializers.ModelSerializer):
    class Meta:
        model = RecipeStep
        fields = ['id', 'recipe', 'step_number', 'description', 'photo']

    def create(self, validated_data):
        # Assurez-vous que `recipe` est un champ attendu
        recipe = validated_data.pop('recipe')
        step = RecipeStep.objects.create(recipe=recipe, **validated_data)
        return step

class RecipeSerializer(serializers.ModelSerializer):
    steps = RecipeStepSerializer(many=True, read_only=True)

    class Meta:
        model = Recipe
        fields = ['id', 'title', 'ingredients', 'prep_time', 'cook_time', 'servings', 'photo', 'created_at', 'average_rating', 'steps']

    def create(self, validated_data):
        steps_data = validated_data.pop('steps', [])
        recipe = Recipe.objects.create(**validated_data)
        for step_data in steps_data:
            RecipeStep.objects.create(recipe=recipe, **step_data)
        return recipe