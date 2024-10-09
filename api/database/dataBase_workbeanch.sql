create schema Task_minder;

use Task_minder;

show tables;

create table Rols (
    Id_rol int NOT NULL PRIMARY KEY,
    Name_rol varchar(40) NOT NULL
);

CREATE TABLE Users (
  Id_user int NOT NULL PRIMARY KEY,
  Name_user varchar(40) NOT NULL,
  Password_user varchar(80) NOT NULL,
  Email_user varchar(80) NOT NULL,
  Phone_user varchar(12) DEFAULT NULL,
  Address_user varchar(80) DEFAULT NULL,
  Id_rol int NOT NULL,
  constraint fk_users_rols foreign key (Id_rol) references Rols(Id_rol)
);

INSERT INTO Rols
(Id_rol, Name_rol)
VALUES
(1, 'Administrador'),
(2, 'Usuario');

INSERT INTO Users 
(Id_user, Name_user, Password_user, Email_user, Phone_user, Address_user, Id_rol) 
VALUES
(1, 'esteban', '123456', 'e05072003@gmail.com', '3116686210', 'carrera 5 #15-15', 1);

create table States(
    Id_state int NOT NULL PRIMARY KEY,
    Name_state varchar(30) NOT NULL
);

create table Priority(
    Id_priority int NOT NULL PRIMARY KEY,
    Name_priority varchar(30) NOT NULL
);

create table Tasks (
    Id_task int NOT NULL PRIMARY KEY,
    Name_task varchar(40) NOT NULL,
    Description_task varchar(300) NOT NULL,
    created_at_task datetime NOT NULL,
    Limit_task datetime NOT NULL,
    Id_state_task int NOT NULL,
    Id_priority_task int NOT NULL,
    Id_user_creator_task int NOT NULL,
    Id_user_responsable_task int NOT NULL,
    constraint fk_tasks_state foreign key (Id_state_task) references States(Id_state),
    constraint fk_tasks_priority foreign key (Id_priority_task) references Priority(Id_priority),
    constraint fk_tasks_user foreign key (Id_user_creator_task) references Users(Id_user),
    constraint fk_tasks_user_responsable foreign key (Id_user_responsable_task) references Users(Id_user)
);