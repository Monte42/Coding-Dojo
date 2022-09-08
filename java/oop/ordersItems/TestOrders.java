import java.util.ArrayList;

public class TestOrders {
    public static void main(String[] args) {

        Item dripCoffee = new Item("regular coffe", 2.00);
        Item mocha = new Item("mocha", 2.50);
        Item latte = new Item("latte", 2.75);
        Item cappuccino = new Item("cappuccino", 4.00);

        Order order1 = new Order("Cindhuri");
        order1.addItem(dripCoffee);
        order1.addItem(dripCoffee);
        order1.addItem(cappuccino);
        order1.orderUp();
        
        Order order2 = new Order("Jimmy");
        order2.addItem(dripCoffee);
        order2.orderUp();
;

        Order order3 = new Order("Noah");
        order3.addItem(cappuccino);

        Order order4 = new Order("Sam");
        order4.addItem(latte);
        order4.addItem(dripCoffee);
        order4.addItem(cappuccino);

        System.out.printf("Name: %s\n", order1.getName());
        System.out.printf("Total: %s\n", order1.getTotal());
        System.out.printf("Ready: %s\n", order1.isReady());

        System.out.printf("Name: %s\n", order2.getName());
        System.out.printf("Total: %s\n", order2.getTotal());
        System.out.printf("Ready: %s\n", order2.isReady());

        System.out.printf("Name: %s\n", order3.getName());
        System.out.printf("Total: %s\n", order3.getTotal());
        System.out.printf("Ready: %s\n", order3.isReady());

        System.out.printf("Name: %s\n", order4.getName());
        System.out.printf("Total: %s\n", order4.getTotal());
        System.out.printf("Ready: %s\n", order4.isReady());
    }
}

