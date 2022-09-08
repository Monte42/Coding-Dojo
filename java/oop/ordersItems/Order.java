import java.util.ArrayList;

public class Order {
    private String name;
    private double total;
    private boolean ready;
    ArrayList<Item> items;

    public Order(){
        this.name = "Bill";
        this.total = 0.00;
        this.ready = false;
        this.items = new ArrayList<>();
    }
    
    public Order(String name){
        this.name = name;
        this.total = 0.00;
        this.ready = false;
        this.items = new ArrayList<>();
    }
    
    public void addItem(Item i){
        this.items.add(i);
        this.total += i.getPrice();
    }

    public void orderUp(){
        this.ready = true;
    }
    public boolean isReady(){
        return this.ready;
    }
    public String getName(){
        return this.name;
    }

    public double getTotal(){
        return this.total;
    }
}
