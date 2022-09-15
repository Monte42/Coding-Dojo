package com.gnd.jspstl;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller	
public class HomeController {
	@RequestMapping("/")
	public String index(Model model) {
		String val1 = "hello";
		model.addAttribute("val1", val1);
		return "index.jsp";
	}
}
