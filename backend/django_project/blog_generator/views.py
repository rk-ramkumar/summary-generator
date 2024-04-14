from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login
import json

@api_view(['POST'])
def user_login(request):
    data = json.loads(request.body)
    
    email = data.get("email")
    password = data.get("password")
    
    user = authenticate(request, email=email, password=password)
    
    if user is not None:
        login(request, user)
        return JsonResponse({'success': 'User authenticated successfully'})
    else:
        return JsonResponse({'error': 'Invalid username or password'})