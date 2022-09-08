public class Item {
    private String name;
    private double price;

    public Item(){
        this.name = "Bob";
        this.price = 2.22;
    }

    public Item(String name, double price){
        this.name = name;
        this.price = price;
    }

    public double getPrice(){
        return this.price;
    }
}
