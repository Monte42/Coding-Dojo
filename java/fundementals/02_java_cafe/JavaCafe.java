public class JavaCafe {
    public static void main(String[] args) {
        // APP VARIABLES
        // Lines of text that will appear in the app. 
        String generalGreeting = "Welcome to Cafe Java, ";
        String pendingMessage = ", your order will be ready shortly";
        String readyMessage = ", your order is ready";
        String displayTotalMessage = "Your total is $";
        
        // Menu variables (add yours below)
        double mochaPrice = 4.25;
        double dripCoffeePrice = 2.75;
        double lattePrice = 3.75;
        double cappicino = 3.90;
    
        // Customer name variables (add yours below)
        String customer1 = "Cindhuri";
        String customer2 = "Mike";
        String customer3 = "Roger";
        String customer4 = "Frank";
    
        // Order completions (add yours below)
        boolean isReadyOrder1 = true;
        boolean isReadyOrder2 = true;
        boolean isReadyOrder3 = false;
        boolean isReadyOrder4 = true;
    
        // APP INTERACTION SIMULATION (Add your code for the challenges below)
        // Example:
        System.out.println(generalGreeting + customer1);
        if (isReadyOrder1){
            System.out.println(displayTotalMessage+dripCoffeePrice+readyMessage);
        } else {
            System.out.println(displayTotalMessage+dripCoffeePrice+pendingMessage);
        }

        System.out.println(generalGreeting + customer2);
        if (isReadyOrder2){
            System.out.println(displayTotalMessage+cappicino+readyMessage);
        } else {
            System.out.println(displayTotalMessage+cappicino+pendingMessage);
        }

        System.out.println(generalGreeting + customer3);
        if (isReadyOrder3){
            System.out.println("You ordered two latte's for $"+(lattePrice*2)+readyMessage);
        } else {
            System.out.println("You ordered two latte's for $"+(lattePrice*2)+pendingMessage);
        }

        System.out.println(generalGreeting + customer4);
        if (isReadyOrder4){
            System.out.println("Sorry, "+displayTotalMessage+(mochaPrice-dripCoffeePrice)+readyMessage);
        } else {
            System.out.println("Sorry you're new total is $"+(mochaPrice-dripCoffeePrice)+pendingMessage);
        }
    }
}
