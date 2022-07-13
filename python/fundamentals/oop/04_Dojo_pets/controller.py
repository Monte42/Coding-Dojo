# Import Classes
from ninja import Ninja
from pet import Dog, Cat

# Create Pets
Killer = Dog("Killer", "Shepard", 100,100, ["Roll Over", "Sit"])
Fluffy = Cat("Fluffy", "Persian", 250, 50)

# Create Ninja & Pass Pet Instances
Gary = Ninja('Gary', "Du Mond", Killer, ['Bones', 'Biscit'], "Dry Food")
Kaytlin = Ninja('Kaytlin', "Marshall", Fluffy, ['Tuna', 'Catnip'], "Wet Food")

# Implement Ninja Functions
Gary.walk().feed().bathe()
Kaytlin.walk().feed().bathe()

# Implement Pet Functions
print(f"{Killer.name} has {Killer.health} health and {Killer.energy} energy")
print(f"{Fluffy.name} has {Fluffy.health} health and {Fluffy.energy} energy")
Killer.eat().sleep().play().noise()
Fluffy.eat().sleep().play().noise()
print(f"{Killer.name} has {Killer.health} health and {Killer.energy} energy")
print(f"{Fluffy.name} has {Fluffy.health} health and {Fluffy.energy} energy")

