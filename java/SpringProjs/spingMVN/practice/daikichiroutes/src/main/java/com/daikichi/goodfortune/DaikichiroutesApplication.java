package com.daikichi.goodfortune;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
@RequestMapping("/diakichi")

public class DaikichiroutesApplication {
	public static void main(String[] args) {
		SpringApplication.run(DaikichiroutesApplication.class, args);
	}
	
	@RequestMapping("")
	public String home() {
		return "Welcome";
	}
	@RequestMapping("/today")
	public String today() {
		return "Today you will find luck in all your endevors";
	}
	@RequestMapping("/tomorrow")
	public String tomorrow() {
		return "Tomorrow, an opportunity will arise, so be sure to be open to new ideas.";
	}
	@RequestMapping("/search")
	public String search(@RequestParam(value="q", required=false) String searchRequest) {
		if (searchRequest==null) {
			return "Please Search for something buy typing?q={SOMETHING} behind search in the url";
		}
		return "Your searched for " + searchRequest;
	}
	
	// for CORE Assignment
	@RequestMapping("/travel/{city}")
	public String travel(@PathVariable("city") String city) {
		return "Congratulations!  You will soon travel to " + city;
	}
	@RequestMapping("/lotto/{number}")
	public String lotto (@PathVariable("number") String number) {
		int num = Integer.parseInt(number);
		if (num%2==0) {
			return "You will take a grand journey in the near future, but be wary of offers";
		}
		return "Your have enjoyed the fruits of your labor but now is a great time to spen time with friends and family";
	}
}
