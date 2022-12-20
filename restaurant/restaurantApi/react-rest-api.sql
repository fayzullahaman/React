-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 20, 2022 at 07:06 PM
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
(1, 'Aman', 'admin@gmail.com', 'admin', 'admin.jpg'),
(2, 'asdf', 'mahmud@gmail.com', 'asdf', '');

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
  `chf_id` int(11) NOT NULL,
  `chf_name` varchar(100) NOT NULL,
  `chf_designation` varchar(50) NOT NULL,
  `chf_image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `chefs`
--

INSERT INTO `chefs` (`chf_id`, `chf_name`, `chf_designation`, `chf_image`) VALUES
(1, 'Allauddin Alo', 'Main Chef', 'https://static.vecteezy.com/system/resources/previews/002/521/567/original/cartoon-cute-italian-chef-with-tongue-out-serving-food-vector.jpg'),
(2, 'Fayzullah Aman', 'Main Chef', 'https://img.freepik.com/premium-vector/smiling-chef-cartoon-character_8250-10.jpg?w=2000'),
(3, 'Naymur Rahman', 'Main Chef', 'https://img.freepik.com/premium-vector/chef-mascot-cartoon-illustration_27088-397.jpg?w=2000'),
(4, 'Golam Rabbany', 'Main Chef', 'https://i.pinimg.com/736x/81/93/e9/8193e901ae655dd2fb89354e1ac6331a.jpg'),
(5, 'Aklima Akter', 'Main Chef', 'https://static.vecteezy.com/system/resources/previews/005/604/210/original/a-woman-chef-wearing-a-white-coat-red-apron-and-a-kitchen-hood-on-her-head-while-smiling-free-vector.jpg'),
(6, 'Sharmin Sultana', 'Main Chef', 'https://previews.123rf.com/images/mexart/mexart2104/mexart210400047/168248871-girl-chef-logo-cartoon-vector-icon-illustration-isolated-on-premium-vector.jpg'),
(7, 'Jannatul Ferdaus', 'Main Chef', 'https://img.freepik.com/premium-vector/cute-chef-girl-uniform-logo-cartoon-premium-vector_511562-35.jpg?w=2000'),
(8, 'Anamul Islam', 'Main Chef', 'https://anantacreative.com/wp-content/uploads/2020/10/Restaurant-Man-1.png'),
(10, 'asdfasdf', 'main chefs', 'C:fakepathphoto_2022-03-28_19-54-35.jpg');

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
  `category` varchar(50) NOT NULL,
  `image` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `menu`
--

INSERT INTO `menu` (`id`, `name`, `details`, `price`, `category`, `image`) VALUES
(1, 'Chicken Burger', 'Ipsum ipsum clita erat amet dolor justo diam', '115', 'breakfast', 'menu-1.jpg'),
(4, 'Parata', 'If you are visiting Bangladesh, the most authentic local way of starting your day', '20.00', 'breakfast', 'C:fakepathlogo.png'),
(6, 'asdf', 'asdf asdf asdf', '15000', '', 'C:fakepath	eam-1.jpg'),
(8, 'Bhuna Chichuri', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '60', 'breakfast', ''),
(9, 'Vat Dal', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '50', 'breakfast', ''),
(10, 'Kacchi Biriyani', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'lunch', ''),
(11, 'Beef Kala Bhuna', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '200', 'lunch', ''),
(12, 'Bhuna Khichuri', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '80', 'lunch', ''),
(13, 'Morog Polao', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'lunch', ''),
(14, 'Kacchi Biriyani', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'dinner', ''),
(15, 'Grilled Chicken', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '200', 'dinner', ''),
(16, 'Bhuna Khichuri', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '80', 'dinner', ''),
(17, 'Morog Polao', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat sit amet arcu eu congue.', '150', 'dinner', ''),
(18, 'asdfasdf', 'asd asdf asd', '1500', '', 'C:fakepathphoto_2022-03-28_19-54-38 (2).jpg'),
(19, 'Fuska', 'lorem lorem', '150', 'breakfast', ''),
(21, 'asdfasdf', 'asdf', '654', 'breakfast', ''),
(22, 'adf', 'asdf', '1500', 'breakfast', '');

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `address` varchar(100) NOT NULL,
  `contact` varchar(50) NOT NULL,
  `message` varchar(200) NOT NULL,
  `order_time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `orders`
--

