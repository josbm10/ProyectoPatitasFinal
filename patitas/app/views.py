from django.shortcuts import render,redirect
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.permissions import AllowAny, IsAuthenticated

from rest_framework.viewsets import ModelViewSet
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from .models import *
from .serializers import *


# Create your views here.

    
# ------------mascotas----------

class IndexView(APIView):
    def get(self, request):
        context={
            'ok':True,
            'message':'El servidor funciona'
                }
        return Response(context)
        
class MascotasView(APIView):
    def get(self, request):
        dataMascota=Mascotas.objects.all()
        serMascota=MascotasSerializer(dataMascota,many=True)
        return Response(serMascota.data)
        
class MascotasPerfilView(APIView):
    def get(self, request,mascota_id):
        dataMascota=Mascotas.objects.get(pk=mascota_id)
        serMascota=MascotasSerializer(dataMascota)
        return Response(serMascota.data)
    
class AdopcionView(APIView):
    # permission_classes = (IsAuthenticated,)
    def get(self, request):
        dataMascota=Adopcion.objects.all()
        serMascota=AdopcionSerializer(dataMascota,many=True)
        return Response(serMascota.data)
    
    def post(self, request):
        serMascota=AdopcionSerializer(data=request.data)
        serMascota.is_valid(raise_exception=True)
        serMascota.save()
        return Response(serMascota.data)
#################EMAIL#########################
    
# ------------blog----------------
class BlogView(APIView):
    def get(self, request):
        dataBlog=Blog.objects.all()
        serBlog=BlogSerializer(dataBlog,many=True)
        return Response(serBlog.data)
    
    
# -----------admin Usuario--------------
    
class MascotasAdminViewPOST(APIView):
    permission_classes = (IsAuthenticated,)
    
    def post(self,request):
            print(request.user.id)
            
            dataMascota = MascotasSerializer(data=request.data)
            dataMascota.is_valid(raise_exception=True)
            dataMascota.save()
            
            context = {
            'ok':True,
            'content':dataMascota.data,
            }
            return Response(context)
       
    
class MascotasAdminView(APIView):
    
    permission_classes = (IsAuthenticated,)
    
    def get(self, request,mascota_id):
        
        dataMascota=Adopcion.objects.filter(user=mascota_id)
        serMascota=AdopcionSerializer(dataMascota,many=True)
        return Response(serMascota.data)
    
class MascotasAdminViewGET(APIView):
    
    permission_classes = (IsAuthenticated,)
    
    def put(self,request,mascota_id):
        dataMascota = Mascotas.objects.get(pk=mascota_id)
        serMascota = MascotasSerializer(dataMascota,data=request.data)
        serMascota.is_valid(raise_exception=True)
        serMascota.save()
        context = {
            'ok':True,
            'content':serMascota.data
        }
        return Response(context)
    
    def delete(self,request,mascota_id):
        dataMascota = Mascotas.objects.get(pk=mascota_id)
        dataMascota.delete()
        context = {
            'ok':True
        }
        return Response(context)
# ----------usuario---------------------------------


class RegistrationViewSet(ModelViewSet, TokenObtainPairView):
    serializer_class = RegisterSerializer
    permission_classes = (AllowAny,)
    http_method_names = ['post']

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        serializer.is_valid(raise_exception=True)
        user = serializer.save()
        refresh = RefreshToken.for_user(user)
        res = {
            "refresh": str(refresh),
            "access": str(refresh.access_token),
        }

        return Response({
            "user": serializer.data,
            "refresh": res["refresh"],
            "token": res["access"]
        }, status=status.HTTP_201_CREATED)
        
from rest_framework_simplejwt.exceptions import TokenError, InvalidToken

class LoginViewSet(TokenObtainPairView):
    serializer_class = LoginSerializer
    permission_classes = (AllowAny,)

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)

        try:
            serializer.is_valid(raise_exception=True)
        except TokenError as e:
            raise InvalidToken(e.args[0])

        return Response(serializer.validated_data, status=status.HTTP_200_OK)

