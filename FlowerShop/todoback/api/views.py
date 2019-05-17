from django.shortcuts import render
from django.http import JsonResponse
from api.models import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from api.serializers import *
from rest_framework.views import APIView
from rest_framework import status
from django.http import Http404
from django.views.decorators.csrf import csrf_exempt
from datetime import datetime
import json


@csrf_exempt
def citys(request):
    if request.method == "GET":
        cities = City.objects.all()
        serializer = CitySerializer(cities, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = CitySerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)


@csrf_exempt
def packageType(request):
    if request.method == "GET":
        packages = PackageType.objects.all()
        serializer = PackageTypeSerializer(packages, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = PackageTypeSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)



class Get_Orders(APIView):
    def get_orders(self, pk):
        try:
            orders = Order.objects.filter(order = pk)
            return orders
        except Order.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        orders = self.get_orders(pk)
        serializer = OrderSerializer(orders, many = True)
        return Response(serializer.data)

    def post(self, request, pk):
        serializer = OrderSerializer(data = request.data)
        orders = Order.objects.get(id = pk)
        if serializer.is_valid():
            serializer.save(order = orders)
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_500_INTERNAL_SERVER_ERROR)

    def delete(self, request, pk):
        orders = self.get_orders(pk)
        orders.delete()
        return Response(status = status.HTTP_204_NO_CONTENT)


@csrf_exempt
def item_list(request):
    if request.method == "GET":
        items = Item.objects.all()
        serializer = ItemSerializer(items, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = ItemSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)


@csrf_exempt
def color_list(request):
    if request.method == "GET":
        colors = Color.objects.all()
        serializer = ColorSerializer(colors, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = ColorSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)
