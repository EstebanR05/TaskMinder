-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Sep 30, 2024 at 05:07 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.1.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Task_minder`
--

-- --------------------------------------------------------

--
-- Table structure for table `Boards`
--

CREATE TABLE `Boards` (
  `Id_board` int(11) NOT NULL,
  `Name_board` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Priority`
--

CREATE TABLE `Priority` (
  `Id_priority` int(11) NOT NULL,
  `Name_priority` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Rols`
--

CREATE TABLE `Rols` (
  `Id_rol` int(11) NOT NULL,
  `Name_rol` varchar(40) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Rols`
--

INSERT INTO `Rols` (`Id_rol`, `Name_rol`) VALUES
(1, 'Administrador'),
(2, 'Usuario');

-- --------------------------------------------------------

--
-- Table structure for table `States`
--

CREATE TABLE `States` (
  `Id_state` int(11) NOT NULL,
  `Name_state` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Tasks`
--

CREATE TABLE `Tasks` (
  `Id_task` int(11) NOT NULL,
  `Name_task` varchar(40) NOT NULL,
  `Description_task` varchar(300) NOT NULL,
  `created_at_task` datetime NOT NULL,
  `Limit_task` datetime NOT NULL,
  `Id_state_task` int(11) NOT NULL,
  `Id_priority_task` int(11) NOT NULL,
  `Id_user_creator_task` int(11) NOT NULL,
  `Id_user_responsable_task` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `Id_user` int(11) NOT NULL,
  `Name_user` varchar(40) NOT NULL,
  `Password_user` varchar(80) NOT NULL,
  `Email_user` varchar(80) NOT NULL,
  `Phone_user` varchar(12) DEFAULT NULL,
  `Address_user` varchar(80) DEFAULT NULL,
  `Id_rol` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`Id_user`, `Name_user`, `Password_user`, `Email_user`, `Phone_user`, `Address_user`, `Id_rol`) VALUES
(1, 'esteban', '123456', 'e05072003@gmail.com', '3116686210', 'carrera 5 #15-15', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Boards`
--
ALTER TABLE `Boards`
  ADD PRIMARY KEY (`Id_board`);

--
-- Indexes for table `Priority`
--
ALTER TABLE `Priority`
  ADD PRIMARY KEY (`Id_priority`);

--
-- Indexes for table `Rols`
--
ALTER TABLE `Rols`
  ADD PRIMARY KEY (`Id_rol`);

--
-- Indexes for table `States`
--
ALTER TABLE `States`
  ADD PRIMARY KEY (`Id_state`);

--
-- Indexes for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD PRIMARY KEY (`Id_task`),
  ADD KEY `fk_tasks_state` (`Id_state_task`),
  ADD KEY `fk_tasks_priority` (`Id_priority_task`),
  ADD KEY `fk_tasks_user` (`Id_user_creator_task`),
  ADD KEY `fk_tasks_user_responsable` (`Id_user_responsable_task`);

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`Id_user`),
  ADD KEY `fk_users_rols` (`Id_rol`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Tasks`
--
ALTER TABLE `Tasks`
  ADD CONSTRAINT `fk_tasks_priority` FOREIGN KEY (`Id_priority_task`) REFERENCES `Priority` (`Id_priority`),
  ADD CONSTRAINT `fk_tasks_state` FOREIGN KEY (`Id_state_task`) REFERENCES `States` (`Id_state`),
  ADD CONSTRAINT `fk_tasks_user` FOREIGN KEY (`Id_user_creator_task`) REFERENCES `Users` (`Id_user`),
  ADD CONSTRAINT `fk_tasks_user_responsable` FOREIGN KEY (`Id_user_responsable_task`) REFERENCES `Users` (`Id_user`);

--
-- Constraints for table `Users`
--
ALTER TABLE `Users`
  ADD CONSTRAINT `fk_users_rols` FOREIGN KEY (`Id_rol`) REFERENCES `Rols` (`Id_rol`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;