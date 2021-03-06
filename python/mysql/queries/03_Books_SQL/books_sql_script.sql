-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema books
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `books` ;

-- -----------------------------------------------------
-- Schema books
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `books` DEFAULT CHARACTER SET utf8 ;
USE `books` ;

-- -----------------------------------------------------
-- Table `books`.`books`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `books`.`books` ;

CREATE TABLE IF NOT EXISTS `books`.`books` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  `num_of_pages` VARCHAR(255) NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `books`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `books`.`users` ;

CREATE TABLE IF NOT EXISTS `books`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `books`.`favorites`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `books`.`favorites` ;

CREATE TABLE IF NOT EXISTS `books`.`favorites` (
  `book_id` INT NOT NULL,
  `user_id` INT NOT NULL,
  PRIMARY KEY (`book_id`, `user_id`),
  INDEX `fk_favorites_books_idx` (`book_id` ASC) VISIBLE,
  INDEX `fk_favorites_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_favorites_books`
    FOREIGN KEY (`book_id`)
    REFERENCES `books`.`books` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_favorites_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `books`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
