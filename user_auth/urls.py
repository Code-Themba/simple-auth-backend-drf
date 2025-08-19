from django.urls import path
from .views import UserRegistrationView, RetrieveUserView

urlpatterns = [
   path('register/', view=UserRegistrationView.as_view()), 
   path('me/', view=RetrieveUserView.as_view()), 
]

