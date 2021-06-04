-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jun 04, 2021 at 03:51 AM
-- Server version: 10.4.18-MariaDB
-- PHP Version: 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `startravel`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `account_id` int(11) NOT NULL,
  `account_name` text COLLATE utf8_unicode_ci NOT NULL,
  `account_pass` text COLLATE utf8_unicode_ci NOT NULL,
  `account_email` text COLLATE utf8_unicode_ci NOT NULL,
  `account_status` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`account_id`, `account_name`, `account_pass`, `account_email`, `account_status`) VALUES
(29, 'Ha Mong Khang', 'khangcute', 'hamongkhang@gmail.com', 'Being active'),
(30, 'Nguyen Hoang Huan', 'huancute', 'hamongkhang@gmail.com', 'Being active'),
(31, 'Ho Thi Hang', 'hangcute', 'hamongkhang@gmail.com', 'Block'),
(48, 'Nguyen Dinh Kha', 'khacute', 'hamongkhang@gmail.com', 'Block'),
(49, 'Nguyen Thi Thang', 'thangcute', 'khang.ha22@student.passerellesnumeriques.org', 'Being active'),
(50, 'Huynh Minh Hai', 'haicute', 'khang.ha22@student.passerellesnumeriques.org', 'Being active');

-- --------------------------------------------------------

--
-- Table structure for table `activity`
--

