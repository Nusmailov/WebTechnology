from django.contrib import admin
from api.models import *

# Register your models here.

admin.site.register(City)
admin.site.register(Color)
admin.site.register(PackageType)
admin.site.register(FlowerType)

admin.site.register(Item)
admin.site.register(OrderItem)
