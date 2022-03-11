from django.urls import path

from . import views


urlpatterns = [
    path('',views.IndexView.as_view(),name='index'),
    path('mascotas',views.MascotasView.as_view(),name='mascotas'),
    path('mascotas/<int:mascota_id>',views.MascotasPerfilView.as_view(),name='mascotas_perfil'),
    path('blog',views.BlogView.as_view(),name='blog'),
    path('register',views.RegistrationViewSet.as_view({'post': 'create'}),name='crearUsuario'),
    path('login',views.LoginViewSet.as_view(),name='loginUsuario'),
    path('adopcion',views.AdopcionView.as_view(),name='adopcion'),
    path('perfil/<int:mascota_id>',views.MascotasAdminView.as_view(),name='perfilView'),
    path('perfilPost',views.MascotasAdminViewPOST.as_view(),name='perfilViewPost'),
    path('perfilGet/<int:mascota_id>',views.MascotasAdminViewGET.as_view(),name='perfilViewGet'),
]