CREATE TABLE `activity` (
  `activity_id` int(11) NOT NULL,
  `activity_name` text COLLATE utf8_unicode_ci NOT NULL,
  `activity_password` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `activity`
--

INSERT INTO `activity` (`activity_id`, `activity_name`, `activity_password`) VALUES
(292, 'admin', 'khanghuanhang');

-- --------------------------------------------------------

--
-- Table structure for table `admin`
--

CREATE TABLE `admin` (
  `admin_user` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `admin`
--

INSERT INTO `admin` (`admin_user`) VALUES
(1);

-- --------------------------------------------------------

--
-- Table structure for table `blog`
--

CREATE TABLE `blog` (
  `id_blog` int(11) NOT NULL,
  `img_blog` text COLLATE utf8_unicode_ci NOT NULL,
  `author_blog` text COLLATE utf8_unicode_ci NOT NULL,
  `time_blog` text COLLATE utf8_unicode_ci NOT NULL,
  `title_blog` text COLLATE utf8_unicode_ci NOT NULL,
  `content_blog` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `blog`
--

INSERT INTO `blog` (`id_blog`, `img_blog`, `author_blog`, `time_blog`, `title_blog`, `content_blog`) VALUES
(1, 'vietnamIGHC.jpg', 'Khang Ha Mong', '29 April,2021', 'Travel Insuranve Benefits', 'Travel Insurance is the kind of insuarance pays the expenses and damages that concern the travels.'),
(2, '99-thuyen_hoa.jpg', 'Huan Nguyen', '11 April, 2021', 'Travel Guideline Agents', 'Please contact us for the most enjoyable experience. We will always stand by you on your journey.'),
(3, 'at_nhung-hinh-anh-du-lich-dep-me-hon-cua-vung-dat-tay-bac_019194d3614616680f8a580c1f6a964e.jpg', 'Hang  Nguyen', '11 April, 2021', 'Secure Travel Tips', 'Please contact us for the most enjoyable experience. We will always stand by you on your journey.');

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `id_cart` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `name_user` text COLLATE utf8_unicode_ci NOT NULL,
  `email_user` text COLLATE utf8_unicode_ci NOT NULL,
  `id_tour` int(11) NOT NULL,
  `image_tour` text COLLATE utf8_unicode_ci NOT NULL,
  `name_tour` text COLLATE utf8_unicode_ci NOT NULL,
  `price_tour` decimal(10,0) NOT NULL,
  `from_to` text COLLATE utf8_unicode_ci NOT NULL,
  `check_in` date NOT NULL,
  `check_out` date NOT NULL,
  `adults` int(11) NOT NULL,
  `phone` varchar(11) COLLATE utf8_unicode_ci NOT NULL,
  `address` text COLLATE utf8_unicode_ci NOT NULL,
  `status` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id_cart`, `id_account`, `name_user`, `email_user`, `id_tour`, `image_tour`, `name_tour`, `price_tour`, `from_to`, `check_in`, `check_out`, `adults`, `phone`, `address`, `status`) VALUES
(62, 29, 'Ha Mong Khang', 'hamongkhang@gmail.com', 2, 'chua-mot-cot.jpg', 'Mot Cot Pagoda', '219997', 'Ha Noi- Viet Nam', '0000-00-00', '0000-00-00', 4, '4', '4', 'Confirmed'),
(69, 31, 'Ho Thi Hang', 'hamongkhang@gmail.com', 5, 'du-thuyền.jpg', 'Ocean tour 2021', '129998', 'Da Nang- Viet  Nam', '0000-00-00', '0000-00-00', 1, '3323132', 'Qung Tri', 'checking in'),
(72, 29, 'Ha Mong Khang', 'hamongkhang@gmail.com', 5, 'du-thuyền.jpg', 'Ocean tour 2021', '219997', 'Da Nang- Viet  Nam', '0000-00-00', '0000-00-00', 4, '123', 'Binh Dinh', 'Confirmed'),
(74, 29, 'e22', 'hamongkhang@gmail.com', 5, 'du-thuyền.jpg', 'Ocean tour 2021', '3789962', 'Da Nang- Viet  Nam', '0000-00-00', '0000-00-00', 123, '4234', '2344', 'checking in'),
(75, 29, '23', '23', 19, 'Vuon Thuong Uyen Bay Da Lat.jpg', 'Winter tour 2021', '789992', 'Tay Son-Binh Dinh', '0000-00-00', '0000-00-00', 23, '23', '23', 'checking in'),
(76, 29, '23', '323', 1, 'kinh-nghiem-du-lich-ha-noi-tu-a-den-z-10.jpg', 'Quoc Tu Giam', '789992', 'BinhDinh- Viet Nam', '0000-00-00', '0000-00-00', 23, '23', '232', 'checking in'),
(77, 29, 'qweqwe', '32', 2, 'nhay-bungee-o-viet-nam.jpg', 'Phu Quoc, Viet Nam', '1119988', 'Phu Quoc- Viet Nam', '0000-00-00', '0000-00-00', 34, '4', '34', 'checking in'),
(78, 29, '3423', '34', 18, 'DSCF7483-8260-1593164119.jpg', 'Spring', '219997', 'Tay Son-Binh Dinh', '0000-00-00', '0000-00-00', 4, '34', '34', 'checking in'),
(79, 29, 'sda', 'sd', 3, 'hoiann.jpg', 'Hoi An  tour 2021', '159998', 'Da Nang- Viet Nam', '0000-00-00', '0000-00-00', 2, '5', 'sd', 'checking in'),
(80, 50, 'Huynh Minh Hai', 'khang.ha22@student.passerellesnumeriques.org', 19, 'Vuon Thuong Uyen Bay Da Lat.jpg', 'Winter tour 2021', '159998', 'Tay Son-Binh Dinh', '0000-00-00', '0000-00-00', 2, '232323', 'Quang Nam', 'Confirmed'),
(81, 50, '4234', 'a@gmail.com', 5, 'du-thuyền.jpg', 'Ocean tour 2021', '129998', 'Da Nang- Viet  Nam', '0000-00-00', '0000-00-00', 1, '232', 'a3442', 'checking in'),
(82, 29, '23', '232', 3, 'cam-nang-du-lich-ha-noi-mytour-1.jpg', 'Hoang Kiem Lake', '789992', 'Ha Noi- Viet Nam', '0000-00-00', '0000-00-00', 23, '232', '232', 'checking in'),
(83, 29, '2343', '4343', 17, 'du-lich-phu-quoc-17.jpg', 'Fall tour 2021', '1119988', 'Tay Son-Binh Dinh', '0000-00-00', '0000-00-00', 34, '343', '43', 'checking in'),
(84, 29, '34', '3', 2, 'nhay-bungee-o-viet-nam.jpg', 'Phu Quoc, Viet Nam', '219997', 'Phu Quoc- Viet Nam', '0000-00-00', '0000-00-00', 4, '43', '34', 'checking in'),
(85, 29, '42342', '34', 8, '11.jpg', '3423', '380', '34', '0000-00-00', '0000-00-00', 34, '34', '43', 'checking in'),
(86, 29, 'wre', '34', 3, 'hoiann.jpg', 'Hoi An  tour 2021', '1119988', 'Da Nang- Viet Nam', '0000-00-00', '0000-00-00', 34, '4234', '34', 'checking in');

-- --------------------------------------------------------

--
-- Table structure for table `cart_admin`
--

CREATE TABLE `cart_admin` (
  `id_cart` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `id_tour` int(11) NOT NULL,
  `image_tour` int(11) NOT NULL,
  `name_tour` int(11) NOT NULL,
  `price_tour` int(11) NOT NULL,
  `from_to` int(11) NOT NULL,
  `status` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `id_comment` int(11) NOT NULL,
  `id_blog` int(11) NOT NULL,
  `name_comment` text COLLATE utf8_unicode_ci NOT NULL,
  `email_comment` text COLLATE utf8_unicode_ci NOT NULL,
  `message` text COLLATE utf8_unicode_ci NOT NULL,
  `date_comment` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`id_comment`, `id_blog`, `name_comment`, `email_comment`, `message`, `date_comment`) VALUES
(33, 0, 'Ha Mong Khang', 'hamongkhang@gmail.com', 'f', '01.06.2021 00:30:38'),
(34, 1, 'Ha Mong Khang', 'hamongkhang@gmail.com', 'h', '01.06.2021 02:09:50'),
(35, 1, 'Ha Mong Khang', 'hamongkhang@gmail.com', 'h', '01.06.2021 02:13:22'),
(36, 0, 'Ha Mong Khang', 'hamongkhang@gmail.com', 'hh', '01.06.2021 02:14:44'),
(37, 0, 'Ha Mong Khang', 'hamongkhang@gmail.com', 'hrfdf', '01.06.2021 02:16:14');

-- --------------------------------------------------------

--
-- Table structure for table `demoaccount`
--

CREATE TABLE `demoaccount` (
  `id` int(11) NOT NULL,
  `user` text COLLATE utf8_unicode_ci NOT NULL,
  `pass` text COLLATE utf8_unicode_ci NOT NULL,
  `email` text COLLATE utf8_unicode_ci NOT NULL,
  `repass` text COLLATE utf8_unicode_ci NOT NULL,
  `code` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `history`
--

CREATE TABLE `history` (
  `id_history` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `id_tour` int(11) NOT NULL,
  `image_tour` text COLLATE utf8_unicode_ci NOT NULL,
  `name_tour` text COLLATE utf8_unicode_ci NOT NULL,
  `price_tour` decimal(11,0) NOT NULL,
  `from_to` text COLLATE utf8_unicode_ci NOT NULL,
  `status` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `history`
--

INSERT INTO `history` (`id_history`, `id_account`, `id_tour`, `image_tour`, `name_tour`, `price_tour`, `from_to`, `status`) VALUES
(10, 30, 3, 'vịnh lan hạ.jpg', 'Ocean tour 2021', '99999', 'Da Nang- Viet  Nam', 'Paied'),
(11, 30, 3, 'vịnh lan hạ.jpg', 'Ocean tour 2021', '99999', 'Da Nang- Viet  Nam', 'Paied'),
(13, 29, 16, 'sapa.jpg', 'Summer tour 2021', '99999', 'Tay Son-Binh Dinh', 'Paied'),
(14, 29, 16, 'sapa.jpg', 'Summer tour 2021', '99999', 'Tay Son-Binh Dinh', 'Paied'),
(15, 29, 16, 'sapa.jpg', 'Summer tour 2021', '99999', 'Tay Son-Binh Dinh', 'Paied'),
(18, 29, 2, 'chua-mot-cot.jpg', 'Mot Cot Pagoda', '219997', 'Ha Noi- Viet Nam', 'Paied'),
(20, 29, 2, 'chua-mot-cot.jpg', 'Mot Cot Pagoda', '219997', 'Ha Noi- Viet Nam', 'Paied'),
(21, 29, 5, 'du-thuyền.jpg', 'Ocean tour 2021', '219997', 'Da Nang- Viet  Nam', 'Paied'),
(22, 29, 2, 'chua-mot-cot.jpg', 'Mot Cot Pagoda', '219997', 'Ha Noi- Viet Nam', 'Paied'),
(24, 29, 5, 'du-thuyền.jpg', 'Ocean tour 2021', '3789962', 'Da Nang- Viet  Nam', 'Paied'),
(25, 29, 5, 'du-thuyền.jpg', 'Ocean tour 2021', '219997', 'Da Nang- Viet  Nam', 'Paied'),
(26, 29, 3, 'hoiann.jpg', 'Hoi An  tour 2021', '159998', 'Da Nang- Viet Nam', 'Paied'),
(27, 29, 1, 'kinh-nghiem-du-lich-ha-noi-tu-a-den-z-10.jpg', 'Quoc Tu Giam', '789992', 'BinhDinh- Viet Nam', 'Paied'),
(28, 29, 2, 'chua-mot-cot.jpg', 'Mot Cot Pagoda', '219997', 'Ha Noi- Viet Nam', 'Paied');

-- --------------------------------------------------------

--
-- Table structure for table `message`
--

CREATE TABLE `message` (
  `id_mess` int(11) NOT NULL,
  `id_account` int(11) NOT NULL,
  `content_mess` text COLLATE utf8_unicode_ci NOT NULL,
  `time_mess` text COLLATE utf8_unicode_ci NOT NULL,
  `name_account` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `message`
--

INSERT INTO `message` (`id_mess`, `id_account`, `content_mess`, `time_mess`, `name_account`) VALUES
(93, 29, 'Hello admin khang', '02.06.2021 02:05:44', 'Ha Mong Khang'),
(94, 29, 'My name is  Khang', '02.06.2021 02:05:56', 'Ha Mong Khang'),
(95, 49, 'Hello admin thang', '02.06.2021 02:06:42', 'Nguyen Thi Thang'),
(96, 49, 'My name is Thang', '02.06.2021 02:06:48', 'Nguyen Thi Thang'),
(97, 29, 'Hello Khang I am admin', '02.06.2021 02:07:32', 'admin'),
(98, 29, 'thank you Khang', '02.06.2021 02:07:41', 'admin'),
(99, 49, 'Hello Thang', '02.06.2021 02:07:54', 'admin'),
(100, 29, 'hello admin', '03.06.2021 13:13:40', 'Ha Mong Khang');

-- --------------------------------------------------------

--
-- Table structure for table `tour_capital`
--

CREATE TABLE `tour_capital` (
  `id_capital` int(11) NOT NULL,
  `name_capital` text COLLATE utf8_unicode_ci NOT NULL,
  `img_capital` text COLLATE utf8_unicode_ci NOT NULL,
  `price_capital` decimal(10,0) NOT NULL,
  `detail_capital` text COLLATE utf8_unicode_ci NOT NULL,
  `from_to_capital` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tour_capital`
--

INSERT INTO `tour_capital` (`id_capital`, `name_capital`, `img_capital`, `price_capital`, `detail_capital`, `from_to_capital`) VALUES
(1, 'Quoc Tu Giam', 'kinh-nghiem-du-lich-ha-noi-tu-a-den-z-10.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'BinhDinh- Viet Nam'),
(2, 'Mot Cot Pagoda', 'chua-mot-cot.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Ha Noi- Viet Nam'),
(3, 'Hoang Kiem Lake', 'cam-nang-du-lich-ha-noi-mytour-1.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Ha Noi- Viet Nam'),
(9, '232', '11.jpg', '213', '23232', '232');

-- --------------------------------------------------------

--
-- Table structure for table `tour_cruise`
--

CREATE TABLE `tour_cruise` (
  `id_cruise` int(11) NOT NULL,
  `name_cruise` text COLLATE utf8_unicode_ci NOT NULL,
  `img_cruise` text COLLATE utf8_unicode_ci NOT NULL,
  `price_cruise` decimal(10,0) NOT NULL,
  `detail_cruise` text COLLATE utf8_unicode_ci NOT NULL,
  `from_to_cruise` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tour_cruise`
--

INSERT INTO `tour_cruise` (`id_cruise`, `name_cruise`, `img_cruise`, `price_cruise`, `detail_cruise`, `from_to_cruise`) VALUES
(2, 'Ocean tour 2021', 'anh-1-160161747022091907963.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Da Nang- Viet  Nam'),
(3, 'Ocean tour 2021', 'vịnh lan hạ.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Da Nang- Viet  Nam'),
(4, 'Ocean tour 2021', 'tour-nam-du-4-ngay-3-dem-2-800x500.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Da Nang- Viet  Nam'),
(5, 'Ocean tour 2021', 'du-thuyền.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Da Nang- Viet  Nam');

-- --------------------------------------------------------

--
-- Table structure for table `tour_hot`
--

CREATE TABLE `tour_hot` (
  `id_hot` int(11) NOT NULL,
  `name_hot` text COLLATE utf8_unicode_ci NOT NULL,
  `img_hot` text COLLATE utf8_unicode_ci NOT NULL,
  `price_hot` decimal(10,0) NOT NULL,
  `detail_hot` text COLLATE utf8_unicode_ci NOT NULL,
  `from_to_hot` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tour_hot`
--

INSERT INTO `tour_hot` (`id_hot`, `name_hot`, `img_hot`, `price_hot`, `detail_hot`, `from_to_hot`) VALUES
(16, 'Summer tour 2021', 'sapa.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end hottest.', 'Tay Son-Binh Dinh'),
(18, 'Spring', 'DSCF7483-8260-1593164119.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting.', 'Tay Son-Binh Dinh');

-- --------------------------------------------------------

--
-- Table structure for table `tour_offer`
--

CREATE TABLE `tour_offer` (
  `id_offer` int(11) NOT NULL,
  `name_offer` text COLLATE utf8_unicode_ci NOT NULL,
  `img_offer` text COLLATE utf8_unicode_ci NOT NULL,
  `price_offer` decimal(10,0) NOT NULL,
  `detail_offer` text COLLATE utf8_unicode_ci NOT NULL,
  `from_to_offer` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tour_offer`
--

INSERT INTO `tour_offer` (`id_offer`, `name_offer`, `img_offer`, `price_offer`, `detail_offer`, `from_to_offer`) VALUES
(3, 'Hoi An  tour 2021', 'hoiann.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting.', 'Da Nang- Viet Nam'),
(5, 'Hoi An  tour 2021', 'kham-pha-cung-deo-hiem-tro-bac-nhat-viet-nam-12.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting.', 'Da Nang- Viet Nam');

-- --------------------------------------------------------

--
-- Table structure for table `tour_sport`
--

CREATE TABLE `tour_sport` (
  `id_sport` int(11) NOT NULL,
  `name_sport` text COLLATE utf8_unicode_ci NOT NULL,
  `img_sport` text COLLATE utf8_unicode_ci NOT NULL,
  `price_sport` decimal(10,0) NOT NULL,
  `detail_sport` text COLLATE utf8_unicode_ci NOT NULL,
  `from_to_sport` text COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `tour_sport`
--

INSERT INTO `tour_sport` (`id_sport`, `name_sport`, `img_sport`, `price_sport`, `detail_sport`, `from_to_sport`) VALUES
(1, 'PHU QUOC, VIET NAM', 'trai-nghiem-lan-bien-1024x664.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Phu Quoc- Viet Nam'),
(2, 'Phu Quoc, Viet Nam', 'nhay-bungee-o-viet-nam.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Phu Quoc- Viet Nam'),
(3, 'PHU QUOC, VIET NAM', '7117_tran_tro_de_du_lich_mao_hiem_phat_trien.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Phu Quoc- Viet Nam'),
(4, 'PHU QUOC, VIET NAM', 'trai-nghiem-flyboard.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Phu Quoc- Viet Nam'),
(5, 'PHU QUOC, VIET NAM', 'kham-pha-Du_luon.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Phu Quoc- Viet Nam'),
(6, 'PHU QUOC, VIET NAM', 'trai-nghiem-Zipline.jpg', '99999', 'Summer is the most imaginative time for travel. You have to the select the summer should go du lich at the end of the Interesting', 'Phu Quoc- Viet Nam');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`account_id`);

--
-- Indexes for table `activity`
--
ALTER TABLE `activity`
  ADD PRIMARY KEY (`activity_id`);

--
-- Indexes for table `blog`
--
ALTER TABLE `blog`
  ADD PRIMARY KEY (`id_blog`);

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `cart_admin`
--
ALTER TABLE `cart_admin`
  ADD PRIMARY KEY (`id_cart`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`id_comment`);

--
-- Indexes for table `demoaccount`
--
ALTER TABLE `demoaccount`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id_history`);

--
-- Indexes for table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_mess`);

--
-- Indexes for table `tour_capital`
--
ALTER TABLE `tour_capital`
  ADD PRIMARY KEY (`id_capital`);

--
-- Indexes for table `tour_cruise`
--
ALTER TABLE `tour_cruise`
  ADD PRIMARY KEY (`id_cruise`);

--
-- Indexes for table `tour_hot`
--
ALTER TABLE `tour_hot`
  ADD PRIMARY KEY (`id_hot`);

--
-- Indexes for table `tour_offer`
--
ALTER TABLE `tour_offer`
  ADD PRIMARY KEY (`id_offer`);

--
-- Indexes for table `tour_sport`
--
ALTER TABLE `tour_sport`
  ADD PRIMARY KEY (`id_sport`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `account_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=51;

--
-- AUTO_INCREMENT for table `activity`
--
ALTER TABLE `activity`
  MODIFY `activity_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=293;

--
-- AUTO_INCREMENT for table `blog`
--
ALTER TABLE `blog`
  MODIFY `id_blog` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT for table `cart_admin`
--
ALTER TABLE `cart_admin`
  MODIFY `id_cart` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `id_comment` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=38;

--
-- AUTO_INCREMENT for table `demoaccount`
--
ALTER TABLE `demoaccount`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- AUTO_INCREMENT for table `history`
--
ALTER TABLE `history`
  MODIFY `id_history` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=46;

--
-- AUTO_INCREMENT for table `message`
--
ALTER TABLE `message`
  MODIFY `id_mess` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=105;

--
-- AUTO_INCREMENT for table `tour_capital`
--
ALTER TABLE `tour_capital`
  MODIFY `id_capital` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `tour_cruise`
--
ALTER TABLE `tour_cruise`
  MODIFY `id_cruise` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `tour_hot`
--
ALTER TABLE `tour_hot`
  MODIFY `id_hot` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `tour_offer`
--
ALTER TABLE `tour_offer`
  MODIFY `id_offer` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `tour_sport`
--
ALTER TABLE `tour_sport`
  MODIFY `id_sport` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
