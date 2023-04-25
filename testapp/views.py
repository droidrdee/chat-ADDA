from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.

def auth(request):
    return render(request, 'login.html')


def room(request):
    return render(request, 'new.html')