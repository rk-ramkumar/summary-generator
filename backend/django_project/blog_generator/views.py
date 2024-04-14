from django.shortcuts import render
from django.http import JsonResponse
from django.views.decorators.http import require_POST
import json

@require_POST
def user_login(request):
    data = json.loads(request.body)
    
    email = data.get("email")
    password = data.get("password")
    return JsonResponse("")