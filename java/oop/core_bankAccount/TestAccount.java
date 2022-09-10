public class TestAccount {
    public static void main(String[] args) {
        BankAccount account1 = new BankAccount();
        account1.transaction("deposit", "checkings", 300.00);
        account1.transaction("deposit", "savings", 100.00);
        account1.transaction("withdraw", "checkings", 50.00);
        System.out.println("\n\n");
        account1.displayAccountInfo();
        System.out.println("Checkings: "+account1.getAccountValue("checkings"));
        System.out.println("Savings: "+account1.getAccountValue("savings"));
        System.out.println("Total: "+account1.getAccountTotal());

        BankAccount account2 = new BankAccount();
        account2.transaction("deposit", "savings", 300.00);
        account2.transaction("deposit", "savings", 100.00);
        account2.transaction("withdraw", "savings", 50.00);
        System.out.println("\n\n");
        account2.displayAccountInfo();
        System.out.println("Checkings: "+account2.getAccountValue("checkings"));
        System.out.println("Savings: "+account2.getAccountValue("savings"));
        System.out.println("Total: "+account2.getAccountTotal());

        BankAccount account3 = new BankAccount();
        account3.transaction("deposit", "checkings", 3000.00);
        account3.transaction("deposit", "savings", 1000.00);
        account3.transaction("withdraw", "checkings", 1273.00);
        System.out.println("\n\n");
        account3.displayAccountInfo();
        System.out.println("Checkings: "+account3.getAccountValue("checkings"));
        System.out.println("Savings: "+account3.getAccountValue("savings"));
        System.out.println("Total: "+account3.getAccountTotal());

    }
}
