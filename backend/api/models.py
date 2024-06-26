from django.db import models
from django.contrib.auth.models import User

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    phone_number = models.CharField(max_length=15, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    avatar = models.ImageField(upload_to='avatars/', null=True, blank=True)

    def __str__(self):
        return self.user.username
    
class Recipe(models.Model):
    title = models.CharField(max_length=255)
    ingredients = models.TextField(help_text="Liste des ingrédients séparés par des virgules")
    prep_time = models.IntegerField(help_text="Temps de préparation en minutes")
    cook_time = models.IntegerField(help_text="Temps de cuisson en minutes")
    servings = models.IntegerField(help_text="Nombre de portions")
    photo = models.ImageField(upload_to='recipe_photos/', null=True, blank=True)
    author = models.ForeignKey(User, related_name='recipes', on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    average_rating = models.FloatField(default=0.0)

    def __str__(self):
        return self.title

class RecipeStep(models.Model):
    recipe = models.ForeignKey(Recipe, related_name='steps', on_delete=models.CASCADE)
    step_number = models.IntegerField()
    description = models.TextField()
    photo = models.ImageField(upload_to='step_photos/', null=True, blank=True)

    class Meta:
        unique_together = ['recipe', 'step_number']
        ordering = ['step_number']

    def __str__(self):
        return f"{self.recipe.title} - Étape {self.step_number}"
    
class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, related_name='ratings', on_delete=models.CASCADE)
    stars = models.IntegerField(choices=[(i, i) for i in range(1, 6)])  # 1 to 5 stars

    class Meta:
        unique_together = ['user', 'recipe']

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        self.recipe.update_average_rating()

    def __str__(self):
        return f"{self.user.username} - {self.recipe.title} - {self.stars} stars"

# Add method to update average rating in Recipe model
def update_average_rating(self):
    ratings = self.ratings.all()
    total = sum(rating.stars for rating in ratings)
    count = ratings.count()
    self.average_rating = total / count if count > 0 else 0
    self.save()
Recipe.update_average_rating = update_average_rating

class Comment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    recipe = models.ForeignKey(Recipe, related_name='comments', on_delete=models.CASCADE)
    text = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.user.username} - {self.recipe.title}"