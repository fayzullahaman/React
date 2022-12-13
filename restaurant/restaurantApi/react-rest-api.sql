-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 13, 2022 at 06:10 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `react-rest-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` char(64) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`id`, `name`, `email`, `password`, `image`) VALUES
(1, 'Admin', 'admin@gmail.com', 'admin', 'admin.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `boking`
--

CREATE TABLE `boking` (
  `bok-id` int(11) NOT NULL,
  `bok-name` varchar(100) NOT NULL,
  `bok-email` varchar(30) NOT NULL,
  `date` datetime NOT NULL,
  `people` varchar(100) NOT NULL,
  `sp-request` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `chefs`
--

CREATE TABLE `chefs` (
  `chf-id` int(11) NOT NULL,
  `chf-name` varchar(100) NOT NULL,
  `chf-designation` varchar(50) NOT NULL,
  `chf-image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chefs`
--

INSERT INTO `chefs` (`chf-id`, `chf-name`, `chf-designation`, `chf-image`) VALUES
(1, 'Allauddin Alo', 'Main Chef', 'https://static.vecteezy.com/system/resources/previews/002/521/567/original/cartoon-cute-italian-chef-with-tongue-out-serving-food-vector.jpg'),
(2, 'Fayzullah Aman', 'Main Chef', 'https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=2000'),
(3, 'Naymur Rahman', 'Main Chef', 'https://img.freepik.com/premium-vector/chef-mascot-cartoon-illustration_27088-397.jpg?w=2000'),
(4, 'Golam Rabbany', 'Main Chef', 'https://i.pinimg.com/736x/81/93/e9/8193e901ae655dd2fb89354e1ac6331a.jpg'),
(5, 'Aklima Akter', 'Main Chef', 'https://static.vecteezy.com/system/resources/previews/005/604/210/original/a-woman-chef-wearing-a-white-coat-red-apron-and-a-kitchen-hood-on-her-head-while-smiling-free-vector.jpg'),
(6, 'Sharmin Sultana', 'Main Chef', 'https://previews.123rf.com/images/mexart/mexart2104/mexart210400047/168248871-girl-chef-logo-cartoon-vector-icon-illustration-isolated-on-premium-vector.jpg'),
(7, 'Jannatul Ferdaus', 'Main Chef', 'https://img.freepik.com/premium-vector/cute-chef-girl-uniform-logo-cartoon-premium-vector_511562-35.jpg?w=2000'),
(8, 'Anamul Islam', 'Main Chef', 'https://anantacreative.com/wp-content/uploads/2020/10/Restaurant-Man-1.png');

-- --------------------------------------------------------

--
-- Table structure for table `contact`
--

CREATE TABLE `contact` (
  `con-id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(30) NOT NULL,
  `subject` varchar(20) NOT NULL,
  `message` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `menu`
--

CREATE TABLE `menu` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `details` varchar(200) NOT NULL,
  `price` varchar(20) NOT NULL,
  `image` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `details`, `price`, `image`) VALUES
(1, 'Chicken Burger', 'Ipsum ipsum clita erat amet dolor justo diam', '115', 'menu-1.jpg'),
(4, 'asdf', 'sadf sadf asd f', '5000.00', 'C:fakepathlogo.png'),
(6, 'asdf', 'asdf asdf asdf', '15000', 'C:fakepath	eam-1.jpg'),
(7, 'asdf', 'asdf', '15000', '');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `pr_id` int(11) NOT NULL,
  `pr_name` varchar(100) NOT NULL,
  `pr_price` decimal(10,2) NOT NULL,
  `pr_qty` mediumint(9) NOT NULL,
  `user_id` int(11) NOT NULL,
  `order_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `pr_id`, `pr_name`, `pr_price`, `pr_qty`, `user_id`, `order_time`) VALUES
(1, 3, 'AMZ Laptop 8GB RAM', '50000.00', 1, 100, '2022-12-12 12:56:59'),
(2, 4, 'Security Camera', '4000.00', 1, 100, '2022-12-12 12:56:59'),
(3, 3, 'AMZ Laptop 8GB RAM', '50000.00', 1, 100, '2022-12-12 13:02:48'),
(4, 4, 'Security Camera', '4000.00', 1, 100, '2022-12-12 13:02:48'),
(5, 2, 'LOREM Watch Black', '2599.00', 1, 100, '2022-12-12 13:02:48');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `details` varchar(100) NOT NULL,
  `icon` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`id`, `name`, `details`, `icon`) VALUES
(1, 'Master Chefs', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://thumbs.dreamstime.com/b/logo-template-restaurant-chef-vector-stock-happy-face-wearing-hat-69432796.jpg'),
(2, 'Quality Food', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://img.freepik.com/free-vector/burger-with-fried-chicken-french-fries-soda-cartoon-vector-icon-illustration-fast-food-icon_138676-1972.jpg?w=2000'),
(3, 'Online Order', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://blog.neemo.com.br/wp-content/uploads/2020/10/GettyImages-1156913565.jpg'),
(4, '24/7 Service', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://images.all-free-download.com/images/graphiclarge/service_and_support_for_customers_24_hours_a_day_and_7_days_a_week_icon_open_around_the_vector_clock_6833320.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin`
--
ALTER TABLE `admin`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `boking`
--
ALTER TABLE `boking`
  ADD PRIMARY KEY (`bok-id`);

--
-- Indexes for table `chefs`
--
ALTER TABLE `chefs`
  ADD PRIMARY KEY (`chf-id`);

--
-- Indexes for table `contact`
--
ALTER TABLE `contact`
  ADD PRIMARY KEY (`con-id`);

--
-- Indexes for table `menu`
--
ALTER TABLE `menu`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `boking`
--
ALTER TABLE `boking`
  MODIFY `bok-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chefs`
--
ALTER TABLE `chefs`
  MODIFY `chf-id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `con-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
