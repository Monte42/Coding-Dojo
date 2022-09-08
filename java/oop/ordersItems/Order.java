import java.util.ArrayList;

public class Order {
    private String name;
    private double total = 0.00;
    private boolean ready = false;
    ArrayList<Item> items;

    // CONSTRUCTORS
    public Order(){
        this.name = "Guest";
        this.items = new ArrayList<>();
    }
    
    public Order(String name){
        this.name = name;
        this.items = new ArrayList<>();
    }
    

    // ADD-REMOVE ITEMS / SETS TOTAL
    public void addItem(Item i){
        this.items.add(i);
        this.total += i.getPrice();
    }

    public void removeItem(Item i){
        this.total-=i.getPrice();
        this.items.remove(i);
    }

    // ORDER STATUS
    public void changeOrderStatus(){
        if (this.ready == true){
            this.ready = false;
        }
        this.ready = true;
    }

    public String getStatusMessage(){
        if (this.ready){
            return "Your order is ready";
        }
        return "Thank you, for waiting your order will be ready soon.";
    }

    public boolean isReady(){
        return this.ready;
    }

    // RENDER ORDER TOTAL
    public double getOrderTotal(){
        return this.total;
    }

    // CUSTOMER NAME
    public String getName(){
        return this.name;
    }

    public void setName(String name){
        this.name = name;
    }

    //  DISPLAY ORDER
    public void display(){
        String str = "Customer Name: "+this.name;
        for (Item item : this.items){
            str += "\n" + item.getName() + " - " + String.valueOf(item.getPrice());
        }
        str += "\nTotal: "+this.total;
        System.out.println(str);
    }
}
