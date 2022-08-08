-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema users_and_motorcycles
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `users_and_motorcycles` ;

-- -----------------------------------------------------
-- Schema users_and_motorcycles
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `users_and_motorcycles` DEFAULT CHARACTER SET utf8mb3 ;
USE `users_and_motorcycles` ;

-- -----------------------------------------------------
-- Table `users_and_motorcycles`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users_and_motorcycles`.`users` ;

CREATE TABLE IF NOT EXISTS `users_and_motorcycles`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NOT NULL,
  `last_name` VARCHAR(255) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `username` VARCHAR(255) NOT NULL,
  `password` TEXT NOT NULL,
  `user_img` TEXT NULL DEFAULT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE,
  UNIQUE INDEX `username_UNIQUE` (`username` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb3;


-- -----------------------------------------------------
-- Table `users_and_motorcycles`.`motorcycles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `users_and_motorcycles`.`motorcycles` ;

CREATE TABLE IF NOT EXISTS `users_and_motorcycles`.`motorcycles` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `year` INT NOT NULL,
  `make` VARCHAR(255) NOT NULL,
  `model` VARCHAR(255) NOT NULL,
  `description` TEXT NULL,
  `bike_img` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`, `user_id`),
  INDEX `fk_motorcycles_users_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_motorcycles_users`
    FOREIGN KEY (`user_id`)
    REFERENCES `users_and_motorcycles`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb3;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
