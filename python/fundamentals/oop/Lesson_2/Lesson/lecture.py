class Dog():
    def __init__(self, breed, height, weight, name):
        self.breed = breed
        self.height = height
        self.weight = weight
        self.name = name

    def display_name(self):
        print(self.name)




Bob = Dog("Shepard", 5, 6, "Steven")

Bob.display_name()
