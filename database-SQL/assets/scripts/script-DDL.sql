create database if not exists test;
use test;
drop database test;

DROP TABLE if exists user;
CREATE TABLE if not exists  user (
	id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
	name VARCHAR(150) NOT NULL,
	email VARCHAR(150) NOT NULL,
	gender char(1) NOT NULL,
    birth date NULL,
	active boolean NOT NULL
);
ALTER TABLE user ADD COLUMN phone char(20) NOT NULL AFTER email;
ALTER TABLE user CHANGE COLUMN phone phone char(20) NOT NULL;

insert into user values (1, 'Heviane Bastos', 'heviane@gmail.com', 'W', '1982-09-26', true);
insert into user values (2, 'Maria Bastos', 'maria@gmail.com', 'W', '1960-02-03', true);
insert into user values (3, 'Pedro Silva', 'pedro@gmail.com', '(51)998551866', 'M', '1980-04-28', false);

SELECT * FROM user;
select gender, count(*) from user Group by gender;

