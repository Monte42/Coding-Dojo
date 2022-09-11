package zoo.animal.mammals.gorilla;

import zoo.animal.mammals.Mammal;

public class Gorilla extends Mammal {
	private String name;
	static int numOfGorillas;
	
	// CREATE INSTANCE	
	public Gorilla(int numOfLegs, boolean doesFly, String name) {
		super(numOfLegs, doesFly);
		this.name = name;
		numOfLegs+=1;
	}

	
    // GORILLA ACTIONS
	public void throwSomething() {
		System.out.println(this.name+" just threw something");
		this.energy-=5;
	}
	
	public void eatBananas() {
		System.out.println(this.name+" is eating bananas");
		if ((100-this.energy)>=10) {
			this.energy+=10;			
		} else if ((100-this.energy)< 10) {
			this.energy = 100;
			System.out.println("Energey Filled");
		} else {
			System.out.println("Energey Full");
		}
	}
	
	public void climb() {
		System.out.println(this.name+" is climbing a tree");
		this.energy-=10;
	}
	
}
