-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Dec 27, 2020 at 04:52 PM
-- Server version: 10.4.14-MariaDB
-- PHP Version: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `arkhire`
--

-- --------------------------------------------------------

--
-- Table structure for table `account`
--

CREATE TABLE `account` (
  `accountID` int(11) NOT NULL,
  `account_name` varchar(50) DEFAULT NULL,
  `account_email` varchar(60) DEFAULT NULL,
  `account_phone` varchar(15) DEFAULT NULL,
  `password` text DEFAULT NULL,
  `privilege` int(11) DEFAULT NULL,
  `createdAt` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accountID`, `account_name`, `account_email`, `account_phone`, `password`, `privilege`, `createdAt`, `updatedAt`) VALUES
(1, 'Kirigaya Kazuto', 'Kirito@gmail.com', '082121123456', 'kanandepanbelakangto', 0, 'Thursday, November 12, 2020 9:25 PM', 'Wednesday, November 18, 2020 1:46 PM'),
(2, 'Yuuki Asuna', 'Asuna@gmail.com', '082121123', 'kisuna', 0, 'Thursday, November 12, 2020 9:26 PM', 'Wednesday, November 18, 2020 1:44 PM'),
(3, 'Theresa', 'Theresa@gmail.com', '089119119119', 'ichibankawaii', 1, 'Thursday, November 12, 2020 9:43 PM', 'Monday, November 16, 2020 7:10 AM'),
(4, 'Abdul Richard', 'Abdul.Richard@outlook.com', '085156069757', 'test12345', 0, 'Thursday, November 19, 2020 11:22 PM', 'Saturday, November 21, 2020 10:28 AM'),
(5, 'Yagoo', 'Yagoo@hololive.jp', '085156069757', 'test12345', 1, 'Thursday, November 19, 2020 6:42 PM', 'Thursday, November 19, 2020 6:42 PM'),
(6, 'Marine Kanchou', 'Marine@hololive.jp', '082488877124', 'ahoy1234', 0, 'Saturday, November 21, 2020 2:59 PM', 'Saturday, November 21, 2020 3:04 PM'),
(7, 'Xu Zenhua', 'XuZenhua@moonton.com', '6785854217', 'ripVG', 1, 'Saturday, November 21, 2020 5:56 PM', 'Sunday, November 22, 2020 8:05 AM'),
(8, 'Moona Hoshinova', 'Moonafik@hololive.id', '082488515178', '$2b$10$00WTa4B/zam05OewVcUFDea52miRUDfbHS54GEr2sxoBNCR/INmZy', 0, 'Sunday, November 22, 2020 2:38 AM', 'Sunday, November 22, 2020 2:38 AM'),
(9, 'Sirius Aldebaran', 'SizAldebaran@gmail.com', '085156068757', '$2b$10$3a/eBIfCF5HuDQe5SepZi.c7d//dibyWk5BQltvqz891vhaKT6Lbi', 991399361, 'Sunday, November 22, 2020 3:06 AM', 'Sunday, November 22, 2020 3:06 AM'),
(10, 'Bronya ', 'Bronya@mihoyo.com', '67858542178', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 1, 'Sunday, November 22, 2020 4:35 AM', 'Sunday, November 22, 2020 4:35 AM'),
(11, 'Tokino sora', 'Tokino sora@hololive.jp', '082488515178', '$2b$10$gOTsuzQ.eBjuJKdpQw0.OeUiwDcJoOswra0.J6Wvvq52PFfJ6fn5G', 0, 'Sunday, November 22, 2020 11:23 PM', 'Sunday, November 22, 2020 11:23 PM'),
(12, 'Shirakami Fubuki', 'Fubuki@hololive.jp', '082488515178', '$2b$10$COp18JC6pJKHWPpbI5F78.GccV6KuPCi9MLgno11g2CvBor.UfIAO', 0, 'Sunday, November 22, 2020 11:23 PM', 'Sunday, November 22, 2020 11:23 PM'),
(13, 'Natsuiro Matsuri', 'Natsuiro@hololive.jp', '082488515178', '$2b$10$25vgYOaVqY2i7vlgGJ1z7Owi596npE7y0SoNfFVSRJezZ//KgIaly', 0, 'Sunday, November 22, 2020 11:24 PM', 'Sunday, November 22, 2020 11:24 PM'),
(14, 'Minato Aqua', 'Aqua@hololive.jp', '082488515178', '$2b$10$JuwQyAc53L9Y9gUDnr2O8.fg7U/qU0KtsviipDSbGUSbrFGf1Z26u', 0, 'Sunday, November 22, 2020 11:24 PM', 'Sunday, November 22, 2020 11:24 PM'),
(15, 'Murasaki shion', 'Shion@hololive.jp', '082488515178', '$2b$10$Xf.UFsmHBIghZzUz7/oCX.0I5b9BpX3cudBl8SUDXk5SofZnOo.wa', 0, 'Sunday, November 22, 2020 11:25 PM', 'Sunday, November 22, 2020 11:25 PM'),
(16, 'Inugami Korone', 'Korone@hololive.jp', '082488515178', '$2b$10$XR52jnLqiBKmewED28Ud9uvCHO45gO0dHKn5mgUeTZ42lrbX4YhA6', 0, 'Sunday, November 22, 2020 11:25 PM', 'Sunday, November 22, 2020 11:25 PM'),
(17, 'Nekomata Okayu', 'Okayu@hololive.jp', '082488515178', '$2b$10$qOy2s/V8xGA3tvLx5c5WR.bdx3rJ56h9xbhZci8xSiNEg9rxWwxWe', 0, 'Sunday, November 22, 2020 11:26 PM', 'Sunday, November 22, 2020 11:26 PM'),
(18, 'Alucard', 'Heynotbad@gmail.com', '082488515178', '$2b$10$DW1TRxlzSRJTXSsg/97dbe2rN/aog3AznpwASsEMwtiPz.uH9mSvi', 0, 'Monday, November 23, 2020 2:10 PM', 'Monday, November 23, 2020 2:10 PM');

-- --------------------------------------------------------

--
-- Table structure for table `achivement`
--

CREATE TABLE `achivement` (
  `achivementID` int(11) NOT NULL,
  `talentID` int(11) NOT NULL,
  `talent_github` varchar(70) DEFAULT NULL,
  `talent_cv` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `achivement`
--

INSERT INTO `achivement` (`achivementID`, `talentID`, `talent_github`, `talent_cv`) VALUES
(1, 1, 'https://localhost:3000', 'talent_cv-1606060100461.jpg'),
(2, 2, 'https://localhost:3000', 'talent_cv-1606060129323.jpg'),
(3, 3, 'https://localhost:3000', 'talent_cv-1606060155364.jpg'),
(4, 4, 'https://localhost:3000', 'talent_cv-1606060165176.jpg'),
(5, 5, 'https://localhost:3000', 'talent_cv-1606060176042.jpg'),
(6, 6, 'https://localhost:3000', 'talent_cv-1606063107795.jpg'),
(7, 7, 'https://localhost:3000', 'talent_cv-1606063115891.jpg'),
(8, 8, 'https://localhost:3000', 'talent_cv-1606063122254.jpg'),
(9, 9, 'https://localhost:3000', 'talent_cv-1606063129069.jpg'),
(10, 10, 'https://localhost:3000', 'talent_cv-1606063139387.jpg'),
(11, 11, 'https://localhost:3000', 'talent_cv-1606063154365.jpg'),
(12, 12, 'https://localhost:3000', 'talent_cv-1606063210447.jpg'),
(13, 13, 'https://localhost:3000', 'talent_cv-1606116155962.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `companyID` int(11) NOT NULL,
  `accountID` int(11) DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `company_position` varchar(80) DEFAULT NULL,
  `company_latitude` text DEFAULT NULL,
  `company_longitude` text DEFAULT NULL,
  `company_type` varchar(20) DEFAULT NULL,
  `company_detail` varchar(300) DEFAULT NULL,
  `company_linkedin` text DEFAULT NULL,
  `company_instagram` text DEFAULT NULL,
  `company_facebook` text DEFAULT NULL,
  `company_image` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`companyID`, `accountID`, `company_name`, `company_position`, `company_latitude`, `company_longitude`, `company_type`, `company_detail`, `company_linkedin`, `company_instagram`, `company_facebook`, `company_image`, `updatedAt`) VALUES
(1, 3, 'Code With Theresa', 'Director', '-6.9175', '107.6191', 'Startup', 'Code with theresa is the company who...', NULL, NULL, NULL, 'company_image-1606009544762.png', 'Sunday, November 22, 2020 8:45 AM'),
(2, 5, 'Hololive', 'Director', '35.6804', '139.7690', 'Enterprise', 'Hololive Production adalah proyek agensi Vtuber yang berasal dari Jepang yang dikembangkan oleh COVER Corporation. Hololive awalnya beroperasi di Jepang, kemudian memperluas wilayah operasinya ke China dan Indonesia.', NULL, 'https://www.instagram.com/hololive_/', 'https://web.facebook.com/hololivetv', 'company_image-1606009556872.jpg', 'Sunday, November 22, 2020 8:45 AM'),
(3, 7, 'Moontoon', 'CEO', '39.9042', '116.4074', 'Enterprise', 'Moonton, sebelumnya YoungJoy Technology Pte. Ltd., kemudian Shanghai Moonton Technology Co. Ltd. adalah pengembang dan penerbit video game China yang berbasis di Shanghai, China .. Didirikan pada bulan April 2014, perusahaan ini terkenal dengan game arena pertempuran online multipemain seluler', 'https://www.linkedin.com/company/shanghai-moonton-technology-co-ltd/', NULL, NULL, 'company_image-1606009572322.jpg', 'Sunday, November 22, 2020 8:46 AM'),
(4, 9, 'Nijisanji ID', 'Director', '-6.1754', '106.8272', 'Startup', 'Nijisanji adalah proyek VTuber atau Virtual Liver yang berasal dari Jepang dan dikembangkan oleh Ichikara Inc. Pada April 2020, terdapat lebih dari 100 VTuber anggota Nijisanji yang aktif melakukan berbagai kegiatan di platform streaming video Youtube.', NULL, 'https://www.instagram.com/nijisanji_id', 'https://web.facebook.com/nijisanji.indonesia', 'company_image-1606009498453.jpg', 'Sunday, November 22, 2020 8:44 AM'),
(5, 10, 'Mihoyo', 'CEO', '31.2304', '121.4737', 'Enterprise', 'miHoYo adalah studio animasi dan pengembangan video game Cina yang berbasis di Shanghai, Cina. Perusahaan ini didirikan pada 2012 oleh tiga mahasiswa dari Universitas Shanghai Jiao Tong dan, pada 2020, mempekerjakan lebih dari 1.500 orang', 'https://www.linkedin.com/company/mihoyo-co-ltd-/', 'https://www.instagram.com/mihoyo_jp', 'https://web.facebook.com/miHoYogames', 'company_image-1606009593220.jpg', 'Sunday, November 22, 2020 8:46 AM');

-- --------------------------------------------------------

--
-- Table structure for table `companyproject`
--

CREATE TABLE `companyproject` (
  `projectID` int(11) NOT NULL,
  `project_tittle` varchar(100) DEFAULT NULL,
  `project_duration` varchar(50) DEFAULT NULL,
  `project_desc` varchar(250) DEFAULT NULL,
  `fortalent_message` varchar(250) NOT NULL DEFAULT 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet',
  `project_sallary` varchar(25) DEFAULT NULL,
  `postedAt` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companyproject`
--

INSERT INTO `companyproject` (`projectID`, `project_tittle`, `project_duration`, `project_desc`, `fortalent_message`, `project_sallary`, `postedAt`, `updatedAt`) VALUES
(1, 'Create Hyperion Absent Apps', '1 WEEK', 'Make A Automatic absent for hyperion employee', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', 'Rp. 3.000.000', 'Saturday, November 21, 2020 10:34 AM', 'Saturday, November 21, 2020 10:34 AM'),
(2, 'Create Hololive Website', '1 WEEK', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', 'Rp. 8.000.000', 'Saturday, November 21, 2020 5:46 PM', 'Saturday, November 21, 2020 5:46 PM'),
(4, 'Create A Hololive Visual Novel Game', '1 MONTH', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', 'Rp. 12.000.000', 'Sunday, November 22, 2020 7:15 AM', 'Sunday, November 22, 2020 9:32 AM'),
(5, 'Update our Deep Fake Tech', '3 MONTH', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', 'Rp. 14.000.000', 'Sunday, November 22, 2020 9:31 AM', 'Sunday, November 22, 2020 9:31 AM'),
(7, 'Make me a music player apps', '6 MONTH', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', 'Rp. 9.000.000', 'Sunday, November 22, 2020 10:53 PM', 'Sunday, November 22, 2020 10:53 PM'),
(8, 'Buatin saya apliaksi buat nyari resep', '2 MONTH', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', 'Rp. 2.000.000', 'Monday, November 23, 2020 2:27 PM', 'Monday, November 23, 2020 2:27 PM');

-- --------------------------------------------------------

--
-- Table structure for table `hiring`
--

CREATE TABLE `hiring` (
  `offeringID` int(11) NOT NULL,
  `projectID` int(11) NOT NULL,
  `hiring_status` enum('Waiting','Approved','Declined') NOT NULL DEFAULT 'Waiting',
  `reply_message` varchar(250) DEFAULT NULL,
  `repliedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hiring`
--

INSERT INTO `hiring` (`offeringID`, `projectID`, `hiring_status`, `reply_message`, `repliedAt`) VALUES
(1, 1, 'Approved', 'Thank for invite me, I Accept you offering letter sir', 'Saturday, November 21, 2020 5:48 PM'),
(2, 2, 'Declined', 'Sorry, I am in other busy project', 'Saturday, November 21, 2020 5:47 PM'),
(4, 4, 'Approved', 'Thank for invite me, I am ready to become your employee', 'Sunday, November 22, 2020 7:20 AM'),
(5, 5, 'Declined', 'Thank for invite me, I am ready to become your employee', 'Sunday, November 22, 2020 9:33 AM'),
(7, 7, 'Waiting', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit ligula, aliquam sed eros in, pretium malesuada elit. Cras euismod dictum placerat. Aliquam et mauris non metus venenatis malesuada. Nullam venenatis porta ipsum id tristique', 'Sunday, December 27, 2020 1:46 PM'),
(8, 8, 'Waiting', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit ligula, aliquam sed eros in, pretium malesuada elit. Cras euismod dictum placerat. Aliquam et mauris non metus venenatis malesuada. Nullam venenatis porta ipsum id tristique', 'Sunday, December 27, 2020 1:46 PM');

-- --------------------------------------------------------

--
-- Table structure for table `talent`
--

CREATE TABLE `talent` (
  `talentID` int(11) NOT NULL,
  `accountID` int(11) NOT NULL,
  `talent_tittle` enum('Android Developer','Fullstack Web','Fullstack Mobile','Devops Engineer') DEFAULT NULL,
  `talent_time` enum('Fulltime','Freelance') DEFAULT NULL,
  `talent_city` varchar(10) DEFAULT NULL,
  `talent_profile` varchar(150) DEFAULT NULL,
  `talent_github` text DEFAULT NULL,
  `talent_image` text DEFAULT NULL,
  `talent_cover` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talent`
--

INSERT INTO `talent` (`talentID`, `accountID`, `talent_tittle`, `talent_time`, `talent_city`, `talent_profile`, `talent_github`, `talent_image`, `talent_cover`, `updatedAt`) VALUES
(1, 1, 'Fullstack Web', 'Fulltime', 'Jakarta', 'Saya Kirito, Si Jago Javascript', NULL, 'talent_image-1606006786067.jpg', NULL, 'Sunday, November 22, 2020 7:59 AM'),
(2, 2, 'Fullstack Mobile', 'Fulltime', 'Jakarta', 'Saya asuna, Best Partner Kananto', NULL, 'talent_image-1606007291343.jpg', NULL, 'Sunday, November 22, 2020 8:08 AM'),
(3, 4, 'Android Developer', 'Freelance', 'Bandung', 'Lorem ipsum dolor sit amet', NULL, 'talent_image-1606007601407.jpg', NULL, 'Sunday, November 22, 2020 8:13 AM'),
(4, 6, 'Devops Engineer', 'Freelance', 'Bandung', 'Hajimemashite watashi wa hoshou marine desu..', NULL, 'talent_image-1606007896539.png', NULL, 'Sunday, November 22, 2020 8:18 AM'),
(5, 8, 'Fullstack Web', 'Fulltime', 'Jakarta', 'Lorem ipsum dolor sit amed', NULL, 'talent_image-1606060265625.jpg', NULL, 'Sunday, November 22, 2020 10:51 PM'),
(6, 11, 'Fullstack Web', 'Freelance', 'Tokyo', 'I AM ', NULL, '', NULL, 'Sunday, November 22, 2020 11:35 PM'),
(7, 12, 'Fullstack Web', 'Freelance', 'Tokyo', 'I AM ', NULL, 'talent_image-1606062781204.png', NULL, 'Sunday, November 22, 2020 11:33 PM'),
(8, 13, 'Fullstack Web', 'Freelance', 'Tokyo', 'I AM ', NULL, 'talent_image-1606062778150.png', NULL, 'Sunday, November 22, 2020 11:32 PM'),
(9, 14, 'Fullstack Web', 'Freelance', 'Tokyo', 'I AM ', NULL, 'talent_image-1606062774855.png', NULL, 'Sunday, November 22, 2020 11:32 PM'),
(10, 15, 'Fullstack Web', 'Fulltime', 'Tokyo', 'I AM ', NULL, 'talent_image-1606062743972.png', NULL, 'Sunday, November 22, 2020 11:32 PM'),
(11, 16, 'Fullstack Web', 'Fulltime', 'Tokyo', 'I AM ', NULL, 'talent_image-1606062739698.png', NULL, 'Sunday, November 22, 2020 11:32 PM'),
(12, 17, 'Fullstack Web', 'Fulltime', 'Tokyo', 'I AM ', NULL, 'talent_image-1606062730135.png', NULL, 'Sunday, November 22, 2020 11:32 PM'),
(13, 18, 'Fullstack Web', 'Freelance', 'Tokyo', 'Nothing last forever', NULL, '', NULL, 'Monday, November 23, 2020 2:36 PM');

-- --------------------------------------------------------

--
-- Table structure for table `talentskill`
--

CREATE TABLE `talentskill` (
  `skillID` int(11) NOT NULL,
  `talentID` int(11) DEFAULT NULL,
  `skill_1` varchar(15) DEFAULT NULL,
  `skill_2` varchar(20) DEFAULT NULL,
  `skill_3` varchar(20) DEFAULT NULL,
  `skill_4` varchar(20) DEFAULT NULL,
  `skill_5` varchar(20) DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talentskill`
--

INSERT INTO `talentskill` (`skillID`, `talentID`, `skill_1`, `skill_2`, `skill_3`, `skill_4`, `skill_5`, `updatedAt`) VALUES
(1, 1, 'Kotlin', 'Java', 'HTML', 'CSS', 'JavaScript', 'Sunday, November 15, 2020 9:52 PM'),
(2, 2, 'HTML', 'CSS', 'JavaScript', 'React', 'React Natve', 'Sunday, November 15, 2020 9:52 PM'),
(3, 3, 'Java', 'Kotlin', 'Node Js', 'JavaScript', 'React Native', 'Thursday, November 19, 2020 11:27 PM'),
(4, 4, 'Javascript', 'React Native', 'HTML ', 'CSS', 'Python', 'Sunday, November 22, 2020 6:51 AM'),
(5, 5, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 9:26 AM'),
(6, 6, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:35 PM'),
(7, 7, 'Angular', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:36 PM'),
(8, 8, 'HTML & CSS', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:36 PM'),
(9, 9, 'React', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:36 PM'),
(10, 10, 'Vue', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:36 PM'),
(11, 11, 'MongoDB', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:37 PM'),
(12, 12, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 11:37 PM'),
(13, 13, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Monday, November 23, 2020 2:23 PM');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `account`
--
ALTER TABLE `account`
  ADD PRIMARY KEY (`accountID`);

--
-- Indexes for table `achivement`
--
ALTER TABLE `achivement`
  ADD PRIMARY KEY (`achivementID`),
  ADD KEY `talentID` (`talentID`);

--
-- Indexes for table `company`
--
ALTER TABLE `company`
  ADD PRIMARY KEY (`companyID`),
  ADD KEY `accountID` (`accountID`);

--
-- Indexes for table `companyproject`
--
ALTER TABLE `companyproject`
  ADD PRIMARY KEY (`projectID`);

--
-- Indexes for table `hiring`
--
ALTER TABLE `hiring`
  ADD PRIMARY KEY (`offeringID`),
  ADD KEY `projectID` (`projectID`);

--
-- Indexes for table `talent`
--
ALTER TABLE `talent`
  ADD PRIMARY KEY (`talentID`),
  ADD KEY `accountID` (`accountID`);

--
-- Indexes for table `talentskill`
--
ALTER TABLE `talentskill`
  ADD PRIMARY KEY (`skillID`),
  ADD KEY `talentID` (`talentID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `account`
--
ALTER TABLE `account`
  MODIFY `accountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `achivement`
--
ALTER TABLE `achivement`
  MODIFY `achivementID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `companyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `companyproject`
--
ALTER TABLE `companyproject`
  MODIFY `projectID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `hiring`
--
ALTER TABLE `hiring`
  MODIFY `offeringID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `talent`
--
ALTER TABLE `talent`
  MODIFY `talentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `talentskill`
--
ALTER TABLE `talentskill`
  MODIFY `skillID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `achivement`
--
ALTER TABLE `achivement`
  ADD CONSTRAINT `achivement_ibfk_1` FOREIGN KEY (`talentID`) REFERENCES `talent` (`talentID`);

--
-- Constraints for table `company`
--
ALTER TABLE `company`
  ADD CONSTRAINT `company_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`);

--
-- Constraints for table `hiring`
--
ALTER TABLE `hiring`
  ADD CONSTRAINT `hiring_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `companyproject` (`projectID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `talent`
--
ALTER TABLE `talent`
  ADD CONSTRAINT `talent_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `talentskill`
--
ALTER TABLE `talentskill`
  ADD CONSTRAINT `talentskill_ibfk_1` FOREIGN KEY (`talentID`) REFERENCES `talent` (`talentID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
