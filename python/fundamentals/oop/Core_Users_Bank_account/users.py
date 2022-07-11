import bank_accounts # importing class from other file
BankAccount = bank_accounts.BankAccount # giving class a shorthand

# Creating a User Class
class User():
    next_available_member_id = 120301 # This is the next Users Id #
    all_users = [] # This will store all users

    def __init__(self,first_name,last_name,email,age,account_type="Savings",is_rewards_member=False,gold_reward_points=0,balance=5,interest_rate=.01):
        self.accounts = [] # this will store all of the users accounts
        self.id = User.next_available_member_id
        User.next_available_member_id += 1
        self.first_name = first_name
        self.last_name = last_name
        self.email = email
        self.age = age
        self.is_rewards_member = is_rewards_member
        self.gold_reward_points = gold_reward_points
        account = BankAccount(account_type, balance, interest_rate) # Initalizing new account
        self.accounts.append(account) # Storing new account instance in account list
        User.all_users.append(self) # Storing new user instance in user list

    # Create a new account for this instance
    def add_account(self, account_type = "Checkings", balance = 5, interest_rate = .02):
        new_account = BankAccount(account_type, balance)
        self.accounts.append(new_account)
        for account in self.accounts:
            account.interest_rate = interest_rate
        return self

    # withdraw or deposit 
    def transaction(self,amount,transaction_type='deposit',account_type='Checkings'):
        if transaction_type == 'withdraw':
            amount = -amount
        for account in self.accounts:
            if account.account_type == account_type.capitalize():
                account.balance += amount
        return self

    # Transfer funds
    def transfer(self,from_account,to_account,amount):
        transferring = True
        while transferring:
            for account in self.accounts:
                if account.account_type == from_account.capitalize():
                    account.balance -= amount
                elif account.account_type == to_account.capitalize():
                    account.balance += amount
                    transferring = False
        return self

    # Enroll into Gold Members Club
    def enroll_gold_members(self):
        if self.is_rewards_member:
            print("This user is already a Gold Member")
        else:
            self.is_rewards_member = True
        return self

    # Earn Gold Points
    def earn_gold_points(self,amount):
        self.gold_reward_points += amount
        return self

    # Spend Gold Points
    def spend_gold_points(self,amount):
        if amount > self.gold_reward_points:
            print('Sorry, member dose not have enough Gold Points')
        else:
            self.gold_reward_points -= amount
        return self

    # Converts all_accounts array into string for cleaner display function
    def convert_accounts_to_string(self):
        accounts = ""
        for account in self.accounts:
            accounts += f'''
                    Account # {account.account_number}
                    Type: {account.account_type}
                    Balance: {account.balance}
                '''
        return accounts

    # Shows single account balance
    def display_user_account_balance(self,account_type = 'Savings'):
        for account in self.accounts:
            if account.account_type == account_type.capitalize():
                print(f'{account.account_type} Balance: {account.balance}')

    # Displaying User Account Info
    def show_account_info(self):
        reward_member = 'Inactive'
        points = 'N/A'
        accounts = self.convert_accounts_to_string()
        if self.is_rewards_member:
            reward_member = 'Active'
            points = self.gold_reward_points

        print(
            f'''
            Member Id: {self.id}
            Name: {self.last_name}, {self.first_name}
            Age: {self.age}
            Email: {self.email}
            Gold Member Status: {reward_member}
            Gold Points Available: {points}
            Interest Rate: {self.accounts[0].interest_rate}
            Accounts: {accounts}
            '''
        )

gary = User('Gary','Du Mond','garyd42@legend-gary.com',35).add_account(balance = 500).enroll_gold_members().earn_gold_points(10).spend_gold_points(7)
gary.transaction(500,'deposit','savings').transaction(200,'withdraw').transfer('savings','checkings', 200)
gary.show_account_info()
gary.enroll_gold_members().spend_gold_points(5)

bob = User('Richard', 'Kreager', 'rkpainting@yahoo.com',43,balance=1010)
bob.show_account_info()
bob.display_user_account_balance()

