# test_data = [
#     ([1,2,15,"hello"],"stuff"),
#     ([3,5,16,"world"],"things"),
#     ([9,8,7,"Mr636"],"algos"),
# ]

# def is_in_arr(arr,val):
#     for val1 in arr:
#         if val in val1:
#             return True
#         for val2 in val1:
#             if type(val2) == list:
#                 if val in val2:
#                     return True
#                 for val3 in val2:
#                     if val == val3:
#                         return True
#     return False

# print(is_in_arr(test_data,"stuff"))
# print(is_in_arr(test_data,16))
# print(is_in_arr(test_data,"world"))
# print(is_in_arr(test_data,"o")) # o is on mulit levels

class CoffeeM:
    def __init__(self,name):
        self.name = name
        self.water_temp = 200
    def brew_now(self,beans):
        print(f"Using {beans}!")
        print("Brew now brown cow!")
    def clean(self):
        print("Cleaning!")

# class CappuccinoM( CoffeeM ):
#     def __init__(self,name):
#         super().__init__(name)
#         self.milk = "whole"
#     def make_cappuccino(self,beans):
#         super().brew_now(beans)
#         print("Frothy!!!")

class CappuccinoM( CoffeeM ):
    def __init__(self,name):
        super().__init__(name)
        self.milk = "whole"
    def make_cappuccino(self,beans):
        super().brew_now(beans)
        print("Frothy!!!")
    def clean(self):
        print("Cleaning the froth!")

class Barista:
    def __init__(self,name):
        self.name = name
        self.cafe = CoffeeM("Cafe")
    def make_coffee(self,beans):
        self.cafe.brew_now(beans)


coffe = CoffeeM("coffe")
cap = CappuccinoM('cap')
bri = Barista('Bri')

print(coffe.name)
coffe.brew_now('mild')
coffe.clean()

print(cap.name)
cap.brew_now('strong')
cap.clean()

print(bri.name)
bri.make_coffee("super")
bri.cafe.clean()