
from django.db import models

from cloudinary.models import CloudinaryField
from django.contrib.auth.models import User


# Create your models here.

class Mascotas(models.Model):
       
    DISPONIBLE='false'
    NO_DISPONIBLE='true'
    
    STATUS_CHOISE= (
        (DISPONIBLE,'DISPONIBLE'),
        (NO_DISPONIBLE,'NO DISPONIBLE')
    )
    HEMBRA='HEMBRA'
    MACHO='MACHO'
    
    SEX_CHOISE= (
        (HEMBRA,'HEMBRA'),
        (MACHO,'MACHO')
    )
    
    MEDIO='MEDIO'
    ALTO='ALTO'
    BAJO='BAJO'
    
    ACTIVITY_CHOISE= (
        (ALTO,'ALTO'),
        (MEDIO,'MEDIO'),
        (BAJO,'BAJO')
    )
    LARGO='LARGO'
    CORTO='CORTO'
    
    HAIR_CHOISE= (
        (CORTO,'CORTO'),
        (LARGO,'LARGO')
    )
    MEDIANO='MEDIANO'
    PEQUEÑO='PEQUEÑO'
    GRANDE='GRANDE'
    
    TALL_CHOISE= (
        (PEQUEÑO,'PEQUEÑO'),
        (MEDIANO,'MEDIANO'),
        (GRANDE,'GRANDE')
    )
    mascota_id=models.AutoField(primary_key=True)
    mascota_nom=models.CharField(max_length=100,verbose_name='Nombre')
    mascota_est=models.CharField(max_length=20,choices=STATUS_CHOISE,verbose_name='Estado de Adopcion')
    mascota_img=CloudinaryField('image',default='')
    mascota_age=models.IntegerField(default=0,verbose_name='Edad')
    mascota_sex=models.CharField(max_length=10,choices=SEX_CHOISE,verbose_name='Sexo')
    mascota_act=models.CharField(max_length=10,choices=ACTIVITY_CHOISE,verbose_name='Nivel de Actividad')
    mascota_hair=models.CharField(max_length=10,choices=HAIR_CHOISE,verbose_name='Pelo')
    mascota_tall=models.CharField(max_length=10,choices=TALL_CHOISE,verbose_name='Tamaño')
    mascota_hty=models.TextField(verbose_name='Historia')
    def __str__(self):
        return self.mascota_nom

class Blog(models.Model):
    blog_id=models.AutoField(primary_key=True)
    blog_title=models.CharField(max_length=100,verbose_name='Titulo',default='')
    blog_fech=models.DateTimeField(auto_now=True,verbose_name='Publicacion')
    blog_img=CloudinaryField('Portada',default='')
    blog_hty=models.TextField(verbose_name='Contenido')
    def __str__(self):
        return self.blog_title
    

class Cliente(models.Model):
    cliente_id=models.AutoField(primary_key=True)
    direccion = models.CharField(max_length=200)
    telefono = models.CharField(max_length=20,unique=True)
    usu_id = models.OneToOneField(User,to_field='id',on_delete=models.CASCADE,
                               db_column='id',verbose_name='Usuario')

    def __str__(self):
        return "%s / %s" % (self.usu_id,self.telefono)


class Adopcion(models.Model):
    adopcion_id=models.AutoField(primary_key=True)
    adopcion_fech=models.DateTimeField(auto_now=True,verbose_name='Fecha')
    user=models.ForeignKey(User,to_field='id',db_column='id',
                             on_delete=models.CASCADE,verbose_name='Usuario')
    mascota=models.OneToOneField(Mascotas,to_field='mascota_id',on_delete=models.CASCADE,
                             db_column='mascota_id',verbose_name='Mascota')
   
    
    def __str__(self):
        return "%s / %s" % (self.user,self.mascota)
    



