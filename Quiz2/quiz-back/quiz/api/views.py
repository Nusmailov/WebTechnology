from django.http import JsonResponse
from api.models import Contact
from api.serializers import ContactSerializers
from rest_framework.decorators import api_view
import json


@api_view(['GET', 'POST'])
def contact_list(request):
    if request.method == "GET":
        contacts = Contact.objects.all()
        serializer = ContactSerializers(contacts, many=True)
        return JsonResponse(serializer.data, safe=False, status=200)

    elif request.method == "POST":
        data = json.loads(request.body)
        serializer = ContactSerializers(data=data)

        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)


@api_view(['GET', 'PUT', 'DELETE', 'POST'])
def contact_detail(request, pk):
    try:
        contact = Contact.objects.get(id=pk)
    except Contact.DoesNotExist as e:
        return JsonResponse({'error': str(e)})

    if request.method == 'GET':
        serializer = ContactSerializers(contact)
        return JsonResponse(serializer.data, status=200)

    elif request.method == 'PUT':
        serializer = ContactSerializers(instance=contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=200)
        return JsonResponse(serializer.errors)

    elif request.method == 'DELETE':
        contact.delete()
        return JsonResponse({}, status=204)

    elif request.method == "POST":
        serializer = ContactSerializers(instance=contact, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return JsonResponse(serializer.data, status=201)
        return JsonResponse(serializer.errors)
