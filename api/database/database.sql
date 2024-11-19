-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-11-2024 a las 17:26:06
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `task_minder`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `priority`
--

CREATE TABLE `priority` (
  `Id_priority` int(11) NOT NULL,
  `Name_priority` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `priority`
--

INSERT INTO `priority` (`Id_priority`, `Name_priority`) VALUES
(1, 'baja'),
(2, 'media'),
(3, 'urgente');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `Id_rol` int(11) NOT NULL,
  `Name_rol` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`Id_rol`, `Name_rol`) VALUES
(1, 'Admin'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `states`
--

CREATE TABLE `states` (
  `Id_state` int(11) NOT NULL,
  `Name_state` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `states`
--

INSERT INTO `states` (`Id_state`, `Name_state`) VALUES
(1, 'creada'),
(2, 'asignada'),
(3, 'en proceso'),
(4, 'finalizada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tasks`
--

CREATE TABLE `tasks` (
  `Id_task` int(11) NOT NULL,
  `Name_task` varchar(40) NOT NULL,
  `Description_task` varchar(300) NOT NULL,
  `created_at_task` datetime NOT NULL,
  `Limit_task` datetime NOT NULL,
  `Id_state_task` int(11) NOT NULL,
  `Id_priority_task` int(11) NOT NULL,
  `Id_user_creator_task` int(11) NOT NULL,
  `Id_user_responsable_task` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `tasks`
--

INSERT INTO `tasks` (`Id_task`, `Name_task`, `Description_task`, `created_at_task`, `Limit_task`, `Id_state_task`, `Id_priority_task`, `Id_user_creator_task`, `Id_user_responsable_task`) VALUES
(1, 'Informe de avance', 'Revisar avances del proyecto', '2024-01-01 00:00:00', '2024-12-22 00:00:00', 1, 2, 1, 2),
(2, 'Revisión de código', 'Revisar el código del módulo X', '2024-01-02 00:00:00', '2024-12-25 00:00:00', 2, 3, 1, 3),
(3, 'Capacitación de equipo', 'Organizar taller de capacitación', '2024-01-03 00:00:00', '2024-12-28 00:00:00', 3, 1, 1, 4),
(4, 'Análisis de riesgos', 'Realizar análisis de riesgos del proyecto', '2024-01-04 00:00:00', '2024-12-30 00:00:00', 4, 2, 1, 5),
(5, 'Informe final', 'Redactar el informe final de resultados', '2024-01-05 00:00:00', '2024-12-29 00:00:00', 3, 3, 1, 2),
(6, 'Revisión de presupuesto', 'Verificar el presupuesto del proyecto', '2024-02-01 00:00:00', '2024-11-22 00:00:00', 1, 1, 2, 3),
(7, 'Revisión de documentación', 'Revisar la documentación técnica', '2024-02-02 00:00:00', '2024-11-24 00:00:00', 2, 2, 2, 4),
(8, 'Pruebas de integración', 'Ejecutar las pruebas de integración', '2024-02-03 00:00:00', '2024-11-26 00:00:00', 3, 3, 2, 5),
(9, 'Planificación de tareas', 'Definir tareas para el próximo sprint', '2024-02-04 00:00:00', '2024-11-28 00:00:00', 4, 2, 2, 1),
(10, 'Seguimiento de tareas', 'Dar seguimiento a las tareas del equipo', '2024-02-05 00:00:00', '2024-11-30 00:00:00', 3, 1, 2, 3),
(11, 'Análisis de datos', 'Revisar los datos obtenidos en el proyecto', '2024-03-01 00:00:00', '2024-12-10 00:00:00', 1, 2, 3, 4),
(12, 'Pruebas de usuario', 'Realizar pruebas con usuarios finales', '2024-03-02 00:00:00', '2024-12-12 00:00:00', 2, 1, 3, 5),
(13, 'Revisión de funcionalidades', 'Verificar las funcionalidades del sistema', '2024-03-03 00:00:00', '2024-12-15 00:00:00', 3, 3, 3, 1),
(14, 'Diseño de interfaz', 'Diseñar la interfaz de usuario', '2024-03-04 00:00:00', '2024-12-17 00:00:00', 4, 2, 3, 2),
(15, 'Informe de calidad', 'Generar informe de calidad del proyecto', '2024-03-05 00:00:00', '2024-12-19 00:00:00', 2, 3, 3, 4),
(16, 'Reunión de seguimiento', 'Realizar reunión para evaluar avances', '2024-04-01 00:00:00', '2024-11-20 00:00:00', 1, 1, 4, 5),
(17, 'Desarrollo de nuevas funcionalidades', 'Desarrollar nuevas características para el sistema', '2024-04-02 00:00:00', '2024-11-22 00:00:00', 2, 2, 4, 1),
(18, 'Pruebas de rendimiento', 'Realizar pruebas de rendimiento del sistema', '2024-04-03 00:00:00', '2024-11-24 00:00:00', 3, 3, 4, 2),
(19, 'Documentación técnica', 'Actualizar la documentación técnica del sistema', '2024-04-04 00:00:00', '2024-11-26 00:00:00', 4, 2, 4, 3),
(20, 'Revisión de seguridad', 'Verificar vulnerabilidades de seguridad', '2024-04-05 00:00:00', '2024-11-28 00:00:00', 3, 3, 4, 5),
(21, 'Revisión de bases de datos', 'Verificar las bases de datos del proyecto', '2024-05-01 00:00:00', '2024-12-05 00:00:00', 1, 2, 5, 1),
(22, 'Revisión de código fuente', 'Revisar código fuente del proyecto', '2024-05-02 00:00:00', '2024-12-08 00:00:00', 2, 1, 5, 2),
(23, 'Plan de pruebas', 'Crear plan de pruebas para la siguiente fase', '2024-05-03 00:00:00', '2024-12-10 00:00:00', 3, 3, 5, 3),
(24, 'Mantenimiento de sistemas', 'Realizar mantenimiento en los servidores', '2024-05-04 00:00:00', '2024-12-12 00:00:00', 4, 2, 5, 4),
(25, 'Evaluación de desempeño', 'Evaluar el desempeño del equipo de desarrollo', '2024-05-05 00:00:00', '2024-12-14 00:00:00', 2, 3, 5, 5);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `Id_user` int(11) NOT NULL,
  `Name_user` varchar(40) NOT NULL,
  `Password_user` varchar(80) NOT NULL,
  `Email_user` varchar(80) NOT NULL,
  `Phone_user` varchar(12) DEFAULT NULL,
  `Address_user` varchar(80) DEFAULT NULL,
  `Id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`Id_user`, `Name_user`, `Password_user`, `Email_user`, `Phone_user`, `Address_user`, `Id_rol`) VALUES
(1, 'Admin', '123456', 'admin@gmail.com', '3515831256', 'carrera 5 #15-15', 1),
(2, 'Ariana', '123456', 'ariana@gmail.com', '3104295482', 'carrera 5 #15-15', 2),
(3, 'Esteban', '123456', 'esteban@gmail.com', '3116686210', 'carrera 5 #15-15', 2),
(4, 'Diego', '123456', 'diego@gmail.com', '3148013515', 'carrera 5 #15-15', 2),
(5, 'Pencue', '123456', 'pencue@gmail.com', '3104994168', 'carrera 5 #15-15', 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `priority`
--
ALTER TABLE `priority`
  ADD PRIMARY KEY (`Id_priority`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`Id_rol`);

--
-- Indices de la tabla `states`
--
ALTER TABLE `states`
  ADD PRIMARY KEY (`Id_state`);

--
-- Indices de la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`Id_task`),
  ADD KEY `fk_tasks_state` (`Id_state_task`),
  ADD KEY `fk_tasks_priority` (`Id_priority_task`),
  ADD KEY `fk_tasks_user` (`Id_user_creator_task`),
  ADD KEY `fk_tasks_user_responsable` (`Id_user_responsable_task`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`Id_user`),
  ADD KEY `fk_users_rols` (`Id_rol`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `priority`
--
ALTER TABLE `priority`
  MODIFY `Id_priority` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `Id_rol` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `states`
--
ALTER TABLE `states`
  MODIFY `Id_state` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tasks`
--
ALTER TABLE `tasks`
  MODIFY `Id_task` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `Id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `tasks`
--
ALTER TABLE `tasks`
  ADD CONSTRAINT `fk_tasks_priority` FOREIGN KEY (`Id_priority_task`) REFERENCES `priority` (`Id_priority`),
  ADD CONSTRAINT `fk_tasks_state` FOREIGN KEY (`Id_state_task`) REFERENCES `states` (`Id_state`),
  ADD CONSTRAINT `fk_tasks_user` FOREIGN KEY (`Id_user_creator_task`) REFERENCES `users` (`Id_user`),
  ADD CONSTRAINT `fk_tasks_user_responsable` FOREIGN KEY (`Id_user_responsable_task`) REFERENCES `users` (`Id_user`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `fk_users_rols` FOREIGN KEY (`Id_rol`) REFERENCES `rols` (`Id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
