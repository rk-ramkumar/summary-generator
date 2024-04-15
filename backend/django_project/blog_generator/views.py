from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.contrib.auth import authenticate, login, get_user_model
from django.views.decorators.csrf import csrf_exempt
from django.conf import settings
from pytube import YouTube
import json
import os
import assemblyai as aai
# Need to remove
import ssl
ssl._create_default_https_context = ssl._create_unverified_context

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

        ytLink = data.get("link")
        title, audioFile = extractLink(ytLink)
        transcript = getTranscript(audioFile)
        
        if transcript.status == aai.TranscriptStatus.error:
            return JsonResponse({"error": transcript.error}, status = 502)
        
        return JsonResponse({"success": "Generated", "title": title, "text": transcript.text, 'status': 'success'})
    except (KeyError, json.JSONDecodeError):
        return JsonResponse({"error": "Invaild data"}, status = 400)
    

def extractLink(link):
    yt = YouTube(link)
    title = yt.title
    video = yt.streams.filter(only_audio = True).first()
    output = video.download(output_path = settings.MEDIA_ROOT)
    base, ext = os.path.splitext(output)
    fileName = base + '.mp3'
    
    if os.path.exists(fileName):
        os.remove(fileName)
    os.rename(output, fileName)
    
    return title, fileName
    

def getTranscript(audioPath):
    aai.settings.api_key = os.getenv("ASSEMBLYAI_KEY")
    transcriber = aai.Transcriber()
    transcript = transcriber.transcribe(audioPath)
    
    return transcript
