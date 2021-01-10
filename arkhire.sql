-- MySQL dump 10.13  Distrib 8.0.22, for Linux (x86_64)
--
-- Host: localhost    Database: arkhire
-- ------------------------------------------------------
-- Server version	8.0.22-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `account`
--

DROP TABLE IF EXISTS `account`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `account` (
  `accountID` int NOT NULL AUTO_INCREMENT,
  `account_name` varchar(50) DEFAULT NULL,
  `account_email` varchar(60) DEFAULT NULL,
  `account_phone` varchar(15) DEFAULT NULL,
  `password` text,
  `privilege` int DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` text,
  PRIMARY KEY (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'Kirigaya Kazuto','Kirito@gmail.com','082121123456','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',0,'0000-00-00 00:00:00','Wednesday, November 18, 2020 1:46 PM'),(2,'Yuuki Asuna','Asuna@gmail.com','082121123','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',0,'0000-00-00 00:00:00','Wednesday, November 18, 2020 1:44 PM'),(3,'Theresa','Theresa@gmail.com','089119119119','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',1,'0000-00-00 00:00:00','Monday, November 16, 2020 7:10 AM'),(4,'Watson Amelia','WatsonAmelia@hololive.jp','085156069757','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',0,'0000-00-00 00:00:00','Saturday, November 21, 2020 10:28 AM'),(5,'Yagoo','Yagoo@hololive.jp','085156069757','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',1,'0000-00-00 00:00:00','Thursday, November 19, 2020 6:42 PM'),(6,'Houshou Marine','Marine@hololive.jp','082488877124','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',0,'0000-00-00 00:00:00','Saturday, November 21, 2020 3:04 PM'),(7,'Xu Zenhua','XuZenhua@moonton.com','6785854217','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',1,'0000-00-00 00:00:00','Sunday, November 22, 2020 8:05 AM'),(8,'Moona Hoshinova','Moonafik@hololive.id','082488515178','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',0,'0000-00-00 00:00:00','Friday, January 1, 2021 4:43 AM'),(9,'Sirius Aldebaran','SizAldebaran@gmail.com','085156068757','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',991399361,'0000-00-00 00:00:00','Friday, January 1, 2021 4:44 AM'),(10,'Bronya ','Bronya@mihoyo.com','67858542178','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',1,'0000-00-00 00:00:00','Sunday, November 22, 2020 4:35 AM'),(11,'Tokino sora','Tokino sora@hololive.jp','082488515178','$2b$10$gOTsuzQ.eBjuJKdpQw0.OeUiwDcJoOswra0.J6Wvvq52PFfJ6fn5G',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:23 PM'),(12,'Shirakami Fubuki','Fubuki@hololive.jp','082488515178','$2b$10$COp18JC6pJKHWPpbI5F78.GccV6KuPCi9MLgno11g2CvBor.UfIAO',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:23 PM'),(13,'Natsuiro Matsuri','Natsuiro@hololive.jp','082488515178','$2b$10$25vgYOaVqY2i7vlgGJ1z7Owi596npE7y0SoNfFVSRJezZ//KgIaly',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:24 PM'),(14,'Minato Aqua','Aqua@hololive.jp','082488515178','$2b$10$JuwQyAc53L9Y9gUDnr2O8.fg7U/qU0KtsviipDSbGUSbrFGf1Z26u',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:24 PM'),(15,'Murasaki shion','Shion@hololive.jp','082488515178','$2b$10$Xf.UFsmHBIghZzUz7/oCX.0I5b9BpX3cudBl8SUDXk5SofZnOo.wa',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:25 PM'),(16,'Inugami Korone','Korone@hololive.jp','082488515178','$2b$10$XR52jnLqiBKmewED28Ud9uvCHO45gO0dHKn5mgUeTZ42lrbX4YhA6',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:25 PM'),(17,'Nekomata Okayu','Okayu@hololive.jp','082488515178','$2b$10$qOy2s/V8xGA3tvLx5c5WR.bdx3rJ56h9xbhZci8xSiNEg9rxWwxWe',0,'0000-00-00 00:00:00','Sunday, November 22, 2020 11:26 PM'),(18,'Alucard','Heynotbad@gmail.com','082488515178','$2b$10$DW1TRxlzSRJTXSsg/97dbe2rN/aog3AznpwASsEMwtiPz.uH9mSvi',0,'0000-00-00 00:00:00','Monday, November 23, 2020 2:10 PM'),(19,'Usada Pekora','UsadaPekora@hololive.jp','08785151123','$2b$10$3dT8p/8Vr5xgjFDPb21SpOZmOgFDjadvL0rE3IU/GxCC59iX910X.',0,'0000-00-00 00:00:00',''),(20,'Hitotsuyanagi Riri','hitotsuyanagi.riri@gardens.com','02287898212','$2b$10$.GbGDBVtUJuWF.kjRAho/.XVO1Wf/q8mjlPRpFCQpaNRknGWSR2CO',1,'0000-00-00 00:00:00',''),(21,'admin','admin@gmail.com','0222121123','$2b$10$Ru.j/kMxPx0/WdGizuDaBOiuIAIf4qEeMAoJYKhNXD5RHZ0oFyt9S',991399361,'0000-00-00 00:00:00','Saturday, January 2, 2021 10:40 PM'),(22,'Gawr Gura','GawrGura@hololive.en','0821211234','$2b$10$X2zWYFnP8TsESXbsEY0uTeWBYiKI.UBDGxMxlvcw.gSWAMf77wxRK',0,'2021-01-06 11:04:25',NULL),(23,'Einstein Torus','einstein.torus@gmail.com','0224851212','$2b$10$Ruu1LE2CsZms7AWU133St.JJnSZnbROzGdwQb1DxMMlQtyQZSfUKW',1,'2021-01-06 11:04:25',NULL);
/*!40000 ALTER TABLE `account` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `achivement`
--

DROP TABLE IF EXISTS `achivement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `achivement` (
  `achivementID` int NOT NULL AUTO_INCREMENT,
  `talentID` int NOT NULL,
  `talent_github` varchar(70) DEFAULT NULL,
  `talent_cv` text,
  PRIMARY KEY (`achivementID`),
  KEY `talentID` (`talentID`),
  CONSTRAINT `achivement_ibfk_1` FOREIGN KEY (`talentID`) REFERENCES `talent` (`talentID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achivement`
--

LOCK TABLES `achivement` WRITE;
/*!40000 ALTER TABLE `achivement` DISABLE KEYS */;
INSERT INTO `achivement` VALUES (1,1,'https://localhost:3000','talent_cv-1606060100461.jpg'),(2,2,'https://localhost:3000','talent_cv-1606060129323.jpg'),(3,3,'WatsonAmelia','talent_cv-1609813882687.jpg'),(4,4,'https://localhost:3000','talent_cv-1606060165176.jpg'),(5,5,'https://localhost:3000','talent_cv-1606060176042.jpg'),(6,6,'https://localhost:3000','talent_cv-1606063107795.jpg'),(7,7,'https://localhost:3000','talent_cv-1606063115891.jpg'),(8,8,'https://localhost:3000','talent_cv-1606063122254.jpg'),(9,9,'https://localhost:3000','talent_cv-1606063129069.jpg'),(10,10,'https://localhost:3000','talent_cv-1606063139387.jpg'),(11,11,'https://localhost:3000','talent_cv-1606063154365.jpg'),(12,12,'https://localhost:3000','talent_cv-1606063210447.jpg'),(13,13,'https://localhost:3000','talent_cv-1606116155962.jpg'),(14,14,'GawrGura','talent_cv-1609813953483.jpg'),(15,15,NULL,NULL);
/*!40000 ALTER TABLE `achivement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
  `companyID` int NOT NULL AUTO_INCREMENT,
  `accountID` int DEFAULT NULL,
  `company_name` varchar(50) DEFAULT NULL,
  `company_position` varchar(80) DEFAULT NULL,
  `company_latitude` text,
  `company_longitude` text,
  `company_type` varchar(20) DEFAULT NULL,
  `company_detail` varchar(300) DEFAULT NULL,
  `company_linkedin` text,
  `company_instagram` text,
  `company_facebook` text,
  `company_image` text,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`companyID`),
  KEY `accountID` (`accountID`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,3,'Code With Theresa','Director','-6.9175','107.6191','Startup','Code with theresa is the company who...',NULL,NULL,NULL,'company_image-1609608345651.jpg','0000-00-00 00:00:00'),(2,5,'Hololive','Director','35.6804','139.7690','Enterprise','Hololive Production adalah proyek agensi Vtuber yang berasal dari Jepang yang dikembangkan oleh COVER Corporation. Hololive awalnya beroperasi di Jepang, kemudian memperluas wilayah operasinya ke China dan Indonesia.',NULL,'https://www.instagram.com/hololive_/','https://web.facebook.com/hololivetv','company_image-1606009556872.jpg','0000-00-00 00:00:00'),(3,7,'Moontoon','CEO','39.9042','116.4074','Enterprise','Moonton, sebelumnya YoungJoy Technology Pte. Ltd., kemudian Shanghai Moonton Technology Co. Ltd. adalah pengembang dan penerbit video game China yang berbasis di Shanghai, China .. Didirikan pada bulan April 2014, perusahaan ini terkenal dengan game arena pertempuran online multipemain seluler','https://www.linkedin.com/company/shanghai-moonton-technology-co-ltd/',NULL,NULL,'company_image-1606009572322.jpg','0000-00-00 00:00:00'),(4,9,'Nijisanji ID','Director','-6.1754','106.8272','Startup','Nijisanji adalah proyek VTuber atau Virtual Liver yang berasal dari Jepang dan dikembangkan oleh Ichikara Inc. Pada April 2020, terdapat lebih dari 100 VTuber anggota Nijisanji yang aktif melakukan berbagai kegiatan di platform streaming video Youtube.',NULL,'https://www.instagram.com/nijisanji_id','https://web.facebook.com/nijisanji.indonesia','company_image-1609683201011.jpg','0000-00-00 00:00:00'),(5,10,'Mihoyo','CEO','31.2304','121.4737','Enterprise','miHoYo adalah studio animasi dan pengembangan video game Cina yang berbasis di Shanghai, Cina. Perusahaan ini didirikan pada 2012 oleh tiga mahasiswa dari Universitas Shanghai Jiao Tong dan, pada 2020, mempekerjakan lebih dari 1.500 orang','https://www.linkedin.com/company/mihoyo-co-ltd-/','https://www.instagram.com/mihoyo_jp','https://web.facebook.com/miHoYogames','company_image-1609683242682.jpg','0000-00-00 00:00:00'),(6,20,'Lily Gardens','CEO','-37.1052','-12.2777','Software House','Garden is a training facility that CHARM users have established in order to help combat humanity in the Assault Lily Bouquet anime, Assault Lily novel and Assault Lily toyline. It also functions as a military training high school with high school education. ',NULL,NULL,NULL,'company_image-1609684159848.png','2021-01-06 11:02:43'),(8,23,'Ei. inc','R&D',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,'2021-01-06 11:02:43');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companycontributor`
--

DROP TABLE IF EXISTS `companycontributor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companycontributor` (
  `contributorID` int NOT NULL AUTO_INCREMENT,
  `contributor_owner` int NOT NULL,
  `participator_name` int NOT NULL,
  PRIMARY KEY (`contributorID`),
  KEY `contributor_owner` (`contributor_owner`),
  KEY `participator_name` (`participator_name`),
  CONSTRAINT `companycontributor_ibfk_1` FOREIGN KEY (`contributor_owner`) REFERENCES `companyproject` (`projectID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `companycontributor_ibfk_3` FOREIGN KEY (`participator_name`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companycontributor`
--

LOCK TABLES `companycontributor` WRITE;
/*!40000 ALTER TABLE `companycontributor` DISABLE KEYS */;
INSERT INTO `companycontributor` VALUES (1,1,2),(2,2,19),(3,4,22),(4,4,19),(5,7,22),(6,10,19),(7,11,15),(8,12,19),(9,12,22);
/*!40000 ALTER TABLE `companycontributor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companyproject`
--

DROP TABLE IF EXISTS `companyproject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companyproject` (
  `projectID` int NOT NULL AUTO_INCREMENT,
  `project_tittle` varchar(100) DEFAULT NULL,
  `project_duration` varchar(50) DEFAULT NULL,
  `project_desc` varchar(500) DEFAULT NULL,
  `project_sallary` varchar(25) DEFAULT NULL,
  `project_owner` int NOT NULL,
  `project_target` int NOT NULL,
  `postedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`projectID`),
  KEY `project_owner` (`project_owner`),
  KEY `project_target` (`project_target`),
  CONSTRAINT `companyproject_ibfk_1` FOREIGN KEY (`project_owner`) REFERENCES `company` (`companyID`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `companyproject_ibfk_2` FOREIGN KEY (`project_target`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyproject`
--

LOCK TABLES `companyproject` WRITE;
/*!40000 ALTER TABLE `companyproject` DISABLE KEYS */;
INSERT INTO `companyproject` VALUES (1,'Create Hyperion Absent Apps','1 WEEK','Make A Automatic absent for hyperion employee','Rp. 3.000.000',1,2,'0000-00-00 00:00:00'),(2,'Create Hololive Website','1 WEEK','In this project, we invite you to contribute on our...','Rp. 8.000.000',2,19,'0000-00-00 00:00:00'),(4,'Create A Hololive Visual Novel Game','1 MONTH','In this project, we invite you to contribute on our...','Rp. 12.000.000',2,22,'0000-00-00 00:00:00'),(5,'Update our Deep Fake Tech','3 MONTH','In this project, we invite you to contribute on our...','Rp. 14.000.000',4,19,'0000-00-00 00:00:00'),(7,'Make me a music player apps','6 MONTH','In this project, we invite you to contribute on our...','Rp. 9.000.000',3,22,'0000-00-00 00:00:00'),(10,'Torus A.I Recognition','4 WEEK','orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a','Rp. 32.000.000',8,19,'2021-01-06 10:16:03'),(11,'Lily Gardens Api','2 Month','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Rp.  8.000.000',6,15,'2021-01-06 10:21:13'),(12,'E-Wallet Torus Apps','6 MONTH','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Rp.  6.000.000',8,19,'2021-01-06 10:23:05'),(15,'E-Wallet Torus Apps','6 MONTH','Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.','Rp.  16.000.000',8,22,'2021-01-08 12:31:38');
/*!40000 ALTER TABLE `companyproject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hiring`
--

DROP TABLE IF EXISTS `hiring`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hiring` (
  `offeringID` int NOT NULL AUTO_INCREMENT,
  `projectID` int NOT NULL,
  `hiring_status` enum('Waiting','Approved','Declined') NOT NULL DEFAULT 'Waiting',
  `reply_message` varchar(250) DEFAULT NULL,
  `repliedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`offeringID`),
  KEY `projectID` (`projectID`),
  CONSTRAINT `hiring_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `companyproject` (`projectID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiring`
--

LOCK TABLES `hiring` WRITE;
/*!40000 ALTER TABLE `hiring` DISABLE KEYS */;
INSERT INTO `hiring` VALUES (1,1,'Approved','Thank you for adding me to your project sir, I appreciate it','0000-00-00 00:00:00'),(2,2,'Waiting','Sorry, I am in other busy project','0000-00-00 00:00:00'),(4,4,'Approved','Yatta','0000-00-00 00:00:00'),(5,5,'Declined','Sorry Sir, I can accept your offering project. Because that\'s quest is very difficult for me','0000-00-00 00:00:00'),(7,7,'Approved','nope','0000-00-00 00:00:00'),(10,10,'Approved','kalsdklkasdlksladkasldkaskdlk','2021-01-06 10:29:27'),(11,11,'Waiting',NULL,'2021-01-06 10:29:27'),(12,12,'Waiting',NULL,'2021-01-06 10:29:27'),(15,15,'Declined','Y','2021-01-08 12:31:38');
/*!40000 ALTER TABLE `hiring` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talent`
--

DROP TABLE IF EXISTS `talent`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talent` (
  `talentID` int NOT NULL AUTO_INCREMENT,
  `accountID` int NOT NULL,
  `talent_tittle` enum('Android Developer','Fullstack Web','Fullstack Mobile','Devops Engineer') DEFAULT NULL,
  `talent_time` enum('Fulltime','Freelance') DEFAULT NULL,
  `talent_city` varchar(10) DEFAULT NULL,
  `talent_profile` varchar(480) DEFAULT NULL,
  `talent_github` text,
  `talent_image` text,
  `updatedAt` text,
  PRIMARY KEY (`talentID`),
  KEY `accountID` (`accountID`),
  CONSTRAINT `talent_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talent`
--

LOCK TABLES `talent` WRITE;
/*!40000 ALTER TABLE `talent` DISABLE KEYS */;
INSERT INTO `talent` VALUES (1,1,'Fullstack Web','Fulltime','Jakarta','Kirito was chosen to be one of the one thousand beta testers for the closed beta of Sword Art Online, the first ever Virtual Reality Massively Multiplayer Online Role-Playing Game VRMMORPG for the NerveGear, and later joined the official version of the game. He thus became one of the 10,000 players who were trapped in Sword Art Online, where he remained a solo player for the majority of the game.',NULL,'talent_image-1609646981943.jpg','Sunday, November 22, 2020 7:59 AM'),(2,2,'Fullstack Mobile','Fulltime','Jakarta','asuna is a kind and helpful young woman who, similarly to Kirito, cannot abandon another in trouble. She takes the game very seriously and is determined to clear it before Kirito tells her to enjoy SAO a bit. Asuna is also somewhat proud and despite her kind personality, she will not hesitate to get physical with those that challenge her authority or make fun of her abilities, such as cooking.',NULL,'talent_image-1606007291343.jpg','Sunday, November 22, 2020 8:08 AM'),(3,4,'Android Developer','Freelance','Bandung','Amelia is a rather expressive girl who is often seen mingling or teasing her fellow holomyth members mostly Gura. She is usually kind, supportive, and sweet as shown when she often willingly helps the bonehead Gura in Minecraft and is furthermore expressed when she frequently watches her fellow members\' streams whenever she is available \nshe even ended her own stream just to watch Kiara\'s stream once.',NULL,'talent_image-1609646444166.png','Sunday, November 22, 2020 8:13 AM'),(4,6,'Devops Engineer','Freelance','Bandung','Marine is a bold, fast-talking girl who often throws caution to the wind, making obscene jokes and playfully mocking both her higher-ups and her viewers. She often struggles to keep her lewdness in check, and openly lusts after fictional female characters. According to her backstory, she loves money, jewels and treasure, and decided to become a VTuber to get money to buy her own ship. As such, Marine is officially a cosplayer and not a real pirate.',NULL,'talent_image-1606007896539.png','Sunday, November 22, 2020 8:18 AM'),(5,8,'Fullstack Web','Fulltime','Jakarta','Moona is a shy girl, which is the opposite of her image of a flat faced college girl despite the fact she still speaks in an upbeat tone and a rather unique Indonesia accent. Like Tsunomaki Watame, she loves to bob and weave her head and body around. She worked as a fashion model before showing an interest in joining hololive. She loves to shitpost on Twitter while trying to connect with her fans.',NULL,'talent_image-1606060265625.jpg','Sunday, November 22, 2020 10:51 PM'),(6,11,'Devops Engineer','Freelance','Tokyo','Tokino Sora was born on 15 May 2000 in Tokyo. She is an easy-going, happy and comforting person whose personality has led many fans to call her Tokino Sora Mama because of her motherly attitude. Within hololive, she is the member who most closely fits the image of a proper idol, since most of the other members have become infamous for causing mayhem and goofing off.',NULL,'talent_image-1609647248000.png','Sunday, November 22, 2020 11:35 PM'),(7,12,'Devops Engineer','Freelance','Bali','Fubuki is usually always cheerful and excited, singing little songs and making many in-jokes. She is shy when confronted with new circumstances, and when embarrassed she hides at the bottom of the screen with only her fox ears peeking up. She becomes enthralled in games and has cute conversations with scripted game characters, or voice acts as characters while making effects.',NULL,'talent_image-1609685787243.jpg','Sunday, November 22, 2020 11:33 PM'),(8,13,'Fullstack Mobile','Freelance','Tokyo','Matsuri is an energetic, expressive, and sometimes chaotic cheerleader girl who is bubbly as a festival. She is known for certain viral moments like wearing band-aids to school instead of bras,posting her own take of a popular internet copypasta video on Shirakami Fubuki\'s Twitter, and groping other members off-camera (including Hoshimachi Suisei, Shirogane Noel, and Murasaki Shion, among others).',NULL,'talent_image-1609685919276.jpg','Sunday, November 22, 2020 11:32 PM'),(9,14,'Android Developer','Freelance','Bandung','Aqua is a bumbling airhead who somehow manages to become the victim of every joke in which she gets involved. She is also childish and prone to throwing tantrums, smashing her keyboard, and hyperventilating when things don\'t go as planned (which is most of the time). She enjoys playing pranks and causing mischief, but it almost always backfires because of a combination of poor planning and bad luck.',NULL,'talent_image-1609685204974.jpg','Sunday, November 22, 2020 11:32 PM'),(10,15,'Fullstack Mobile','Fulltime','Tokyo','Shion is a smug, cheeky brat kusogaki who speaks bluntly without the usual politeness/consideration associated with the Japanese language, and flirts shamelessly with other hololive members. She wants to be seen as an adult, but thanks to her childish appearance and mannerisms, all attempts by Shion to appear adult-like end up looking very silly.',NULL,'talent_image-1609686080931.png','Sunday, November 22, 2020 11:32 PM'),(11,16,'Android Developer','Fulltime','Tokyo','Korone has a sweet and goofy personality comparable to that of an actual dog. She often kisses other hololive members for no reason, and has a high-pitched laugh that resembles a train whistle or flute. Like most dogs, Korone is fiercely loyal, specifically to Nekomata Okayu. The two are rarely seen apart, and the pair is known as OkaKoro.',NULL,'talent_image-1609685381149.jpg','Sunday, November 22, 2020 11:32 PM'),(12,17,'Android Developer','Fulltime','Yogyakarta','Okayu is typically very relaxed, free-spirited, and also somewhat of a playboy. She sometimes flirts openly with other hololive members just to see their reactions and is also known for impulsively swiping food. She never denies her wrongdoings and was handed a guilty verdict in several Okayu Court cases, after which she obediently served her sentence.',NULL,'talent_image-1609685641490.jpg','Sunday, November 22, 2020 11:32 PM'),(13,18,'Fullstack Mobile','Freelance','Bali','The last great war is a glorious memory for the Moniyans. The powerful Light\'s Order, together with the Imperial Border Guards, wiped out the demonic strongholds at the Moniyan and Barren Lands pass, driving the fiends back to the hinterlands of the Forsaken Wastes. But for young Alucard, the war was nothing but a terrible memory of pain and misery. His father\'s second regiment suffered heavy losses due to a rash lone advance.\n',NULL,'talent_image-1609647189998.jpg','Monday, November 23, 2020 2:36 PM'),(14,19,'Fullstack Web','Freelance','Jakarta','Pekora hails from the nation of Pekoland, where she claims she is a member of royalty. While not much is currently known about Pekoland, it is assumed that its denizens are, like Pekora, Animals humans with rabbit-ears and comparatively long lifespans, and that the rabbit-motif apparent in Pekora\'s fashion and accessories is significant to their culture. According to Pekora, peko is the only word in the Pekolandish language.',NULL,'talent_image-1609671727008.jpg',NULL),(15,22,NULL,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `talent` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talentexperience`
--

DROP TABLE IF EXISTS `talentexperience`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talentexperience` (
  `experienceID` int NOT NULL AUTO_INCREMENT,
  `experience_owner` int NOT NULL,
  `experience_title` varchar(50) DEFAULT NULL,
  `experience_source` varchar(100) DEFAULT NULL,
  `experience_start` varchar(4) DEFAULT NULL,
  `experience_end` varchar(4) DEFAULT NULL,
  `experience_desc` text,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`experienceID`),
  KEY `experience_owner` (`experience_owner`),
  CONSTRAINT `talentexperience_ibfk_1` FOREIGN KEY (`experience_owner`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talentexperience`
--

LOCK TABLES `talentexperience` WRITE;
/*!40000 ALTER TABLE `talentexperience` DISABLE KEYS */;
INSERT INTO `talentexperience` VALUES (2,22,'Minercraft Contributor','Mojang.inc','2019','2020','Contributor mojang, fixing bug and do the application testing','2021-01-06 13:23:29'),(3,22,'Hololive 2nd Generation Talent','Hololive English','2019','2019','Become Hololive 2nd talent','2021-01-06 13:52:00'),(4,19,'Software Engineer','Hololive English','2018','2020','Become Software engineer, who handle all talent of hololive en member','2021-01-06 14:29:06');
/*!40000 ALTER TABLE `talentexperience` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talentportfolio`
--

DROP TABLE IF EXISTS `talentportfolio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talentportfolio` (
  `portfolioID` int NOT NULL AUTO_INCREMENT,
  `portfolio_owner` int NOT NULL,
  `portfolio_title` varchar(100) DEFAULT NULL,
  `portfolio_desc` text,
  `portfolio_repository` text,
  `portfolio_image` text,
  `updatedAt` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`portfolioID`),
  KEY `portfolio_owner` (`portfolio_owner`),
  CONSTRAINT `talentportfolio_ibfk_1` FOREIGN KEY (`portfolio_owner`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talentportfolio`
--

LOCK TABLES `talentportfolio` WRITE;
/*!40000 ALTER TABLE `talentportfolio` DISABLE KEYS */;
INSERT INTO `talentportfolio` VALUES (1,19,'Hololive Channel','Making a hololive channel youtube for me',NULL,'portfolio_image-1610207920546.jpg','2021-01-06 15:32:49'),(2,22,'Hololive Talent Api','Making APi for manage all of hololive gen member',NULL,'portfolio_image-1610007214128.jpg','2021-01-06 15:32:49'),(3,20,'Hololive chat streamsss','asd',NULL,'portfolio_image-1610007398355.jpg','2021-01-07 08:16:38');
/*!40000 ALTER TABLE `talentportfolio` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `talentskill`
--

DROP TABLE IF EXISTS `talentskill`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `talentskill` (
  `skillID` int NOT NULL AUTO_INCREMENT,
  `talentID` int DEFAULT NULL,
  `skill_1` varchar(15) DEFAULT NULL,
  `skill_2` varchar(20) DEFAULT NULL,
  `skill_3` varchar(20) DEFAULT NULL,
  `skill_4` varchar(20) DEFAULT NULL,
  `skill_5` varchar(20) DEFAULT NULL,
  `updatedAt` text,
  PRIMARY KEY (`skillID`),
  KEY `talentID` (`talentID`),
  CONSTRAINT `talentskill_ibfk_1` FOREIGN KEY (`talentID`) REFERENCES `talent` (`talentID`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talentskill`
--

LOCK TABLES `talentskill` WRITE;
/*!40000 ALTER TABLE `talentskill` DISABLE KEYS */;
INSERT INTO `talentskill` VALUES (1,1,'Kotlin','Java','HTML','CSS','JavaScript','Sunday, November 15, 2020 9:52 PM'),(2,2,'HTML','CSS','JavaScript','React','React Natve','Sunday, November 15, 2020 9:52 PM'),(3,3,'Kotlin','React','Java','Laravel','Python','Tuesday, January 5, 2021 9:27 AM'),(4,4,'Javascript','React Native','HTML ','CSS','Python','Sunday, November 22, 2020 6:51 AM'),(5,5,'Laravel','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 9:26 AM'),(6,6,'Laravel','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:35 PM'),(7,7,'Angular','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(8,8,'HTML & CSS','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(9,9,'React','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(10,10,'Vue','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(11,11,'MongoDB','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:37 PM'),(12,12,'Laravel','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:37 PM'),(13,13,'Laravel','React Native','Javascript','Kotlin','Python','Monday, November 23, 2020 2:23 PM'),(14,14,'Kotlin','React','Java','Laravel','Python','Tuesday, January 5, 2021 9:31 AM'),(15,15,NULL,NULL,NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `talentskill` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-10  1:06:05
