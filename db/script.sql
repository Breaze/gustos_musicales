-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema proyecto
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema proyecto
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `proyecto` DEFAULT CHARACTER SET utf8 ;
USE `proyecto` ;

-- -----------------------------------------------------
-- Table `proyecto`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `correo` VARCHAR(320) NOT NULL,
  `clave` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`artistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`artistas` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `nacionalidad` VARCHAR(45) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`albumes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`albumes` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `fecha` DATE NULL,
  `artista_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_albumes_artista1_idx` (`artista_id` ASC) VISIBLE,
  CONSTRAINT `fk_albumes_artista1`
    FOREIGN KEY (`artista_id`)
    REFERENCES `proyecto`.`artistas` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`canciones` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(300) NOT NULL,
  `albumes_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_canciones_albumes1_idx` (`albumes_id` ASC) VISIBLE,
  CONSTRAINT `fk_canciones_albumes1`
    FOREIGN KEY (`albumes_id`)
    REFERENCES `proyecto`.`albumes` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `proyecto`.`gustos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `proyecto`.`gustos` (
  `usuarios_id` INT NOT NULL,
  `canciones_id` INT NOT NULL,
  PRIMARY KEY (`usuarios_id`, `canciones_id`),
  INDEX `fk_usuarios_has_canciones_canciones1_idx` (`canciones_id` ASC) VISIBLE,
  INDEX `fk_usuarios_has_canciones_usuarios_idx` (`usuarios_id` ASC) VISIBLE,
  CONSTRAINT `fk_usuarios_has_canciones_usuarios`
    FOREIGN KEY (`usuarios_id`)
    REFERENCES `proyecto`.`usuarios` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuarios_has_canciones_canciones1`
    FOREIGN KEY (`canciones_id`)
    REFERENCES `proyecto`.`canciones` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
