package com.gnd.authentication.repository;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.gnd.authentication.models.Author;

@Repository
public interface AuthorRepository extends CrudRepository<Author, Long> {
	List<Author> findAll();
}
