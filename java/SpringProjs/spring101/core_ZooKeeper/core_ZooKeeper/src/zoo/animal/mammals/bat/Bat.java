package zoo.animal.mammals.bat;

import zoo.animal.mammals.Mammal;

public class Bat extends Mammal{
	private String name;
	
	
	public Bat() {
		super(2, true);
		this.name = "Monster Batty";
		this.energy = 300;
	}

	public void fly() {
		System.out.println("WHOOSSHH");
		this.energy -= 50;
	}

	public void eatHumans() {
		System.out.println("so- well, never mind, "+this.name+" is increasing his energy");
		this.energy += 25;
	}
	
	public void attackTown() {
		System.out.println("Fire! I Smell Smoke!");
		this.energy -= 100;
	}
	
}
