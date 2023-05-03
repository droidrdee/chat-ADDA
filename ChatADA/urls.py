
from django.contrib import admin
from django.urls import path, include
from django.http import HttpResponse

# written for testing
def home(request):
    return HttpResponse('home page  aa bb cc dd')

# def room(request):
#     return HttpResponse('room page')


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('testapp.urls')),
    
    # path('', home),
    # path('room/', room),
]
