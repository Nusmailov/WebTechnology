from django.db import models
from django.contrib.auth.models import User


class City(models.Model):
    Name = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.Name)

    def to_json(self):
        return {
            'CityID': self.id,
            'Name': self.Name,
        }


class FlowerType(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.name)

    def to_json(self):
        return {
            'id': self.id,
            'name': self.name,
        }


class PackageType(models.Model):
    Name = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.Name)

    def to_json(self):
        return {
            'id': self.id,
            'Name': self.Name,
        }


class Color(models.Model):
    name = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.name)


class Order(models.Model):
    OrderNo = models.CharField(max_length=255)
    PackageTypeID = models.IntegerField()
    PMethod = models.CharField(max_length=255)
    GTotal = models.IntegerField()
    DeletedOrderItemIDs = models.CharField(max_length=255)
    user_id = models.ForeignKey(User, on_delete=models.CASCADE)
    city = models.ForeignKey(City, on_delete=models.CASCADE)

    def __str__(self):
        return '{}'.format(self.user_id)


class Item(models.Model):
    Name = models.CharField(max_length=200)
    Price = models.IntegerField()
    color = models.ForeignKey(Color, on_delete=models.CASCADE)
    Image = models.CharField(max_length=200)

    def __str__(self):
        return '{}'.format(self.Name)

    def to_json(self):
        return {
            'ItemID': self.id,
            'Name': self.Name,
            'Price': self.Price
        }


class OrderItem(models.Model):
    OrderID = models.ForeignKey(Order, on_delete=models.CASCADE)
    ItemID = models.ForeignKey(Item, on_delete=models.CASCADE)
    Quantity = models.IntegerField()

    def __str__(self):
        return '{}'.format(self.OrderID)



