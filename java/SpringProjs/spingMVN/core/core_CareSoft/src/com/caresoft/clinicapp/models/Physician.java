package com.caresoft.clinicapp.models;
import java.util.ArrayList;
import java.util.Date;

import com.caresoft.clinicapp.interfaces.HIPAACompliantUser;

public class Physician extends User implements HIPAACompliantUser {
	private ArrayList<String> patientNotes;
	
	// TO DO: Constructor that takes an ID
	public Physician(Integer id) {
		super(id);
	}
	
    // TO DO: Implement HIPAACompliantUser!
	public boolean assignPin(int pin) {
		if (String.valueOf(pin).length() == 4) {
			this.pin = pin;
			return true;
		}
		return false;
	}
	
	public boolean accessAuthorized(Integer id) {
			return (this.id == id) ? true : false;
	}

	public void newPatientNotes(String notes, String patientName, Date date) {
        String report = String.format(
            "Datetime Submitted: %s \n", date);
        report += String.format("Reported By ID: %s\n", this.id);
        report += String.format("Patient Name: %s\n", patientName);
        report += String.format("Notes: %s \n", notes);
        this.patientNotes.add(report);
    }

	
	// TO DO: Setters & Getters
	public ArrayList<String> getPatientNotes() {
		return patientNotes;
	}

	public void setPatientNotes(ArrayList<String> patientNotes) {
		this.patientNotes = patientNotes;
	}
	
	
}