INSERT INTO `orders` (`id`, `name`, `email`, `address`, `contact`, `message`, `order_time`) VALUES
(1, '', '', '', '', '', '2022-12-12 12:56:59'),
(2, '', '', '', '', '', '2022-12-12 12:56:59'),
(4, '', '', '', '', '', '2022-12-12 13:02:48'),
(6, 'Alauddin', 'alo@gmail.com', 'Banasree', '32416598', 'Ami ki khabo', '2022-12-20 11:16:05');

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
(3, 'Online Order', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://png.pngtree.com/png-clipart/20190520/original/pngtree-online-food-background-with-gourmet-menu-phone-interface-png-image_3683985.jpg'),
(4, '24/7 Service', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.', 'https://images.all-free-download.com/images/graphiclarge/service_and_support_for_customers_24_hours_a_day_and_7_days_a_week_icon_open_around_the_vector_clock_6833320.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `email` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `contact` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `address` varchar(100) CHARACTER SET utf8mb4 NOT NULL,
  `password` varchar(50) CHARACTER SET utf8mb4 NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `name`, `email`, `contact`, `address`, `password`, `time`) VALUES
(1, 'KERVIN KARL', '', '0123456789', 'PALOMA, VALLADOLID', '', '2022-09-17 06:10:08'),
(2, 'RONALD', '', '0123456710', 'PALOMA, VALLADOLID', '', '2022-09-17 06:10:08'),
(3, 'GERALD', '', '0123456711', 'PACOL, VALLADOLID', '', '2022-09-17 06:10:08'),
(4, 'RAM CHRISTIAN', '', '0123456712', 'POBLACION, VALLADOLID', '', '2022-09-17 06:10:08'),
(5, 'JAN MICHAEL', '', '0123456713', 'POBLACION, VALLADOLID', '', '2022-09-17 06:10:08'),
(6, 'ROSIE', '', '0123456714', 'MABINI, VALLADOLID', '', '2022-09-17 06:10:08'),
(7, 'ANDRIA', '', '0123456715', 'MABINI, VALLADOLID', '', '2022-09-17 06:10:08'),
(8, 'ANGELA', '', '0123456716', 'MABINI, PULUPANDAN', '', '2022-09-17 06:10:08'),
(9, 'ROWELA', '', '0123456717', 'DOLDOL, VALLADOLID', '', '2022-09-17 06:10:08'),
(10, 'REGINE', '', '0123456718', 'MABINI, VALLADOLID', '', '2022-09-17 06:10:08'),
(11, 'JOHN MARK', '', '0123456719', 'PALAKA SUR, PULUPANDAN', '', '2022-09-17 06:10:08'),
(12, 'SUNDAY', '', '0123456720', 'MABINI, VALLADOLID', '', '2022-09-17 06:10:08'),
(13, 'JOEMAR', '', '0123456721', 'MABINI, VALLADOLID', '', '2022-09-17 06:10:08'),
(14, 'CHRISTOPHER', '', '0123456722', 'TANDANG SORA, QUEZON CITY', '', '2022-09-17 06:10:08'),
(15, 'REYNAN', '', '0123456723', 'PALAKA, VALLADOLID', '', '2022-09-17 06:10:08'),
(16, 'RATCHEL', '', '0123456724', 'BAYABAS, VALLADOLID', '', '2022-09-17 06:15:03'),
(17, 'CRISTY GAYLE', '', '0123456725', 'SAGUA BANUA, VALLADOLID', '', '2022-09-17 06:27:10'),
(18, 'ROZEL CHILES', '', '0123456726', 'PALAKA, VALLADOLID', '', '2022-09-17 06:29:55'),
(19, 'MARY BERYL', '', '0123456727', 'POBLACION, VALLADOLID', '', '2022-09-17 06:29:55'),
(20, 'REGINA MARIE', '', '0123456728', 'POBLACION, VALLADOLID', '', '2022-09-17 06:29:55'),
(21, 'MARLON', '', '0123456729', 'PACOL, VALLADOLID', '', '2022-09-17 06:29:55'),
(22, 'KENNETH', '', '0123456730', 'PALAKA SUR, PULUPANDAN', '', '2022-09-17 06:29:55'),
(23, 'MARK ANGELO', '', '0123456731', 'POBLACION, VALLADOLID', '', '2022-09-17 06:29:55'),
(24, 'RGEE LOUIZE', '', '0123456732', 'PALAKA SUR, PULUPANDAN', '', '2022-09-17 06:29:55'),
(25, 'JOEZER COLENE', '', '0123456733', 'PALAKA SUR, PULUPANDAN', '', '2022-09-17 06:29:55'),
(26, 'JULIAH', '', '0123456734', 'PACOL, VALLADOLID', '', '2022-09-17 06:29:55'),
(27, 'CHRISTINE MAE', '', '0123456735', 'PALAKA SUR, PULUPANDAN', '', '2022-09-17 06:29:55'),
(28, 'NICOLE ANN', '', '0123456736', 'PACOL, VALLADOLID', '', '2022-09-17 06:37:53'),
(29, 'JANESSA', '', '0123456737', 'MABINI, VALLADOLID', '', '2022-09-17 06:37:53'),
(30, 'MARNYL', '', '0123456738', 'PALAKA, VALLADOLID', '', '2022-09-17 06:37:53'),
(31, 'REXXER ANDREI', '', '0123456739', 'MABINI, PULUPANDAN', '', '2022-09-17 06:37:53'),
(32, 'JOSHUA', '', '0123456740', 'ALIJIS, VALLADOLID', '', '2022-09-17 06:37:53'),
(33, 'JERSON', '', '0123456741', 'PALAKA, VALLADOLID', '', '2022-09-17 06:37:53'),
(34, 'JESS LORD', '', '0123456742', 'MABINI, PULUPANDAN', '', '2022-09-17 06:37:53'),
(35, 'RALPH JERO', '', '0123456743', 'ALIJIS, VALLADOLID', '', '2022-09-17 06:37:53'),
(36, 'TRESHIA', '', '0123456744', 'PACOL, VALLADOLID', '', '2022-09-17 06:37:53'),
(37, 'MA THERESA MAE', '', '0123456745', 'PALAKA, VALLADOLID', '', '2022-09-17 06:37:53'),
(38, 'ELLA MARIE', '', '0123456746', 'PALAKA, VALLADOLID', '', '2022-09-17 06:37:53'),
(39, 'LOVELY ANN', '', '0123456747', 'BAYABAS, VALLADOLID', '', '2022-09-17 06:37:53'),
(40, 'CRISTALLY', '', '0123456748', 'BARANGAY 16 (POB.), BACOLOD CITY (Capital)', '', '2022-09-17 06:37:53');

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
  ADD PRIMARY KEY (`chf_id`);

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
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin`
--
ALTER TABLE `admin`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `boking`
--
ALTER TABLE `boking`
  MODIFY `bok-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `chefs`
--
ALTER TABLE `chefs`
  MODIFY `chf_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT for table `contact`
--
ALTER TABLE `contact`
  MODIFY `con-id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `menu`
--
ALTER TABLE `menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
