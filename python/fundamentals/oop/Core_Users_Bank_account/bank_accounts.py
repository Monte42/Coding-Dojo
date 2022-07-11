class BankAccount():
    next_available_account_number = 100101
    all_accounts = []

    def __init__(self, account_type = 'Savings', balance = 0, interest_rate = .01):
        self.account_number = BankAccount.next_available_account_number
        BankAccount.next_available_account_number += 1
        self.account_type = account_type
        self.balance = balance
        self.interest_rate = interest_rate
        BankAccount.all_accounts.append(self)

    def deposit(self,amount):
        self.balance += amount
        return self

    def withdraw(self,amount):
        self.balance -= amount
        return self

    def yeild_interest(self):
        self.balance += self.balance * self.interest_rate
        return self

    def print_balance(self):
        print((f"Balance: {self.balance}\n"))

    @classmethod
    def show_all_accounts(cls):
        for account in cls.all_accounts:
            print(f"Account # {account.account_number}\nBalance: {account.balance}\nInterest Rate: {account.interest_rate}")