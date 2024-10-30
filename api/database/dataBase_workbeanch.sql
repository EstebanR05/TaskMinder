create schema Task_minder;

use Task_minder;

show tables;

create table Rols (
    Id_rol int NOT NULL AUTO_INCREMENT,
    Name_rol varchar(40) NOT NULL,
    PRIMARY KEY(Id_rol)
);

CREATE TABLE Users (
  Id_user int NOT NULL AUTO_INCREMENT,
  Name_user varchar(40) NOT NULL,
  Password_user varchar(80) NOT NULL,
  Email_user varchar(80) NOT NULL,
  Phone_user varchar(12) DEFAULT NULL,
  Address_user varchar(80) DEFAULT NULL,
  Id_rol int NOT NULL,
  PRIMARY KEY(Id_user),
  constraint fk_users_rols foreign key (Id_rol) references Rols(Id_rol)
);

create table States(
    Id_state int NOT NULL AUTO_INCREMENT,
    Name_state varchar(30) NOT NULL,
    PRIMARY KEY(Id_state)
);

create table Priority(
    Id_priority int NOT NULL AUTO_INCREMENT,
    Name_priority varchar(30) NOT NULL,
    PRIMARY KEY(Id_priority)
);

create table Tasks (
    Id_task int NOT NULL AUTO_INCREMENT,
    Name_task varchar(40) NOT NULL,
    Description_task varchar(300) NOT NULL,
    created_at_task datetime NOT NULL,
    Limit_task datetime NOT NULL,
    Id_state_task int NOT NULL,
    Id_priority_task int NOT NULL,
    Id_user_creator_task int NOT NULL,
    Id_user_responsable_task int,
    PRIMARY KEY(Id_task),
    constraint fk_tasks_state foreign key (Id_state_task) references States(Id_state),
    constraint fk_tasks_priority foreign key (Id_priority_task) references Priority(Id_priority),
    constraint fk_tasks_user foreign key (Id_user_creator_task) references Users(Id_user),
    constraint fk_tasks_user_responsable foreign key (Id_user_responsable_task) references Users(Id_user)
);

-- insert values
INSERT INTO Rols
(Id_rol, Name_rol)
VALUES
(1, 'Administrador'),
(2, 'Usuario');

INSERT INTO Users 
(Id_user, Name_user, Password_user, Email_user, Phone_user, Address_user, Id_rol) 
VALUES
(1, 'esteban', '123456', 'e05072003@gmail.com', '3116686210', 'carrera 5 #15-15', 1);

INSERT INTO States
(Id_state, Name_state)
VALUES
(1, 'creada'),
(2, 'asignada'),
(3, 'en proceso'),
(4, 'finalizada');

INSERT INTO Priority
(Id_priority, Name_priority)
VALUES
(1, 'baja'),
(2, 'media'),
(3, 'urgente');

INSERT INTO Tasks 
(Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
VALUES 
(1, "informe", "realizar informe con normas IEEE", "2024-01-01", "2024-12-22", 1, 1,1, null);