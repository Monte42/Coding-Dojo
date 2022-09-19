package zoo.animal.mammals;

public class Mammal {
	protected int energy;
	private int numOfLegs;
	private boolean doesFly;
	
	public Mammal (int numOfLegs, boolean doesFly){
		this.energy = 100;
		this.numOfLegs = numOfLegs;
		this.doesFly = doesFly;
	}
	
	public String displayEnergy() {
		System.out.println("Energy Level: "+this.energy);
		return "Energy Level: "+this.energy;
	}
}
