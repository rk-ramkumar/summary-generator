from django.urls import path
from . import views

urlpatterns = [
    path("api/login/", views.user_login, name="login" )
    path('api/register/', views.user_register, name="register")
],