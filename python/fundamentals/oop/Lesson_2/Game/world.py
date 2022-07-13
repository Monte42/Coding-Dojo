# This file is consider our controller, calls the methods

import player
import weapon
Player = player.Player
Weapon = weapon.Weapon

players = [
    {"name": "Bill", "strength": 75, "speed": 65, "armor": 25},
    {"name": "Ted", "strength": 100, "speed": 62, "armor": 25},
]

weapons = [
    {"name": "Arthur","damage": 50, "weight": 45, "type": "Blunt"},
    {"name": "Claymore","damage": 75, "weight": 30, "type": "Sharp"},
]

joe = Player(players[0])
jorge = Player(players[1])

Player.print_all_players_names()

ax = Weapon(weapons[0])

joe.add_weapon(ax)
joe.use_weapon(jorge,ax)
joe.use_weapon(jorge,ax)