local_val = "magical unicorns"

def add(num):
    return num + num

class User():
    def __init__(self,name):
        self.name=name
    def say_hello(self):
        return f"{self.name} says hello"


# # print("The file is being executed directly")
# print(square(5))
# user = User("Gary")
# print(user.say_hello())
print(__name__)



if __name__ == "__main__":
    print("The file is being executed directly")
    print(add(5))
    user = User("Gary")
    print(user.say_hello())
    print(__name__)
# else:
#     print("the file is being executed because it was imported into another file. The File is called", __name__)
