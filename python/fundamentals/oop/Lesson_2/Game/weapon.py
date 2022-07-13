class Weapon:
    def __init__(self, data):
        self.damage = data["damage"]
        self.weight = data["weight"]
        self.type = data["type"]
        self.name = data["name"]