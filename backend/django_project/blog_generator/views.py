from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, get_user_model
import json

Users = get_user_model()

@api_view(['POST'])
def user_login(request):
    data = json.loads(request.body)
    
    email = data.get("email")
    password = data.get("password")
    
    user = authenticate(request, email=email, password=password)
    
    if user is not None:
        login(request, user)
        return JsonResponse({'success': 'User authenticated successfully', 'status': "success"})
    else:
        return JsonResponse({'error': 'Invalid username or password', 'status': 'error'})
    
@api_view(['POST'])
def user_register(request):
    data = json.loads(request.body)
    
    email = data.get("email")
    password = data.get("password")
    
    if Users.objects.filter(email=email).exists():
        return JsonResponse({'error': 'User already exist', 'status': 'error'})
    
    user = Users.object.create_user(email=email, password=password)
    
    return JsonResponse({'success': 'User created successfully', 'status': 'success'})