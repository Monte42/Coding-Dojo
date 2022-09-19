package com.caresoft.clinicapp.models;
import java.util.ArrayList;
import java.util.Date;
import com.caresoft.clinicapp.interfaces.HIPAACompliantAdmin;
import com.caresoft.clinicapp.interfaces.HIPAACompliantUser;




public class AdminUser extends User implements HIPAACompliantUser, HIPAACompliantAdmin {
	private String role;
    private ArrayList<String> securityIncidents;
    
    // TO DO: Implement a constructor that takes an ID and a role
    public AdminUser(Integer id, String role) {
    	super(id);
    	this.role = role;
    	this.securityIncidents = new ArrayList<>();
    }
    
    
    // TO DO: Implement HIPAACompliantUser!
    public boolean assignPin(int pin) {
		if (String.valueOf(pin).length() == 6) {
			this.pin = pin;
			return true;
		}
		return false;
	}
	
	public boolean accessAuthorized(Integer id) {
			if (this.id == id){
				return true;
			}
			this.authIncident();
			return false;
	}
    
    
    // TO DO: Implement HIPAACompliantAdmin!
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		return securityIncidents;
	}
	
	
    
    public void newIncident(String notes) {
        String report = String.format(
            "Datetime Submitted: %s \n,  Reported By ID: %s\n Notes: %s \n", 
            new Date(), this.id, notes
        );
        securityIncidents.add(report);
    }
    public void authIncident() {
        String report = String.format(
            "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
            new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
        );
        securityIncidents.add(report);
    }


    // TO DO: Setters & Getters
	public String getRole() {
		return role;
	}

	public void setRole(String role) {
		this.role = role;
	}
    
	
}
