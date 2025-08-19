from rest_framework.views import APIView
from rest_framework import permissions, status
from rest_framework.response import Response
from .models import User
from .serializers import UserAccountCreationSerializer


class UserRegistrationView(APIView):
    def post(self, request):
        data = request.data
        username = data['username']
        email = data['email']
        password = data['password']
        user = User.objects.create_user(username, email, password)
        user = UserAccountCreationSerializer(user)
        
        return Response(status=status.HTTP_201_CREATED)


class RetrieveUserView(APIView):
    permission_classes=[permissions.IsAuthenticated]
    def get(self, request):
        pass