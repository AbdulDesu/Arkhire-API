-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 13, 2021 at 08:44 AM
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
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `account`
--

INSERT INTO `account` (`accountID`, `account_name`, `account_email`, `account_phone`, `password`, `privilege`, `createdAt`, `updatedAt`) VALUES
(1, 'Kirigaya Kazuto', 'Kirito@gmail.com', '082121123456', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 0, '0000-00-00 00:00:00', 'Wednesday, November 18, 2020 1:46 PM'),
(2, 'Yuuki Asuna', 'Asuna@gmail.com', '082121123', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 0, '0000-00-00 00:00:00', 'Wednesday, November 18, 2020 1:44 PM'),
(3, 'Theresa', 'Theresa@gmail.com', '089119119119', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 1, '0000-00-00 00:00:00', 'Monday, November 16, 2020 7:10 AM'),
(4, 'Watson Amelia', 'WatsonAmelia@hololive.jp', '085156069757', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 0, '0000-00-00 00:00:00', 'Saturday, November 21, 2020 10:28 AM'),
(5, 'Yagoo', 'Yagoo@hololive.jp', '085156069757', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 1, '0000-00-00 00:00:00', 'Thursday, November 19, 2020 6:42 PM'),
(6, 'Houshou Marine', 'Marine@hololive.jp', '082488877124', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 0, '0000-00-00 00:00:00', 'Saturday, November 21, 2020 3:04 PM'),
(7, 'Xu Zenhua', 'XuZenhua@moonton.com', '6785854217', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 1, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 8:05 AM'),
(8, 'Moona Hoshinova', 'Moonafik@hololive.id', '082488515178', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 0, '0000-00-00 00:00:00', 'Friday, January 1, 2021 4:43 AM'),
(9, 'Sirius Aldebaran', 'SizAldebaran@gmail.com', '085156068757', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 991399361, '0000-00-00 00:00:00', 'Friday, January 1, 2021 4:44 AM'),
(10, 'Bronya ', 'Bronya@mihoyo.com', '67858542178', '$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u', 1, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 4:35 AM'),
(11, 'Tokino sora', 'Tokino sora@hololive.jp', '082488515178', '$2b$10$gOTsuzQ.eBjuJKdpQw0.OeUiwDcJoOswra0.J6Wvvq52PFfJ6fn5G', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:23 PM'),
(12, 'Shirakami Fubuki', 'Fubuki@hololive.jp', '082488515178', '$2b$10$COp18JC6pJKHWPpbI5F78.GccV6KuPCi9MLgno11g2CvBor.UfIAO', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:23 PM'),
(13, 'Natsuiro Matsuri', 'Natsuiro@hololive.jp', '082488515178', '$2b$10$25vgYOaVqY2i7vlgGJ1z7Owi596npE7y0SoNfFVSRJezZ//KgIaly', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:24 PM'),
(14, 'Minato Aqua', 'Aqua@hololive.jp', '082488515178', '$2b$10$JuwQyAc53L9Y9gUDnr2O8.fg7U/qU0KtsviipDSbGUSbrFGf1Z26u', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:24 PM'),
(15, 'Murasaki shion', 'Shion@hololive.jp', '082488515178', '$2b$10$Xf.UFsmHBIghZzUz7/oCX.0I5b9BpX3cudBl8SUDXk5SofZnOo.wa', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:25 PM'),
(16, 'Inugami Korone', 'Korone@hololive.jp', '082488515178', '$2b$10$XR52jnLqiBKmewED28Ud9uvCHO45gO0dHKn5mgUeTZ42lrbX4YhA6', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:25 PM'),
(17, 'Nekomata Okayu', 'Okayu@hololive.jp', '082488515178', '$2b$10$qOy2s/V8xGA3tvLx5c5WR.bdx3rJ56h9xbhZci8xSiNEg9rxWwxWe', 0, '0000-00-00 00:00:00', 'Sunday, November 22, 2020 11:26 PM'),
(18, 'Alucard', 'Heynotbad@gmail.com', '082488515178', '$2b$10$DW1TRxlzSRJTXSsg/97dbe2rN/aog3AznpwASsEMwtiPz.uH9mSvi', 0, '0000-00-00 00:00:00', 'Monday, November 23, 2020 2:10 PM'),
(19, 'Usada Pekora', 'UsadaPekora@hololive.jp', '08785151123', '$2b$10$3dT8p/8Vr5xgjFDPb21SpOZmOgFDjadvL0rE3IU/GxCC59iX910X.', 0, '0000-00-00 00:00:00', ''),
(20, 'Hitotsuyanagi Riri', 'hitotsuyanagi.riri@gardens.com', '02287898212', '$2b$10$.GbGDBVtUJuWF.kjRAho/.XVO1Wf/q8mjlPRpFCQpaNRknGWSR2CO', 1, '0000-00-00 00:00:00', ''),
(21, 'admin', 'admin@gmail.com', '0222121123', '$2b$10$Ru.j/kMxPx0/WdGizuDaBOiuIAIf4qEeMAoJYKhNXD5RHZ0oFyt9S', 991399361, '0000-00-00 00:00:00', 'Saturday, January 2, 2021 10:40 PM'),
(22, 'Gawr Gura', 'GawrGura@hololive.en', '0821211234', '$2b$10$X2zWYFnP8TsESXbsEY0uTeWBYiKI.UBDGxMxlvcw.gSWAMf77wxRK', 0, '2021-01-06 11:04:25', NULL),
(23, 'Einstein Torus', 'einstein.torus@gmail.com', '0224851212', '$2b$10$Ruu1LE2CsZms7AWU133St.JJnSZnbROzGdwQb1DxMMlQtyQZSfUKW', 1, '2021-01-06 11:04:25', NULL);

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
(3, 3, 'WatsonAmelia', 'talent_cv-1609813882687.jpg'),
(4, 4, 'https://localhost:3000', 'talent_cv-1606060165176.jpg'),
(5, 5, 'https://localhost:3000', 'talent_cv-1606060176042.jpg'),
(6, 6, 'https://localhost:3000', 'talent_cv-1606063107795.jpg'),
(7, 7, 'https://localhost:3000', 'talent_cv-1606063115891.jpg'),
(8, 8, 'https://localhost:3000', 'talent_cv-1606063122254.jpg'),
(9, 9, 'https://localhost:3000', 'talent_cv-1606063129069.jpg'),
(10, 10, 'https://localhost:3000', 'talent_cv-1606063139387.jpg'),
(11, 11, 'https://localhost:3000', 'talent_cv-1606063154365.jpg'),
(12, 12, 'https://localhost:3000', 'talent_cv-1606063210447.jpg'),
(13, 13, 'https://localhost:3000', 'talent_cv-1606116155962.jpg'),
(14, 14, 'GawrGura', 'talent_cv-1609813953483.jpg'),
(15, 15, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `company`
--

CREATE TABLE `company` (
  `companyID` int(11) NOT NULL,
  `accountID` int(11) DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `company_position` varchar(80) DEFAULT NULL,
  `company_location` text DEFAULT NULL,
  `company_latitude` text DEFAULT NULL,
  `company_longitude` text DEFAULT NULL,
  `company_type` varchar(20) DEFAULT NULL,
  `company_detail` varchar(300) DEFAULT NULL,
  `company_linkedin` text DEFAULT NULL,
  `company_instagram` text DEFAULT NULL,
  `company_facebook` text DEFAULT NULL,
  `company_image` text DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `company`
--

INSERT INTO `company` (`companyID`, `accountID`, `company_name`, `company_position`, `company_location`, `company_latitude`, `company_longitude`, `company_type`, `company_detail`, `company_linkedin`, `company_instagram`, `company_facebook`, `company_image`, `updatedAt`) VALUES
(1, 3, 'Code With Theresa', 'Director', 'Jawa Barat', '-6.9175', '107.6191', 'Startup', 'Code with theresa is the company who...', NULL, NULL, NULL, 'company_image-1609608345651.jpg', '0000-00-00 00:00:00'),
(2, 5, 'Hololive', 'Director', 'Chiba', '35.6804', '139.7690', 'Enterprise', 'Hololive Production adalah proyek agensi Vtuber yang berasal dari Jepang yang dikembangkan oleh COVER Corporation. Hololive awalnya beroperasi di Jepang, kemudian memperluas wilayah operasinya ke China dan Indonesia.', NULL, 'https://www.instagram.com/hololive_/', 'https://web.facebook.com/hololivetv', 'company_image-1606009556872.jpg', '0000-00-00 00:00:00'),
(3, 7, 'Moontoon', 'CEO', 'Beijing', '39.9042', '116.4074', 'Enterprise', 'Moonton, sebelumnya YoungJoy Technology Pte. Ltd., kemudian Shanghai Moonton Technology Co. Ltd. adalah pengembang dan penerbit video game China yang berbasis di Shanghai, China .. Didirikan pada bulan April 2014, perusahaan ini terkenal dengan game arena pertempuran online multipemain seluler', 'https://www.linkedin.com/company/shanghai-moonton-technology-co-ltd/', NULL, NULL, 'company_image-1606009572322.jpg', '0000-00-00 00:00:00'),
(4, 9, 'Nijisanji ID', 'Director', 'Jakarta Pusat', '-6.1754', '106.8272', 'Startup', 'Nijisanji adalah proyek VTuber atau Virtual Liver yang berasal dari Jepang dan dikembangkan oleh Ichikara Inc. Pada April 2020, terdapat lebih dari 100 VTuber anggota Nijisanji yang aktif melakukan berbagai kegiatan di platform streaming video Youtube.', NULL, 'https://www.instagram.com/nijisanji_id', 'https://web.facebook.com/nijisanji.indonesia', 'company_image-1609683201011.jpg', '0000-00-00 00:00:00'),
(5, 10, 'Mihoyo', 'CEO', 'Tiongkok', '31.2304', '121.4737', 'Enterprise', 'miHoYo adalah studio animasi dan pengembangan video game Cina yang berbasis di Shanghai, Cina. Perusahaan ini didirikan pada 2012 oleh tiga mahasiswa dari Universitas Shanghai Jiao Tong dan, pada 2020, mempekerjakan lebih dari 1.500 orang', 'https://www.linkedin.com/company/mihoyo-co-ltd-/', 'https://www.instagram.com/mihoyo_jp', 'https://web.facebook.com/miHoYogames', 'company_image-1609683242682.jpg', '0000-00-00 00:00:00'),
(6, 20, 'Lily Gardens', 'CEO', 'Jawa Timur', '-37.1052', '-12.2777', 'Software House', 'Garden is a training facility that CHARM users have established in order to help combat humanity in the Assault Lily Bouquet anime, Assault Lily novel and Assault Lily toyline. It also functions as a military training high school with high school education. ', NULL, NULL, NULL, 'company_image-1609684159848.png', '2021-01-06 11:02:43'),
(8, 23, 'Torus Bilogic Lab', 'R&D', 'Jakarta Selatan', '-7.005636666666667', '107.8615', 'Enterprise', 'We develop and deploy machine learning and artificial intelligence solutions, leveraging shape analytics approaches to enhance state-of-the-art methodologies.', 'thinktorus', '', '', 'company_image-1610290932462.jpg', '2021-01-06 11:02:43');

-- --------------------------------------------------------

--
-- Table structure for table `companycontributor`
--

CREATE TABLE `companycontributor` (
  `contributorID` int(11) NOT NULL,
  `participator_owner` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companycontributor`
--

INSERT INTO `companycontributor` (`contributorID`, `participator_owner`) VALUES
(1, 1),
(2, 2),
(7, 5),
(8, 11),
(9, 12),
(11, 16);

-- --------------------------------------------------------

--
-- Table structure for table `companyproject`
--

CREATE TABLE `companyproject` (
  `projectID` int(11) NOT NULL,
  `project_tittle` varchar(100) DEFAULT NULL,
  `project_duration` varchar(50) DEFAULT NULL,
  `project_desc` varchar(500) DEFAULT NULL,
  `project_sallary` varchar(25) DEFAULT NULL,
  `project_owner` int(11) NOT NULL,
  `postedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `companyproject`
--

INSERT INTO `companyproject` (`projectID`, `project_tittle`, `project_duration`, `project_desc`, `project_sallary`, `project_owner`, `postedAt`) VALUES
(1, 'Create Hyperion Absent Apps', '1 WEEK', 'Make A Automatic absent for hyperion employee', 'Rp. 3.000.000', 1, '0000-00-00 00:00:00'),
(2, 'Create Hololive Website', '1 WEEK', 'In this project, we invite you to contribute on our...', 'Rp. 8.000.000', 2, '0000-00-00 00:00:00'),
(5, 'Update our Deep Fake Tech', '3 MONTH', 'In this project, we invite you to contribute on our...', 'Rp. 14.000.000', 4, '0000-00-00 00:00:00'),
(11, 'Lily Gardens Api', '2 Month', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Rp.  8.000.000', 6, '2021-01-06 10:21:13'),
(12, 'E-Wallet Torus Apps', '6 MONTH', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Rp. 16.000.000', 8, '2021-01-06 10:23:05'),
(17, 'Genshin Impact Moefication', '6 MONTH', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.', 'Rp. 9.000.000', 8, '2021-01-12 14:55:30');

-- --------------------------------------------------------

--
-- Table structure for table `hiring`
--

CREATE TABLE `hiring` (
  `offeringID` int(11) NOT NULL,
  `projectID` int(11) NOT NULL,
  `offering_owner` int(11) NOT NULL,
  `hiring_status` enum('Waiting','Approved','Declined') NOT NULL DEFAULT 'Waiting',
  `reply_message` varchar(250) DEFAULT NULL,
  `repliedAt` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `hiring`
--

INSERT INTO `hiring` (`offeringID`, `projectID`, `offering_owner`, `hiring_status`, `reply_message`, `repliedAt`) VALUES
(1, 2, 15, 'Approved', 'Thank you for adding me to your project sir, I appreciate it', '0000-00-00 00:00:00'),
(2, 2, 15, 'Waiting', 'Sorry, I am in other busy project', '0000-00-00 00:00:00'),
(5, 5, 15, 'Declined', 'Sorry Sir, I can accept your offering project. Because that\'s quest is very difficult for me', '0000-00-00 00:00:00'),
(11, 17, 15, 'Waiting', NULL, '2021-01-06 10:29:27'),
(12, 17, 10, 'Waiting', NULL, '2021-01-06 10:29:27'),
(16, 17, 14, 'Waiting', NULL, '2021-01-13 02:55:43');

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
  `talent_profile` varchar(480) DEFAULT NULL,
  `talent_github` text DEFAULT NULL,
  `talent_image` text DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talent`
--

INSERT INTO `talent` (`talentID`, `accountID`, `talent_tittle`, `talent_time`, `talent_city`, `talent_profile`, `talent_github`, `talent_image`, `updatedAt`) VALUES
(1, 1, 'Fullstack Web', 'Fulltime', 'Jakarta', 'Kirito was chosen to be one of the one thousand beta testers for the closed beta of Sword Art Online, the first ever Virtual Reality Massively Multiplayer Online Role-Playing Game VRMMORPG for the NerveGear, and later joined the official version of the game. He thus became one of the 10,000 players who were trapped in Sword Art Online, where he remained a solo player for the majority of the game.', NULL, 'talent_image-1609646981943.jpg', '0000-00-00 00:00:00'),
(2, 2, 'Fullstack Mobile', 'Fulltime', 'Jakarta', 'asuna is a kind and helpful young woman who, similarly to Kirito, cannot abandon another in trouble. She takes the game very seriously and is determined to clear it before Kirito tells her to enjoy SAO a bit. Asuna is also somewhat proud and despite her kind personality, she will not hesitate to get physical with those that challenge her authority or make fun of her abilities, such as cooking.', NULL, 'talent_image-1606007291343.jpg', '0000-00-00 00:00:00'),
(3, 4, 'Android Developer', 'Freelance', 'Bandung', 'Amelia is a rather expressive girl who is often seen mingling or teasing her fellow holomyth members mostly Gura. She is usually kind, supportive, and sweet as shown when she often willingly helps the bonehead Gura in Minecraft and is furthermore expressed when she frequently watches her fellow members\' streams whenever she is available \nshe even ended her own stream just to watch Kiara\'s stream once.', NULL, 'talent_image-1609646444166.png', '0000-00-00 00:00:00'),
(4, 6, 'Devops Engineer', 'Freelance', 'Bandung', 'Marine is a bold, fast-talking girl who often throws caution to the wind, making obscene jokes and playfully mocking both her higher-ups and her viewers. She often struggles to keep her lewdness in check, and openly lusts after fictional female characters. According to her backstory, she loves money, jewels and treasure, and decided to become a VTuber to get money to buy her own ship. As such, Marine is officially a cosplayer and not a real pirate.', NULL, 'talent_image-1606007896539.png', '0000-00-00 00:00:00'),
(5, 8, 'Fullstack Web', 'Fulltime', 'Jakarta', 'Moona is a shy girl, which is the opposite of her image of a flat faced college girl despite the fact she still speaks in an upbeat tone and a rather unique Indonesia accent. Like Tsunomaki Watame, she loves to bob and weave her head and body around. She worked as a fashion model before showing an interest in joining hololive. She loves to shitpost on Twitter while trying to connect with her fans.', NULL, 'talent_image-1606060265625.jpg', '0000-00-00 00:00:00'),
(6, 11, 'Devops Engineer', 'Freelance', 'Tokyo', 'Tokino Sora was born on 15 May 2000 in Tokyo. She is an easy-going, happy and comforting person whose personality has led many fans to call her Tokino Sora Mama because of her motherly attitude. Within hololive, she is the member who most closely fits the image of a proper idol, since most of the other members have become infamous for causing mayhem and goofing off.', NULL, 'talent_image-1609647248000.png', '0000-00-00 00:00:00'),
(7, 12, 'Devops Engineer', 'Freelance', 'Bali', 'Fubuki is usually always cheerful and excited, singing little songs and making many in-jokes. She is shy when confronted with new circumstances, and when embarrassed she hides at the bottom of the screen with only her fox ears peeking up. She becomes enthralled in games and has cute conversations with scripted game characters, or voice acts as characters while making effects.', NULL, 'talent_image-1609685787243.jpg', '0000-00-00 00:00:00'),
(8, 13, 'Fullstack Mobile', 'Freelance', 'Tokyo', 'Matsuri is an energetic, expressive, and sometimes chaotic cheerleader girl who is bubbly as a festival. She is known for certain viral moments like wearing band-aids to school instead of bras,posting her own take of a popular internet copypasta video on Shirakami Fubuki\'s Twitter, and groping other members off-camera (including Hoshimachi Suisei, Shirogane Noel, and Murasaki Shion, among others).', NULL, 'talent_image-1609685919276.jpg', '0000-00-00 00:00:00'),
(9, 14, 'Android Developer', 'Freelance', 'Bandung', 'Aqua is a bumbling airhead who somehow manages to become the victim of every joke in which she gets involved. She is also childish and prone to throwing tantrums, smashing her keyboard, and hyperventilating when things don\'t go as planned (which is most of the time). She enjoys playing pranks and causing mischief, but it almost always backfires because of a combination of poor planning and bad luck.', NULL, 'talent_image-1609685204974.jpg', '0000-00-00 00:00:00'),
(10, 15, 'Fullstack Mobile', 'Fulltime', 'Tokyo', 'Shion is a smug, cheeky brat kusogaki who speaks bluntly without the usual politeness/consideration associated with the Japanese language, and flirts shamelessly with other hololive members. She wants to be seen as an adult, but thanks to her childish appearance and mannerisms, all attempts by Shion to appear adult-like end up looking very silly.', NULL, 'talent_image-1610298118650.png', '0000-00-00 00:00:00'),
(11, 16, 'Android Developer', 'Fulltime', 'Tokyo', 'Korone has a sweet and goofy personality comparable to that of an actual dog. She often kisses other hololive members for no reason, and has a high-pitched laugh that resembles a train whistle or flute. Like most dogs, Korone is fiercely loyal, specifically to Nekomata Okayu. The two are rarely seen apart, and the pair is known as OkaKoro.', NULL, 'talent_image-1609685381149.jpg', '0000-00-00 00:00:00'),
(12, 17, 'Android Developer', 'Fulltime', 'Yogyakarta', 'Okayu is typically very relaxed, free-spirited, and also somewhat of a playboy. She sometimes flirts openly with other hololive members just to see their reactions and is also known for impulsively swiping food. She never denies her wrongdoings and was handed a guilty verdict in several Okayu Court cases, after which she obediently served her sentence.', NULL, 'talent_image-1609685641490.jpg', '0000-00-00 00:00:00'),
(13, 18, 'Fullstack Mobile', 'Freelance', 'Bali', 'The last great war is a glorious memory for the Moniyans. The powerful Light\'s Order, together with the Imperial Border Guards, wiped out the demonic strongholds at the Moniyan and Barren Lands pass, driving the fiends back to the hinterlands of the Forsaken Wastes. But for young Alucard, the war was nothing but a terrible memory of pain and misery. His father\'s second regiment suffered heavy losses due to a rash lone advance.\n', NULL, 'talent_image-1609647189998.jpg', '0000-00-00 00:00:00'),
(14, 19, 'Fullstack Web', 'Freelance', 'Jakarta', 'Pekora hails from the nation of Pekoland, where she claims she is a member of royalty. While not much is currently known about Pekoland, it is assumed that its denizens are, like Pekora, Animals humans with rabbit-ears and comparatively long lifespans, and that the rabbit-motif apparent in Pekora\'s fashion and accessories is significant to their culture. According to Pekora, peko is the only word in the Pekolandish language.', NULL, 'talent_image-1609671727008.jpg', NULL),
(15, 22, 'Devops Engineer', 'Freelance', 'Jakarta', 'Gura is friendly and readily likeable, and often amuses with foolish antics. She has difficulty telling left from right once sent the entire hololive EN digging for 20 minutes in the wrong direction because she misread a map often misspells and mispronounces words.', NULL, 'talent_image-1610279104224.jpg', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `talentexperience`
--

CREATE TABLE `talentexperience` (
  `experienceID` int(11) NOT NULL,
  `experience_owner` int(11) NOT NULL,
  `experience_title` varchar(50) DEFAULT NULL,
  `experience_source` varchar(100) DEFAULT NULL,
  `experience_start` varchar(4) DEFAULT NULL,
  `experience_end` varchar(4) DEFAULT NULL,
  `experience_desc` text DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talentexperience`
--

INSERT INTO `talentexperience` (`experienceID`, `experience_owner`, `experience_title`, `experience_source`, `experience_start`, `experience_end`, `experience_desc`, `updatedAt`) VALUES
(2, 22, 'Minercraft Contributor', 'Mojang.inc', '2019', '2020', 'Contributor mojang, fixing bug and do the application testing', '2021-01-06 13:23:29'),
(3, 22, 'Hololive 2nd Generation Talent', 'Hololive English', '2019', '2019', 'Become Hololive 2nd talent', '2021-01-06 13:52:00'),
(4, 19, 'Software Engineer', 'Hololive English', '2018', '2020', 'Become Software engineer, who handle all talent of hololive en member', '2021-01-06 14:29:06'),
(5, 19, 'Hololive Talent', '', '', '', 'Done', NULL),
(6, 19, 'Content Creator', 'Pekora Ch', '2020', '2021', 'Done', NULL),
(7, 19, 'Minecraft Player', 'Mojang.Inc', '2020', '2020', '', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `talentportfolio`
--

CREATE TABLE `talentportfolio` (
  `portfolioID` int(11) NOT NULL,
  `portfolio_owner` int(11) NOT NULL,
  `portfolio_title` varchar(100) DEFAULT NULL,
  `portfolio_desc` text DEFAULT NULL,
  `portfolio_repository` text DEFAULT NULL,
  `portfolio_image` text DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talentportfolio`
--

INSERT INTO `talentportfolio` (`portfolioID`, `portfolio_owner`, `portfolio_title`, `portfolio_desc`, `portfolio_repository`, `portfolio_image`, `updatedAt`) VALUES
(1, 19, 'Hololive Channel', 'Making a hololive channel youtube for me', NULL, 'portfolio_image-1610207920546.jpg', '2021-01-06 15:32:49'),
(2, 22, 'Hololive Talent Api', 'Making APi for manage all of hololive gen member', NULL, 'portfolio_image-1610007214128.jpg', '2021-01-06 15:32:49'),
(3, 20, 'Hololive chat streamsss', 'asd', NULL, 'portfolio_image-1610007398355.jpg', '2021-01-07 08:16:38'),
(5, 19, 'Hololive Talent Sound Changer', 'test', NULL, 'portfolio_image-1610241614448.jpg', NULL),
(6, 19, 'Cyber HotDog', 'test', NULL, 'portfolio_image-1610241783675.jpg', '2021-01-10 01:23:06'),
(10, 19, 'Human Task Manager', 'Manage Human Task Easly', '', 'portfolio_image-1610252989675.jpg', '2021-01-10 04:29:52');

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
  `updatedAt` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `talentskill`
--

INSERT INTO `talentskill` (`skillID`, `talentID`, `skill_1`, `skill_2`, `skill_3`, `skill_4`, `skill_5`, `updatedAt`) VALUES
(1, 1, 'Kotlin', 'Java', 'HTML', 'CSS', 'JavaScript', '0000-00-00 00:00:00'),
(2, 2, 'HTML', 'CSS', 'JavaScript', 'React', 'React Natve', '0000-00-00 00:00:00'),
(3, 3, 'Kotlin', 'React', 'Java', 'Laravel', 'Python', '0000-00-00 00:00:00'),
(4, 4, 'Javascript', 'React Native', 'HTML ', 'CSS', 'Python', '0000-00-00 00:00:00'),
(5, 5, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(6, 6, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(7, 7, 'Angular', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(8, 8, 'HTML & CSS', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(9, 9, 'React', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(10, 10, 'Vue', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(11, 11, 'MongoDB', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(12, 12, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(13, 13, 'Laravel', 'React Native', 'Javascript', 'Kotlin', 'Python', '0000-00-00 00:00:00'),
(14, 14, 'Kotlin', 'React', 'Java', 'Laravel', 'Python', '0000-00-00 00:00:00'),
(15, 15, 'Golang', 'Java', 'React', 'Kotlin', 'Python', NULL);

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
-- Indexes for table `companycontributor`
--
ALTER TABLE `companycontributor`
  ADD PRIMARY KEY (`contributorID`),
  ADD KEY `participator_name` (`participator_owner`);

--
-- Indexes for table `companyproject`
--
ALTER TABLE `companyproject`
  ADD PRIMARY KEY (`projectID`),
  ADD KEY `project_owner` (`project_owner`);

--
-- Indexes for table `hiring`
--
ALTER TABLE `hiring`
  ADD PRIMARY KEY (`offeringID`),
  ADD KEY `projectID` (`projectID`),
  ADD KEY `offering_owner` (`offering_owner`);

--
-- Indexes for table `talent`
--
ALTER TABLE `talent`
  ADD PRIMARY KEY (`talentID`),
  ADD KEY `accountID` (`accountID`);

--
-- Indexes for table `talentexperience`
--
ALTER TABLE `talentexperience`
  ADD PRIMARY KEY (`experienceID`),
  ADD KEY `experience_owner` (`experience_owner`);

--
-- Indexes for table `talentportfolio`
--
ALTER TABLE `talentportfolio`
  ADD PRIMARY KEY (`portfolioID`),
  ADD KEY `portfolio_owner` (`portfolio_owner`);

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
  MODIFY `accountID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT for table `achivement`
--
ALTER TABLE `achivement`
  MODIFY `achivementID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `company`
--
ALTER TABLE `company`
  MODIFY `companyID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `companycontributor`
--
ALTER TABLE `companycontributor`
  MODIFY `contributorID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT for table `companyproject`
--
ALTER TABLE `companyproject`
  MODIFY `projectID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT for table `hiring`
--
ALTER TABLE `hiring`
  MODIFY `offeringID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `talent`
--
ALTER TABLE `talent`
  MODIFY `talentID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT for table `talentexperience`
--
ALTER TABLE `talentexperience`
  MODIFY `experienceID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `talentportfolio`
--
ALTER TABLE `talentportfolio`
  MODIFY `portfolioID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `talentskill`
--
ALTER TABLE `talentskill`
  MODIFY `skillID` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
-- Constraints for table `companycontributor`
--
ALTER TABLE `companycontributor`
  ADD CONSTRAINT `companycontributor_ibfk_1` FOREIGN KEY (`participator_owner`) REFERENCES `hiring` (`offeringID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `companyproject`
--
ALTER TABLE `companyproject`
  ADD CONSTRAINT `companyproject_ibfk_3` FOREIGN KEY (`project_owner`) REFERENCES `company` (`companyID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `hiring`
--
ALTER TABLE `hiring`
  ADD CONSTRAINT `hiring_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `companyproject` (`projectID`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `hiring_ibfk_2` FOREIGN KEY (`offering_owner`) REFERENCES `talent` (`talentID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `talent`
--
ALTER TABLE `talent`
  ADD CONSTRAINT `talent_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `talentexperience`
--
ALTER TABLE `talentexperience`
  ADD CONSTRAINT `talentexperience_ibfk_1` FOREIGN KEY (`experience_owner`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `talentportfolio`
--
ALTER TABLE `talentportfolio`
  ADD CONSTRAINT `talentportfolio_ibfk_1` FOREIGN KEY (`portfolio_owner`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `talentskill`
--
ALTER TABLE `talentskill`
  ADD CONSTRAINT `talentskill_ibfk_1` FOREIGN KEY (`talentID`) REFERENCES `talent` (`talentID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
