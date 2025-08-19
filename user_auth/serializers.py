from rest_framework.serializers import ModelSerializer
from django.contrib.auth import get_user_model

User = get_user_model()

class UserAccountCreationSerializer(ModelSerializer):
    class Meta:
        model = User
        fields = ('email', 'username', 'password')

    def create(self, validated_data):
        user = User.objects.create_user(
            username= validated_data['username'],
            email= validated_data['email'],
            password= validated_data['password']
        )
        return user