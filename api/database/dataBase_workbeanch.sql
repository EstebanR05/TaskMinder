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
(1, 'Admin'),
(2, 'Usuario');

INSERT INTO Users 
(Id_user, Name_user, Password_user, Email_user, Phone_user, Address_user, Id_rol) 
VALUES
(1, 'Admin', '123456', 'admin@gmail.com', '3515831256', 'carrera 5 #15-15', 1),
(2, 'Ariana', '123456', 'ariana@gmail.com', '3104295482', 'carrera 5 #15-15', 2),
(3, 'Esteban', '123456', 'esteban@gmail.com', '3116686210', 'carrera 5 #15-15', 2),
(4, 'Diego', '123456', 'diego@gmail.com', '3148013515', 'carrera 5 #15-15', 2),
(5, 'Pencue', '123456', 'pencue@gmail.com', '3104994168', 'carrera 5 #15-15', 2);

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

-- Usuario 1: Admin
INSERT INTO Tasks 
(Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
VALUES 
(NULL, 'Informe de avance', 'Revisar avances del proyecto', '2024-01-01', '2024-12-22', 1, 2, 1, 2),
(NULL, 'Revisión de código', 'Revisar el código del módulo X', '2024-01-02', '2024-12-25', 2, 3, 1, 3),
(NULL, 'Capacitación de equipo', 'Organizar taller de capacitación', '2024-01-03', '2024-12-28', 3, 1, 1, 4),
(NULL, 'Análisis de riesgos', 'Realizar análisis de riesgos del proyecto', '2024-01-04', '2024-12-30', 4, 2, 1, 5),
(NULL, 'Informe final', 'Redactar el informe final de resultados', '2024-01-05', '2024-12-29', 3, 3, 1, 2);

-- Usuario 2: Ariana
INSERT INTO Tasks 
(Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
VALUES 
(NULL, 'Revisión de presupuesto', 'Verificar el presupuesto del proyecto', '2024-02-01', '2024-11-22', 1, 1, 2, 3),
(NULL, 'Revisión de documentación', 'Revisar la documentación técnica', '2024-02-02', '2024-11-24', 2, 2, 2, 4),
(NULL, 'Pruebas de integración', 'Ejecutar las pruebas de integración', '2024-02-03', '2024-11-26', 3, 3, 2, 5),
(NULL, 'Planificación de tareas', 'Definir tareas para el próximo sprint', '2024-02-04', '2024-11-28', 4, 2, 2, 1),
(NULL, 'Seguimiento de tareas', 'Dar seguimiento a las tareas del equipo', '2024-02-05', '2024-11-30', 3, 1, 2, 3);

-- Usuario 3: Esteban
INSERT INTO Tasks 
(Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
VALUES 
(NULL, 'Análisis de datos', 'Revisar los datos obtenidos en el proyecto', '2024-03-01', '2024-12-10', 1, 2, 3, 4),
(NULL, 'Pruebas de usuario', 'Realizar pruebas con usuarios finales', '2024-03-02', '2024-12-12', 2, 1, 3, 5),
(NULL, 'Revisión de funcionalidades', 'Verificar las funcionalidades del sistema', '2024-03-03', '2024-12-15', 3, 3, 3, 1),
(NULL, 'Diseño de interfaz', 'Diseñar la interfaz de usuario', '2024-03-04', '2024-12-17', 4, 2, 3, 2),
(NULL, 'Informe de calidad', 'Generar informe de calidad del proyecto', '2024-03-05', '2024-12-19', 2, 3, 3, 4);

-- Usuario 4: Diego
INSERT INTO Tasks 
(Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
VALUES 
(NULL, 'Reunión de seguimiento', 'Realizar reunión para evaluar avances', '2024-04-01', '2024-11-20', 1, 1, 4, 5),
(NULL, 'Desarrollo de nuevas funcionalidades', 'Desarrollar nuevas características para el sistema', '2024-04-02', '2024-11-22', 2, 2, 4, 1),
(NULL, 'Pruebas de rendimiento', 'Realizar pruebas de rendimiento del sistema', '2024-04-03', '2024-11-24', 3, 3, 4, 2),
(NULL, 'Documentación técnica', 'Actualizar la documentación técnica del sistema', '2024-04-04', '2024-11-26', 4, 2, 4, 3),
(NULL, 'Revisión de seguridad', 'Verificar vulnerabilidades de seguridad', '2024-04-05', '2024-11-28', 3, 3, 4, 5);

-- Usuario 5: Pencue
INSERT INTO Tasks 
(Id_task, Name_task, Description_task, created_at_task, Limit_task, Id_state_task, Id_priority_task, Id_user_creator_task, Id_user_responsable_task) 
VALUES 
(NULL, 'Revisión de bases de datos', 'Verificar las bases de datos del proyecto', '2024-05-01', '2024-12-05', 1, 2, 5, 1),
(NULL, 'Revisión de código fuente', 'Revisar código fuente del proyecto', '2024-05-02', '2024-12-08', 2, 1, 5, 2),
(NULL, 'Plan de pruebas', 'Crear plan de pruebas para la siguiente fase', '2024-05-03', '2024-12-10', 3, 3, 5, 3),
(NULL, 'Mantenimiento de sistemas', 'Realizar mantenimiento en los servidores', '2024-05-04', '2024-12-12', 4, 2, 5, 4),
(NULL, 'Evaluación de desempeño', 'Evaluar el desempeño del equipo de desarrollo', '2024-05-05', '2024-12-14', 2, 3, 5, 5);
