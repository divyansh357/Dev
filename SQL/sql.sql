-- CREATE DATABASE college;
-- CREATE DATABASE xyz_company;

-- -- deleting database
-- DROP DATABASE xyz_company;

-- -- Using db
-- USE college;

-- -- Creating Table
-- CREATE TABLE student (
-- rollno INT,
-- name VARCHAR(30),
-- age INT
-- );

-- -- Inserting values

-- INSERT INTO student
-- VALUES
-- (101,"adam",12),
-- (102,"bob",14);

-- -- Display Table

-- SELECT * FROM student;

-- -- Database Queries

-- CREATE DATABASE IF NOT EXISTS college; 

-- CREATE DATABASE IF NOT EXISTS instagram;

-- DROP DATABASE IF EXISTS instagram;

-- SHOW DATABASES;

-- USE college;

-- SHOW TABLES;

-- Table Queries

CREATE DATABASE IF NOT EXISTS instagram;
USE instagram;
CREATE TABLE user(
id INT,
age INT,
name VARCHAR(30) NOT NULL,
email VARCHAR(50) UNIQUE,
followers INT DEFAULT 0,
following INT DEFAULT 0,
CONSTRAINT age_check CHECK (age>=13),
PRIMARY KEY (id)
);

insert into user 
(id,age,name,email,followers,following)
values
(1,14,"adam","adam@yahoo.in",123,145),
(2,15,"bob","bob@gmail.com",200,200),
(3,16,"casey","casey@gmail.com",300,306),
(4,17,"donald","donald@gmail.com",200,105);

select id, age, name from user;
select distinct age from user;
select * from user;
-- Key Contraints
-- PK and FK
-- Creating Table post

CREATE TABLE post(
post_id INT primary key,
content VARCHAR(100),
user_id INT,
foreign key (user_id) references user(id)
);

insert into post
(post_id,content,user_id)
values
(101,"Hello World",3),
(102,"Bye Bye",1),
(103,"Hello Divyansh",3);

select * from post;
 
 -- Where Clause
 
 select name,followers 
 from user
 where followers>=200;
 
 select name,followers 
 from user
 where age<=16;
 
-- Frequently used operators
select name,age,followers
from user
where age>15 AND followers>200;


select name,age,followers
from user
where age>15 or followers>200;

select name,age,followers
from user
where age between 15 and 17;

select name,followers,email
from user
where email IN ("donald@gmail.com","adam@yahoo.in","abc@gmail.com");

insert into user 
(id,age,name,email,followers,following)
values
(5,14,"eve","eve@yahoo.in",400,145),
(6,16,"farah","farah@gmail.com",10000,1000);


select name,age,email
from user 
where age in (14,16);

select name,age,email
from user
where age not in (14,16);

-- Limit clause

select name,age,email
from user
where age >14
limit 2;

select name,age,email
from user
limit 3;

-- Order by clause

select name,age,followers
from user 
order by followers asc;

select name,age,followers
from user 
order by followers desc;

select name,age,followers
from user 
order by followers;

-- Aggregate Functions

select max(followers)
from user;

select max(age)
from user;

select count(age)
from user
where age= 14;

select min(age)
from user;

select avg(age)
from user;

select sum(followers)
from user;

-- Group by Clause

select age,count(id)
from user
group by age;

select age,max(followers)
from user
group by age;

-- Having Clause

select age,max(followers)
from user
group by age
having max(followers) >200
order by age desc;

-- Table Queries

-- 3.Update Command

set SQL_SAFE_UPDATES = 0;

update user 
set followers = 600
where age =16;

select * from user;

-- 4. Delete Command

delete from user
where age = 14;

-- 5. Alter Command

alter table user
add column city varchar(50) default "Delhi";

alter table user
drop column age;

alter table user
rename to insta_user;

alter table insta_user
change column followers subs INT DEFAULT 0;

alter table insta_user
modify subs int default 5;

insert into insta_user 
(id,name,email,following)
values 
(7,"gemini","gem@yahoo.in",125);

select * from insta_user;

-- 6. Truncate
-- do not execute this as all data will be deleted
drop table post;

truncate table insta_user;

-- Practice questions 
 
-- q1

create database if not exists college;
use college;

create table teacher(
id int primary key,
name varchar(30),
subject varchar(30),
salary int
);

insert into teacher
(id,name,subject,salary)
values
(23,"ajay","math",50000),
(47,"bharat","english",60000),
(18,"chetan","chemistry",45000),
(9,"diya","physics",75000);


select * from teacher 
where salary>55000;

alter table teacher
change column salary ctc int;

set SQL_SAFE_UPDATES = 0;
update teacher 
set ctc = ctc + (ctc*0.25);

alter table teacher
add column city varchar(30) default "Gurgaon";

alter table teacher 
drop column ctc;

select * from teacher;


