from pet import Pet

class Dog(Pet):
    def __init__(self, name, type, health, energy, tricks):
        super().__init__(name, type, health, energy)
        self.tricks = tricks

    def noise(self):
        print("Woof")
        return self