from django.contrib.auth.models import User
from api.serializers import PostSerializer
from rest_framework import generics
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.shortcuts import render



@api_view(['POST'])
def login(request):
    serializer = AuthTokenSerializer(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.validated_data['user']
    token, created = Token.objects.get_or_create(user=user)
    return Response({'token': token.key})


@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)


#
# @api_view(['POST'])
# def login(request):
#     username = request.data.get('username')
#     password = request.data.get('password')
#     user = authenticate(username=username, password=password)
#     if user is None:
#         # return Response({'error': 'Invalid data'})
#         return render(request, 'login.html')
#     # auth_login(request.data, user)
#     token, created = Token.objects.get_or_create(user=user)
#     return render(request, 'login.html')
#
#
#
# @api_view([])
# def logout(request):
#     request.user.auth_token.delete()
#     return Response(status=status.HTTP_200_OK)
