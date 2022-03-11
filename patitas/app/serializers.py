
from rest_framework import serializers, status

from django.contrib.auth.models import User

from rest_framework.validators import UniqueValidator
from django.contrib.auth.password_validation import validate_password

from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework_simplejwt.settings import api_settings
from django.contrib.auth.models import update_last_login
from django.core.exceptions import ObjectDoesNotExist


from .models import *


        
class AdopcionSerializer(serializers.ModelSerializer):
    class Meta:
        model=Adopcion
        fields='__all__'

    
class MascotasSerializer(serializers.ModelSerializer):
    class Meta:
        model=Mascotas
        fields='__all__'
        
    def to_representation(self,instance):
        representation=super().to_representation(instance)
        representation['mascota_img']=instance.mascota_img.url
        return representation
    
class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model=Blog
        fields='__all__'
        
    def to_representation(self,instance):
        representation=super().to_representation(instance)
        representation['blog_img']=instance.blog_img.url
        return representation
    

class UserSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)
    class Meta:
        model = User
        fields = ('id','username', 'password', 'email', 'first_name', 'last_name')
        
    
class RegisterSerializer(UserSerializer):
    username = serializers.CharField(min_length=4,max_length=20,
                                   validators=[UniqueValidator(queryset=User.objects.all())])
    email = serializers.EmailField(required=True,
                                  validators=[UniqueValidator(queryset=User.objects.all())])

    password = serializers.CharField(write_only=True, required=True, validators=[validate_password])
  
    class Meta:
       model = User
       fields = ('username', 'password', 'email', 'first_name', 'last_name')
       extra_kwargs = {
            'first_name': {'required': True},
            'last_name': {'required': True}
        }
       
    def create(self, validated_data):
        try:
            user = User.objects.get(email=validated_data['email'])
        except ObjectDoesNotExist:
            user = User.objects.create_user(**validated_data)
        return user



class LoginSerializer(TokenObtainPairSerializer):
    
    def validate(self, attrs):
        data = super().validate(attrs)

        refresh = self.get_token(self.user)

        data['user'] = UserSerializer(self.user).data
        data['refresh'] = str(refresh)
        data['access'] = str(refresh.access_token)

        if api_settings.UPDATE_LAST_LOGIN:
            update_last_login(None, self.user)

        return data


    