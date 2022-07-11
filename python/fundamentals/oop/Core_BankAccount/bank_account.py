class BankAccount():
    all_accounts = []

    def __init__(self,int_rate, amount = 0):
        self.int_rate = int_rate
        self.balance = amount
        BankAccount.all_accounts.append(self)

    def deposit(self, amount):
        self.balance += amount
        return self

    def withdraw(self, amount):
        self.balance -= amount
        return self

    def display_account_info(self):
        print(f"Balance: {self.balance}")
        return self

    def yield_interest(self):
        self.balance += self.balance * self.int_rate
        return self

    @classmethod
    def print_all_accounts(cls):
        for account in cls.all_accounts:
            print(f'\nBalance: {account.balance}\nIntrest Rate:{account.int_rate}')

account_1 = BankAccount(.01)
account_2 = BankAccount(.015, 500)

account_1.deposit(100).deposit(80).deposit(100).withdraw(60).yield_interest().display_account_info()
account_2.deposit(200).deposit(400).withdraw(20).withdraw(10).withdraw(35).withdraw(40).yield_interest().display_account_info()

BankAccount.print_all_accounts()