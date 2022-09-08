import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        Item dripCoffee = new Item("regular coffe", 2.00);
        Item mocha = new Item("mocha", 2.50);
        Item latte = new Item("latte", 2.75);
        Item cappuccino = new Item("cappuccino", 4.00);

        Order order1 = new Order();
        order1.addItem(dripCoffee);
        order1.addItem(dripCoffee);
        order1.addItem(cappuccino);
        order1.changeOrderStatus();
        order1.display();
        order1.getStatusMessage();
        order1.getOrderTotal();
        System.out.println("");
    
        Order order2 = new Order();
        order2.addItem(dripCoffee);
        order2.addItem(dripCoffee);
        order2.addItem(cappuccino);
        order2.changeOrderStatus();
        order2.changeOrderStatus();
        order2.display();
        order2.getStatusMessage();
        order2.getOrderTotal();
        System.out.println("");
        
        Order order3 = new Order("Jimmy");
        order3.addItem(dripCoffee);
        order3.addItem(latte);
        order3.changeOrderStatus();
        order3.changeOrderStatus();
        order3.display();
        order3.getStatusMessage();
        order3.getOrderTotal();
        System.out.println("");

        Order order4 = new Order("Noah");
        order4.addItem(cappuccino);
        order4.addItem(mocha);
        order4.addItem(latte);
        order4.changeOrderStatus();
        order4.display();
        order4.getStatusMessage();
        order4.getOrderTotal();
        System.out.println("");

        Order order5 = new Order("Sam");
        order5.addItem(latte);
        order5.addItem(dripCoffee);
        order5.addItem(cappuccino);
        order5.changeOrderStatus();
        order5.display();
        order5.getStatusMessage();
        order5.getOrderTotal();
        System.out.println("");


        // System.out.printf("Name: %s\n", order1.getName());
        // System.out.printf("Total: %s\n", order1.getOrderTotal());
        // System.out.printf("Ready: %s\n", order1.isReady());

        // System.out.printf("Name: %s\n", order2.getName());
        // System.out.printf("Total: %s\n", order2.getOrderTotal());
        // System.out.printf("Ready: %s\n", order2.isReady());

        // System.out.printf("Name: %s\n", order3.getName());
        // System.out.printf("Total: %s\n", order3.getOrderTotal());
        // System.out.printf("Ready: %s\n", order3.isReady());

        // System.out.printf("Name: %s\n", order4.getName());
        // System.out.printf("Total: %s\n", order4.getOrderTotal());
        // System.out.printf("Ready: %s\n", order4.isReady());
    }
}

