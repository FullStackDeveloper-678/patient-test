-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 21, 2020 at 06:54 PM
-- Server version: 10.4.13-MariaDB
-- PHP Version: 7.2.32

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `story_test`
--

-- --------------------------------------------------------

--
-- Table structure for table `memory_test`
--

CREATE TABLE `memory_test` (
  `id` int(11) NOT NULL,
  `indexNumber` int(11) DEFAULT NULL,
  `orderNumber` int(11) DEFAULT NULL,
  `attemptNumber` int(11) DEFAULT NULL,
  `phoneNumber` varchar(64) DEFAULT NULL,
  `testNumber` int(11) DEFAULT NULL,
  `result` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `story_test`
--

CREATE TABLE `story_test` (
  `id` int(11) NOT NULL,
  `indexNumber` int(11) DEFAULT NULL,
  `response` varchar(64) DEFAULT NULL,
  `phoneNumber` varchar(64) DEFAULT NULL,
  `testNumber` int(11) DEFAULT NULL,
  `result` varchar(64) DEFAULT NULL,
  `date` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `name` varchar(64) DEFAULT NULL,
  `phoneNumber` varchar(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `memory_test`
--
ALTER TABLE `memory_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `story_test`
--
ALTER TABLE `story_test`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `memory_test`
--
ALTER TABLE `memory_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=91;

--
-- AUTO_INCREMENT for table `story_test`
--
ALTER TABLE `story_test`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
