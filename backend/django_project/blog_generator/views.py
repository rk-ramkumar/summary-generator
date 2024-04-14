from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from pytube import YouTube
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
    username = data.get("name")
    
    if Users.objects.filter(email=email).exists():
        return JsonResponse({'error': 'User already exist', 'status': 'error'})

    user = Users.objects.create_user(username, email, password)
    user.save()
    
    return JsonResponse({'success': 'User created successfully', 'status': 'success'})

@csrf_exempt
@api_view(['POST'])
def generateBlog(request):
    try:
        data = json.loads(request.body)

        ytLink = data.link
    except (KeyError, json.JSONDecodeError):
        return JsonResponse({"Error": "Invaild data"}, status = 400)
    

def extractLink(link):
    yt = YouTube(link)
    title = yt.title
    