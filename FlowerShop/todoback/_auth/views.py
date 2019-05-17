from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.authtoken.models import Token
from rest_framework.authtoken.serializers import AuthTokenSerializer
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from _auth.serializers import UserSerializer

# Create your views here.


@api_view(['POST'])
def login(request):
    serializer = AuthTokenSerializer(data = request.data)
    serializer.is_valid(raise_exception = True)
    user = serializer.validated_data.get('user')
    token, created = Token.objects.get_or_create(user = user)
    return Response({'token': token.key})


class UserCreate(APIView):
    def post(self, request, format='json'):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()
            if user:
                return Response(serializer.data, status=status.HTTP_201_CREATED)


@api_view(['POST'])
def logout(request):
    request.auth.delete()
    return Response(status = status.HTTP_204_NO_CONTENT)
