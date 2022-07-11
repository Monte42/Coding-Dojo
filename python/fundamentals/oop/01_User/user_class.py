class User():
    def __init__(self,first_name,last_name,email,age,is_rewards_members=False,gold_card_points=0):
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_members
        self.gold_card_points = gold_card_points

    def display_info(self):
        reawrd_member = 'Rewards Member: Inactive'
        if self.is_rewards_member:
            reawrd_member = f'''
            Rewards Member: Active \n
            Gold Card Points: {self.gold_card_points}
            '''
        print( f''' 
        Card Member: {self.first_name} {self.last_name} \n
        Email: {self.email} \n
        Age: {self.age} \n
        {reawrd_member}
        ''')
        return self

    def enroll(self):
        if not self.is_rewards_member:
            self.is_rewards_member = True
        else:
            print("User is already a member")
        return self

    def earn_points(self, amount):
        self.gold_card_points += amount
        print(f"New Points Balance: {self.gold_card_points}")
        return self

    def spend_points(self, amount):
        if amount <= self.gold_card_points:
            self.gold_card_points -= amount
            print(f"Points Remaining: {self.gold_card_points}")
        else:
            print(f"Sorry, member currently does not have enough points")
        return self

larry = User("Larry", "Mills", "LarryMills@mymail.com",42)
gary = User("Gary", "Du Mond", "Mr636@mymail.com",35,True,500)
bob = User("Richard","Kreager","rkpainting@mymail.com",37)

larry.display_info().enroll().earn_points(70).display_info().spend_points(50)

gary.display_info().spend_points(80).enroll()

bob.enroll().earn_points(30).display_info().spend_points(40)