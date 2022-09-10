import java.util.Random;

public class BankAccount {
    Random rand = new Random();
    // INSTANCE VARs
    private String accountNumber;
    private double checkings = 0.00;
    private double savings = 0.00;
    
    // CLASS VARs
    static int numberOfAccounts = 0;
    static double banksHoldings = 0;


    // CONSTRUCTORS
    public BankAccount(){
        this.accountNumber = generateAccountNumber();
        numberOfAccounts += 1; 
    }
    // **** USERS CANT SET ACCOUNT VALLUE ***
    // public BankAccount(double savings){
    //     this.accountNumber = generateAccountNumber();
    //     numberOfAccounts += 1;
    //     this.savings = savings;
    // }

    // public BankAccount(double savings, double checking){
    //     this.accountNumber = generateAccountNumber();
    //     numberOfAccounts += 1;
    //     this.savings = savings;
    //     this.checkings = checking;
    // }


    // PRIVATE
    private String generateAccountNumber(){
        String str = "";
        for (int i=0;i<10;i++){
            str += String.valueOf(rand.nextInt(9));
        }
        return str;
    }


    // GETTERS
    public double getAccountValue(String type){
        if (type == "checkings"){
            return this.checkings;
        } else if (type == "savings"){
            return this.savings;
        } else {
            return -1.11;
        }
    }

    public double getAccountTotal(){
        return this.checkings + this.savings;
    }

    public void displayAccountInfo(){
        System.out.println("Account: "+this.accountNumber);
        System.out.println("Checkings: "+this.checkings);
        System.out.println("Savings: "+this.savings);
        System.out.println("");
    }


    // WITHDRAW & DEPOSIT
    public String transaction(String transaction,String type,double amount){
        if (transaction == "deposit"){
            if (type == "checkings"){
                this.checkings += amount;
            } else if (type == "savings"){
                this.savings += amount;
            }
        } else if (transaction == "withdraw"){
            if (type == "checkings"){
                this.checkings -= amount;
            } else if (type == "savings"){
                this.savings -= amount;
            }
        } else {
            System.err.println("*****Invaild request*****");
        }
        return transaction+" successfull!";
    }

}
