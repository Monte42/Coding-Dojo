-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema dojo_wall
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `dojo_wall` ;

-- -----------------------------------------------------
-- Schema dojo_wall
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `dojo_wall` DEFAULT CHARACTER SET utf8 ;
USE `dojo_wall` ;

-- -----------------------------------------------------
-- Table `dojo_wall`.`users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dojo_wall`.`users` ;

CREATE TABLE IF NOT EXISTS `dojo_wall`.`users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(255) NULL,
  `last_name` VARCHAR(255) NULL,
  `email` VARCHAR(255) NULL,
  `password` VARCHAR(500) NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dojo_wall`.`posts`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dojo_wall`.`posts` ;

CREATE TABLE IF NOT EXISTS `dojo_wall`.`posts` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `user_id` INT NOT NULL,
  `content` TEXT NULL,
  `created_at` DATETIME NULL DEFAULT NOW(),
  `updated_at` DATETIME NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  INDEX `fk_posts_users1_idx` (`user_id` ASC) VISIBLE,
  CONSTRAINT `fk_posts_users1`
    FOREIGN KEY (`user_id`)
    REFERENCES `dojo_wall`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dojo_wall`.`comments`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dojo_wall`.`comments` ;

CREATE TABLE IF NOT EXISTS `dojo_wall`.`comments` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `post_id` INT NOT NULL,
  `content` TEXT NULL,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  INDEX `fk_comments_posts_idx` (`post_id` ASC) VISIBLE,
  CONSTRAINT `fk_comments_posts`
    FOREIGN KEY (`post_id`)
    REFERENCES `dojo_wall`.`posts` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `dojo_wall`.`messages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `dojo_wall`.`messages` ;

CREATE TABLE IF NOT EXISTS `dojo_wall`.`messages` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `to_id` INT NOT NULL,
  `from_id` INT NOT NULL,
  `content` TEXT NULL,
  `is_read` TINYINT NOT NULL DEFAULT 0,
  `created_at` DATETIME NOT NULL DEFAULT NOW(),
  `updated_at` DATETIME NOT NULL DEFAULT NOW() ON UPDATE NOW(),
  PRIMARY KEY (`id`),
  INDEX `fk_messages_users1_idx` (`from_id` ASC) VISIBLE,
  INDEX `fk_messages_users2_idx` (`to_id` ASC) VISIBLE,
  CONSTRAINT `fk_messages_users1`
    FOREIGN KEY (`from_id`)
    REFERENCES `dojo_wall`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE,
  CONSTRAINT `fk_messages_users2`
    FOREIGN KEY (`to_id`)
    REFERENCES `dojo_wall`.`users` (`id`)
    ON DELETE CASCADE
    ON UPDATE CASCADE)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
