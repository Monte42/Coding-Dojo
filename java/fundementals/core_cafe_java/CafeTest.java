import java.util.ArrayList;
import java.util.Arrays;
public class CafeTest {
    public static void main(String[] args) {

    /* 
    You will need add 1 line to this file to create an instance 
    of the CafeUtil class. 
    Hint: it will need to correspond with the variable name used below..
    */

        /* ============ App Test Cases ============= */

        CafeUtil appTest = new CafeUtil();
    
        System.out.println("\n----- Streak Goal Test -----");
        System.out.printf("Purchases needed by week 10: %s \n\n", appTest.getStreakGoal());
    
        System.out.println("----- Order Total Test-----");
        double[] lineItems = {3.5, 1.5, 4.0, 4.5};
        System.out.printf("Order total: %s \n\n",appTest.getOrderTotal(lineItems));
        
        System.out.println("----- Display Menu Test-----");
        
        ArrayList<String> menu = new ArrayList<String>(); // create obj instance of an array, so we get all arraylist methods
        menu.add("drip coffee");
        menu.add("cappuccino");
        menu.add("latte");
        menu.add("mocha");
        appTest.displayMenu(menu);
    
        // System.out.println("\n----- Add Customer Test-----");
        ArrayList<String> customers = new ArrayList<String>();
        // // --- Test 4 times ---
        // for (int i = 0; i < 4; i++) {
        //     appTest.addCustomer(customers);
        //     System.out.println("\n");
        // }

        System.out.println("\n----- Print Price Chart -----");
        appTest.printPriceChart("Roast", 15.0, 3);

        System.out.println("\n----- Display Menu Overload -----");
        ArrayList<Double> prices = new ArrayList<Double>();
        prices.add(1.75);
        prices.add(2.25);
        prices.add(3.5);
        prices.add(4.0);
        appTest.displayMenu(menu, prices);

        System.out.println("\n----- Sensei Add Customers -----\n");
        appTest.addCustomer(customers);
    }
}