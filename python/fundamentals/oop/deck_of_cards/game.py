from classes.deck import Deck
from classes.player import Player

# use input to ask comp for card value
# create fun for comp to check hand for card val, randomly pick one and ask for val
# create func to check hand for equale val
# create func to exchange card between players
# create func to go fish similar to deal
# create books list
# create fun to check for 4 of kind and remove and place in books list
# create while loop to run as long both players have cards in hand 


bicycle = Deck()
# player_1 = Player(input("Please enter you name: "))
player_1 = Player("Gary")
player_2 = Player("Moby")

bicycle.shuffle_deck().shuffle_deck()

bicycle.deal(player_1,player_2)

# player_1.show_hand()
player_2.show_hand()



def ask_comp_for_card():
    desired_card = input("ask for a card value: ")
    for card in player_2.cards:
        if desired_card == card.card_value():
            return True

print(ask_comp_for_card())