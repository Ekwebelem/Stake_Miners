from django.shortcuts import render

# Create your views here.

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def contact(request):
    return render(request, 'contact.html')

def getstarted(request):
    return render(request, 'getstarted.html')

def activate_account(request):
    return render(request, 'activate_account.html')


def activated_successfully(request):
    return render(request, 'activated_successfully.html')


def dashboard(request):
    return render(request, 'dashboard.html')


def dashboard_success(request):
    return render(request, 'dashboard_success.html')
