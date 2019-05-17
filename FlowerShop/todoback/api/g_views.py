from rest_framework import generics
from api.models import *
from api.serializers import *
from rest_framework.permissions import IsAuthenticated


class Basket_List(generics.ListCreateAPIView):
    serializer_class = OrderSerializer
    permission_classes = (IsAuthenticated, )

    def get_queryset(self):
        return Order.objects.filter(user_id=self.request.user)

    def perform_create(self, serializer):
        serializer.save(user_id__id=self.request.user)
