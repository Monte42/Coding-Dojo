package com.gnd.belt.controllers;


import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.gnd.belt.models.Song;
import com.gnd.belt.services.SongService;
import com.gnd.belt.services.UserService;

@Controller
@RequestMapping("songs")
public class SongController {
	@Autowired
	SongService songServe;
	@Autowired
	UserService userServe;
	
//	CREATE
	@GetMapping("new")
	public String newSongForm(@ModelAttribute("song") Song song, HttpSession session) {
		if (session.getAttribute("userId")==null) return "redirect:/";
		return "songs/newSong.jsp";
	}
	@PostMapping("new")
	public String createSong(@Valid @ModelAttribute("song")Song song,
				BindingResult result, HttpSession session) {
		if (songServe.doesSongExist(song.getTitle())) result.rejectValue("title", "Exists", "This song already exists");
		if (result.hasErrors()) return "songs/newSong.jsp";
		song.setCollabs(song.getCollabs()+1);
		song.setUser(userServe.userById((Long) session.getAttribute("userId")));
		songServe.saveSong(song);
		return "redirect:/home";
	}
	
	
	
//	READ
	@GetMapping("{id}")
	public String showSong(@PathVariable("id") Long id,HttpSession session,
								Model model) {
		if (session.getAttribute("userId")==null) return "redirect:/";
		model.addAttribute("song", songServe.songById(id));
		return "songs/showSong.jsp";
	}
	
	
//	UPDATE
	@GetMapping("edit/{id}")
	public String editSongForm(@PathVariable("id") Long id, Model model,
							HttpSession session) {
		if (session.getAttribute("userId")==null) return "redirect:/";
		model.addAttribute("song", songServe.songById(id));
		model.addAttribute("newEdit", new Song());
		return "songs/editSong.jsp";
	}
	@PutMapping("edit/{id}")
	public String updateSong(@Valid @ModelAttribute("newEdit") Song songEdit,
						BindingResult result, @PathVariable("id") Long id,
						Model mode, HttpSession session
									) {
		if (result.hasErrors()) return "songs/editSong.jsp";
		Song song = songServe.songById(id);
		song.setCollabs(song.getCollabs()+1);
		song.setLyrics(song.getLyrics()+" "+songEdit.getLyrics());
		song.setTitle(songEdit.getTitle());
		song.setGenre(songEdit.getGenre());
		if (!songServe.getAssignedUsers(userServe.userById((Long)session.getAttribute("userId"))).contains(song)) {
			if ((Long) session.getAttribute("userId")!=song.getUser().getId() ) {
				song.getUsers().add(userServe.userById((Long) session.getAttribute("userId")));							
			}
		}
		songServe.saveSong(song);
		return "redirect:/";
	}
	
	
	
//	DELETE
	@DeleteMapping("delete/{id}")
	public String deleteBike(@PathVariable("id") Long id) {
		songServe.destroySong(id);
		return "redirect:/home";
	}



}
