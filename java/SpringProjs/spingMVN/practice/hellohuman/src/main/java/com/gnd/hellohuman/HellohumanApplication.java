package com.gnd.hellohuman;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@SpringBootApplication
@RestController
public class HellohumanApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(HellohumanApplication.class, args);
	}
	@RequestMapping("/")
	public String human(@RequestParam(value="name", required=false) String name,@RequestParam(value="lname", required=false) String lname,@RequestParam(value="times", required=false) String times) {
		if (name==null) {
			return "Hello Human";
		} else if (name!=null && lname!=null) {
			return "Hello "+name+" "+lname;
		} else if (name!=null && times!=null) {
			String str ="";
			for (int i=0;i<Integer.parseInt(times);i++) {
				str+="Hello "+name+" ";
			}
			return str;
		} else {
			return "Hello "+name;
		}
	}
	
	@RequestMapping("/{fname}/{lname}")
	public String pathVar(@PathVariable("fname") String fname, @PathVariable("lname") String lname) {
		return "Hello Mr. "+fname+" "+lname;
	}
	
}
