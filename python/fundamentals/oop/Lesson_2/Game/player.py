class Player():
    all_players =[]

    def __init__(self, data):
        self.name = data["name"]
        self.health = 100
        self.strength = data["strength"]
        self.speed = data["speed"]
        self.weapons = []
        self.armor = data['armor']
        Player.all_players.append(self)

    def add_weapon(self, weapon):
        self.weapons.append(weapon)
        return self

    def use_weapon(self,enemy, weapon):
        print(f"{enemy.name} with {enemy.health} HP is being attacked")
        print(enemy.armor/100)
        enemy.health -= (weapon.damage - (enemy.armor/100))
        if enemy.health > 0:
            print(f"{enemy.name}'s new health is {enemy.health}")
        else:
            print(f"{enemy.name} is dead")

    @classmethod
    def print_all_players_names(cls):
        for player in cls.all_players:
            print(f"This player's name is {player.name}")