# Provided Team List
players = [
    {
    	"name": "Kevin Durant", 
    	"age":34, 
    	"position": "small forward", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Jason Tatum", 
    	"age":24, 
    	"position": "small forward", 
    	"team": "Boston Celtics"
    },
    {
    	"name": "Kyrie Irving", 
    	"age":32, "position": "Point Guard", 
    	"team": "Brooklyn Nets"
    },
    {
    	"name": "Damian Lillard", 
    	"age":33, "position": "Point Guard", 
    	"team": "Portland Trailblazers"
    },
    {
    	"name": "Joel Embiid", 
    	"age":32, "position": "Power Foward", 
    	"team": "Philidelphia 76ers"
    },
    {
    	"name": "", 
    	"age":16, 
    	"position": "P", 
    	"team": "en"
    }
]

# Createing the Player Class
class Player():
    all_players = []
    def __init__(self, data):
        self.name = data["name"]
        self.age = data["age"]
        self.position = data["position"]
        self.team = data["team"]
        Player.all_players.append(self)

    def display_player(self):
        print(f'''
            Name: {self.name}
            Age: {self.age}
            Position: {self.position}
            Team: {self.team}
            ''')

    @classmethod
    def get_team(cls, team_list):
        for player in team_list:
            Player(player)

    @classmethod
    def display_all_players(cls):
        for player in cls.all_players:
            cls.display_player(player)
            # print(f'''                     This code was replaced
            # Name: {player.name}            with the instance method
            # Age: {player.age}              display_player()
            # Position: {player.position}
            # Team: {player.team}
            # ''')

# Creating Single Instances
Kevin = Player(players[0])
Jason = Player(players[1])
Kyrie = Player(players[2])

Kevin.display_player()
Jason.display_player()
Kyrie.display_player()

# Calling class methods to create instance list and display players
Player.get_team(players)
Player.display_all_players()