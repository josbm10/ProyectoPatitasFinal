from django.contrib import admin
from .models import *

# Register your models here.

@admin.register(Mascotas)
class MascotasAdmin(admin.ModelAdmin):
    search_fields=('mascota_id','mascota_nom')
    list_display=('mascota_id','mascota_nom')
    
@admin.register(Blog)
class BlogAdmin(admin.ModelAdmin):
    search_fields=('blog_fech','blog_title')
    list_display=('blog_fech','blog_title')

@admin.register(Adopcion)
class AdopcionAdmin(admin.ModelAdmin):
    list_display = ('adopcion_fech','mascota')
    search_fields= ('adopcion_fech','mascota')
    
@admin.register(Cliente)
class ClienteAdmin(admin.ModelAdmin):
    list_display = ('usu_id','telefono','direccion')
    search_fields = ('usu_id','telefono','direccion')