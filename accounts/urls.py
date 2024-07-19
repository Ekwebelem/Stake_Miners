from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('about/', views.about, name='about'),
    path('contact/', views.contact, name='contact'),
    path('getstarted/', views.getstarted, name='getstarted'),
    path('activate_account/', views.activate_account, name='activate_account'),
    path('activated_successfully/', views.activated_successfully, name='activated_successfully'),
    path('dashboard/', views.dashboard, name='dashboard'),
    path('dashboard_success/', views.dashboard_success, name='dashboard_success'),

]
