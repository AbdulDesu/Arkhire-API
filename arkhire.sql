-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 22, 2020 at 06:05 AM
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
(10, 'Bronya ', 'Bronya@mihoyo.com', '67858542178', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 1, 'Sunday, November 22, 2020 4:35 AM', 'Sunday, November 22, 2020 4:35 AM');

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
(1, 1, 'https://localhost:300', ''),
(2, 2, 'https://localhost:300', ''),
(3, 3, 'https://localhost:300', ''),
(4, 4, 'https://localhost:300', ''),
(5, 5, 'https://localhost:300', 'talent_cv-1606011781199.jpg');

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `companyID` int(11) NOT NULL,
  `accountID` int(11) DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `company_position` varchar(80) DEFAULT NULL,
  `company_location` varchar(10) DEFAULT NULL,
  `company_type` varchar(20) DEFAULT NULL,
  `company_detail` varchar(300) DEFAULT NULL,
  `company_image` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`companyID`, `accountID`, `company_name`, `company_position`, `company_location`, `company_type`, `company_detail`, `company_image`, `updatedAt`) VALUES
(1, 3, 'Code With Theresa', 'Director', 'Bandung', 'Software', 'Code with theresa is the company who...', 'company_image-1606009544762.png', 'Sunday, November 22, 2020 8:45 AM'),
(2, 5, 'Hololive', 'Director', 'Tokyo', 'Entertaiment', 'Hololive merupakan sebuah perusahaan ...', 'company_image-1606009556872.jpg', 'Sunday, November 22, 2020 8:45 AM'),
(3, 7, 'Moontoon', 'CEO', 'Chinese', 'Mobile Apps', 'Moontoon merupakan perusahaan yang bergerak di bidang pengembangan game..', 'company_image-1606009572322.jpg', 'Sunday, November 22, 2020 8:46 AM'),
(4, 9, NULL, NULL, NULL, NULL, NULL, 'company_image-1606009498453.jpg', 'Sunday, November 22, 2020 8:44 AM'),
(5, 10, 'Mihoyo', 'CEO', 'Japan', 'Game Development', 'Mihoyo is company who dedicate to..', 'company_image-1606009593220.jpg', 'Sunday, November 22, 2020 8:46 AM');

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
(1, 'Create Hyperion Absent Apps', '1 WEEK', 'Make A Automatic absent for hyperion employee', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', '3000000', 'Saturday, November 21, 2020 10:34 AM', 'Saturday, November 21, 2020 10:34 AM'),
(2, 'Create Hololive Website', '1 WEEK', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', '8000000', 'Saturday, November 21, 2020 5:46 PM', 'Saturday, November 21, 2020 5:46 PM'),
(4, 'Create A Hololive Visual Novel Game', '1 MONTH', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', '12000000', 'Sunday, November 22, 2020 7:15 AM', 'Sunday, November 22, 2020 9:32 AM'),
(5, 'Update our Deep Fake Tech', '3 MONTH', 'In this project, we invite you to contribute on our...', 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet', '14000000', 'Sunday, November 22, 2020 9:31 AM', 'Sunday, November 22, 2020 9:31 AM');

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
(5, 5, 'Declined', 'Thank for invite me, I am ready to become your employee', 'Sunday, November 22, 2020 9:33 AM');

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
  `talent_image` text DEFAULT NULL,
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talent`
--

INSERT INTO `talent` (`talentID`, `accountID`, `talent_tittle`, `talent_time`, `talent_city`, `talent_profile`, `talent_image`, `updatedAt`) VALUES
(1, 1, 'Fullstack Web', 'Fulltime', 'Jakarta', 'Saya Kirito, Si Jago Javascript', 'talent_image-1606006786067.jpg', 'Sunday, November 22, 2020 7:59 AM'),
(2, 2, 'Fullstack Mobile', 'Fulltime', 'Jakarta', 'Saya asuna, Best Partner Kananto', 'talent_image-1606007291343.jpg', 'Sunday, November 22, 2020 8:08 AM'),
(3, 4, 'Android Developer', 'Freelance', 'Bandung', 'Lorem ipsum dolor sit amet', 'talent_image-1606007601407.jpg', 'Sunday, November 22, 2020 8:13 AM'),
(4, 6, 'Devops Engineer', 'Freelance', 'Bandung', 'Hajimemashite watashi wa hoshou marine desu..', 'talent_image-1606007896539.png', 'Sunday, November 22, 2020 8:18 AM'),
(5, 8, 'Fullstack Web', 'Fulltime', 'Jakarta', 'Lorem ipsum dolor sit amed', 'talent_image-1606008707295.jpg', 'Sunday, November 22, 2020 8:31 AM');

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
(5, 5, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', 'Sunday, November 22, 2020 9:26 AM');

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
  MODIFY `accountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `achivement`
--
ALTER TABLE `achivement`
  MODIFY `achivementID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `companyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `companyproject`
--
ALTER TABLE `companyproject`
  MODIFY `projectID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `hiring`
--
ALTER TABLE `hiring`
  MODIFY `offeringID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `talent`
--
ALTER TABLE `talent`
  MODIFY `talentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `talentskill`
--
ALTER TABLE `talentskill`
  MODIFY `skillID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

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
