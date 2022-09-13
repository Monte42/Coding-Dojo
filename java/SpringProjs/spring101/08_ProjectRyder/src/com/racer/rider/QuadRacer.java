package com.racer.rider;

public class QuadRacer extends Rider{
	
	private String team;
	private int engineSize;
	
	public String comment() {
		System.out.println(super.comment());
		return "Racing Quads are my favorite!";
	}

	public String getTeam() {
		return team;
	}

	public void setTeam(String team) {
		this.team = team;
	}

	public int getEngineSize() {
		return engineSize;
	}

	public void setEngineSize(int engineSize) {
		this.engineSize = engineSize;
	}
	
	
}
