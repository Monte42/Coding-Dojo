class Player():
    def __init__(self,name):
        self.name = name
        self.cards = []

    def add_card_to_hand(self, card):
        self.cards.append(card)

    def remove_card_from_hand(self,card):
        if card in self.cards:
            self.cards.pop(card)

    def show_hand(self):
        for card in self.cards:
            print(f"{card.string_val} of {card.suit}")
    
    

