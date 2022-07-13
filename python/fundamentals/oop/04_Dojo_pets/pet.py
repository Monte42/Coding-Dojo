# Parent Class
class Pet():
    def __init__(self, name, type, health = 100, energy = 100):
        self.name = name
        self.type = type
        self.health = health
        self.energy = energy

    def sleep(self):
        self.energy += 25
        return self

    def eat(self):
        self.health += 10
        self.energy += 5
        return self

    def play(self):
        self.health += 5
        return self

    def noise(self):
        print("Make Noise")
        return self

    def print_name(self):
        print(self.name)
        return self


# Sub Classes
class Cat(Pet):
    def __init__(self, name, type, health, energy):
        super().__init__(name, type, health, energy)
    
    def noise(self):
        print("Meow")
        return self

class Dog(Pet):
    def __init__(self, name, type, health, energy, tricks):
        super().__init__(name, type, health, energy)
        self.tricks = tricks

    def noise(self):
        print("Woof")
        return self
