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
  `createdAt` text,
  `updatedAt` text,
  PRIMARY KEY (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `account`
--

LOCK TABLES `account` WRITE;
/*!40000 ALTER TABLE `account` DISABLE KEYS */;
INSERT INTO `account` VALUES (1,'Kirigaya Kazuto','Kirito@gmail.com','082121123456','kanandepanbelakangto',0,'Thursday, November 12, 2020 9:25 PM','Wednesday, November 18, 2020 1:46 PM'),(2,'Yuuki Asuna','Asuna@gmail.com','082121123','kisuna',0,'Thursday, November 12, 2020 9:26 PM','Wednesday, November 18, 2020 1:44 PM'),(3,'Theresa','Theresa@gmail.com','089119119119','ichibankawaii',1,'Thursday, November 12, 2020 9:43 PM','Monday, November 16, 2020 7:10 AM'),(4,'Abdul Richard','Abdul.Richard@outlook.com','085156069757','test12345',0,'Thursday, November 19, 2020 11:22 PM','Saturday, November 21, 2020 10:28 AM'),(5,'Yagoo','Yagoo@hololive.jp','085156069757','test12345',1,'Thursday, November 19, 2020 6:42 PM','Thursday, November 19, 2020 6:42 PM'),(6,'Marine Kanchou','Marine@hololive.jp','082488877124','ahoy1234',0,'Saturday, November 21, 2020 2:59 PM','Saturday, November 21, 2020 3:04 PM'),(7,'Xu Zenhua','XuZenhua@moonton.com','6785854217','ripVG',1,'Saturday, November 21, 2020 5:56 PM','Sunday, November 22, 2020 8:05 AM'),(8,'Moona Hoshinova','Moonafik@hololive.id','082488515178','$2b$10$00WTa4B/zam05OewVcUFDea52miRUDfbHS54GEr2sxoBNCR/INmZy',0,'Sunday, November 22, 2020 2:38 AM','Sunday, November 22, 2020 2:38 AM'),(9,'Sirius Aldebaran','SizAldebaran@gmail.com','085156068757','$2b$10$3a/eBIfCF5HuDQe5SepZi.c7d//dibyWk5BQltvqz891vhaKT6Lbi',991399361,'Sunday, November 22, 2020 3:06 AM','Sunday, November 22, 2020 3:06 AM'),(10,'Bronya ','Bronya@mihoyo.com','67858542178','$2b$10$5vYeq/xjkvimUJbStsScRusrkPs24UB/lSJ6j76prKIHUeGr90i3u',1,'Sunday, November 22, 2020 4:35 AM','Sunday, November 22, 2020 4:35 AM'),(11,'Tokino sora','Tokino sora@hololive.jp','082488515178','$2b$10$gOTsuzQ.eBjuJKdpQw0.OeUiwDcJoOswra0.J6Wvvq52PFfJ6fn5G',0,'Sunday, November 22, 2020 11:23 PM','Sunday, November 22, 2020 11:23 PM'),(12,'Shirakami Fubuki','Fubuki@hololive.jp','082488515178','$2b$10$COp18JC6pJKHWPpbI5F78.GccV6KuPCi9MLgno11g2CvBor.UfIAO',0,'Sunday, November 22, 2020 11:23 PM','Sunday, November 22, 2020 11:23 PM'),(13,'Natsuiro Matsuri','Natsuiro@hololive.jp','082488515178','$2b$10$25vgYOaVqY2i7vlgGJ1z7Owi596npE7y0SoNfFVSRJezZ//KgIaly',0,'Sunday, November 22, 2020 11:24 PM','Sunday, November 22, 2020 11:24 PM'),(14,'Minato Aqua','Aqua@hololive.jp','082488515178','$2b$10$JuwQyAc53L9Y9gUDnr2O8.fg7U/qU0KtsviipDSbGUSbrFGf1Z26u',0,'Sunday, November 22, 2020 11:24 PM','Sunday, November 22, 2020 11:24 PM'),(15,'Murasaki shion','Shion@hololive.jp','082488515178','$2b$10$Xf.UFsmHBIghZzUz7/oCX.0I5b9BpX3cudBl8SUDXk5SofZnOo.wa',0,'Sunday, November 22, 2020 11:25 PM','Sunday, November 22, 2020 11:25 PM'),(16,'Inugami Korone','Korone@hololive.jp','082488515178','$2b$10$XR52jnLqiBKmewED28Ud9uvCHO45gO0dHKn5mgUeTZ42lrbX4YhA6',0,'Sunday, November 22, 2020 11:25 PM','Sunday, November 22, 2020 11:25 PM'),(17,'Nekomata Okayu','Okayu@hololive.jp','082488515178','$2b$10$qOy2s/V8xGA3tvLx5c5WR.bdx3rJ56h9xbhZci8xSiNEg9rxWwxWe',0,'Sunday, November 22, 2020 11:26 PM','Sunday, November 22, 2020 11:26 PM'),(18,'Alucard','Heynotbad@gmail.com','082488515178','$2b$10$DW1TRxlzSRJTXSsg/97dbe2rN/aog3AznpwASsEMwtiPz.uH9mSvi',0,'Monday, November 23, 2020 2:10 PM','Monday, November 23, 2020 2:10 PM');
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `achivement`
--

LOCK TABLES `achivement` WRITE;
/*!40000 ALTER TABLE `achivement` DISABLE KEYS */;
INSERT INTO `achivement` VALUES (1,1,'https://localhost:3000','talent_cv-1606060100461.jpg'),(2,2,'https://localhost:3000','talent_cv-1606060129323.jpg'),(3,3,'https://localhost:3000','talent_cv-1606060155364.jpg'),(4,4,'https://localhost:3000','talent_cv-1606060165176.jpg'),(5,5,'https://localhost:3000','talent_cv-1606060176042.jpg'),(6,6,'https://localhost:3000','talent_cv-1606063107795.jpg'),(7,7,'https://localhost:3000','talent_cv-1606063115891.jpg'),(8,8,'https://localhost:3000','talent_cv-1606063122254.jpg'),(9,9,'https://localhost:3000','talent_cv-1606063129069.jpg'),(10,10,'https://localhost:3000','talent_cv-1606063139387.jpg'),(11,11,'https://localhost:3000','talent_cv-1606063154365.jpg'),(12,12,'https://localhost:3000','talent_cv-1606063210447.jpg'),(13,13,'https://localhost:3000','talent_cv-1606116155962.jpg');
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
  `company_location` varchar(10) DEFAULT NULL,
  `company_type` varchar(20) DEFAULT NULL,
  `company_detail` varchar(300) DEFAULT NULL,
  `company_image` text,
  `updatedAt` text,
  PRIMARY KEY (`companyID`),
  KEY `accountID` (`accountID`),
  CONSTRAINT `company_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,3,'Code With Theresa','Director','Bandung','Software','Code with theresa is the company who...','company_image-1606009544762.png','Sunday, November 22, 2020 8:45 AM'),(2,5,'Hololive','Director','Tokyo','Entertaiment','Hololive merupakan sebuah perusahaan ...','company_image-1606009556872.jpg','Sunday, November 22, 2020 8:45 AM'),(3,7,'Moontoon','CEO','Chinese','Mobile Apps','Moontoon merupakan perusahaan yang bergerak di bidang pengembangan game..','company_image-1606009572322.jpg','Sunday, November 22, 2020 8:46 AM'),(4,9,NULL,NULL,NULL,NULL,NULL,'company_image-1606009498453.jpg','Sunday, November 22, 2020 8:44 AM'),(5,10,'Mihoyo','CEO','Japan','Game Development','Mihoyo is company who dedicate to..','company_image-1606009593220.jpg','Sunday, November 22, 2020 8:46 AM');
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
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
  `project_desc` varchar(250) DEFAULT NULL,
  `fortalent_message` varchar(250) NOT NULL DEFAULT 'Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet',
  `project_sallary` varchar(25) DEFAULT NULL,
  `postedAt` text,
  `updatedAt` text,
  PRIMARY KEY (`projectID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companyproject`
--

LOCK TABLES `companyproject` WRITE;
/*!40000 ALTER TABLE `companyproject` DISABLE KEYS */;
INSERT INTO `companyproject` VALUES (1,'Create Hyperion Absent Apps','1 WEEK','Make A Automatic absent for hyperion employee','Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet','3000000','Saturday, November 21, 2020 10:34 AM','Saturday, November 21, 2020 10:34 AM'),(2,'Create Hololive Website','1 WEEK','In this project, we invite you to contribute on our...','Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet','8000000','Saturday, November 21, 2020 5:46 PM','Saturday, November 21, 2020 5:46 PM'),(4,'Create A Hololive Visual Novel Game','1 MONTH','In this project, we invite you to contribute on our...','Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet','12000000','Sunday, November 22, 2020 7:15 AM','Sunday, November 22, 2020 9:32 AM'),(5,'Update our Deep Fake Tech','3 MONTH','In this project, we invite you to contribute on our...','Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet','14000000','Sunday, November 22, 2020 9:31 AM','Sunday, November 22, 2020 9:31 AM'),(7,'Make me a music player apps','6 MONTH','In this project, we invite you to contribute on our...','Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet','14000000','Sunday, November 22, 2020 10:53 PM','Sunday, November 22, 2020 10:53 PM'),(8,'Buatin saya apliaksi buat nyari resep','2 MONTH','In this project, we invite you to contribute on our...','Kami Menwarkan Fasilitas Lorem Ipsum dolor sid amet','14000000','Monday, November 23, 2020 2:27 PM','Monday, November 23, 2020 2:27 PM');
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
  `repliedAt` text,
  PRIMARY KEY (`offeringID`),
  KEY `projectID` (`projectID`),
  CONSTRAINT `hiring_ibfk_1` FOREIGN KEY (`projectID`) REFERENCES `companyproject` (`projectID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hiring`
--

LOCK TABLES `hiring` WRITE;
/*!40000 ALTER TABLE `hiring` DISABLE KEYS */;
INSERT INTO `hiring` VALUES (1,1,'Approved','Thank for invite me, I Accept you offering letter sir','Saturday, November 21, 2020 5:48 PM'),(2,2,'Declined','Sorry, I am in other busy project','Saturday, November 21, 2020 5:47 PM'),(4,4,'Approved','Thank for invite me, I am ready to become your employee','Sunday, November 22, 2020 7:20 AM'),(5,5,'Declined','Thank for invite me, I am ready to become your employee','Sunday, November 22, 2020 9:33 AM'),(7,7,'Waiting','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit ligula, aliquam sed eros in, pretium malesuada elit. Cras euismod dictum placerat. Aliquam et mauris non metus venenatis malesuada. Nullam venenatis porta ipsum id tristique','Sunday, December 27, 2020 1:46 PM'),(8,8,'Waiting','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas elit ligula, aliquam sed eros in, pretium malesuada elit. Cras euismod dictum placerat. Aliquam et mauris non metus venenatis malesuada. Nullam venenatis porta ipsum id tristique','Sunday, December 27, 2020 1:46 PM');
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
  `talent_profile` varchar(150) DEFAULT NULL,
  `talent_image` text,
  `updatedAt` text,
  PRIMARY KEY (`talentID`),
  KEY `accountID` (`accountID`),
  CONSTRAINT `talent_ibfk_1` FOREIGN KEY (`accountID`) REFERENCES `account` (`accountID`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talent`
--

LOCK TABLES `talent` WRITE;
/*!40000 ALTER TABLE `talent` DISABLE KEYS */;
INSERT INTO `talent` VALUES (1,1,'Fullstack Web','Fulltime','Jakarta','Saya Kirito, Si Jago Javascript','talent_image-1606006786067.jpg','Sunday, November 22, 2020 7:59 AM'),(2,2,'Fullstack Mobile','Fulltime','Jakarta','Saya asuna, Best Partner Kananto','talent_image-1606007291343.jpg','Sunday, November 22, 2020 8:08 AM'),(3,4,'Android Developer','Freelance','Bandung','Lorem ipsum dolor sit amet','talent_image-1606007601407.jpg','Sunday, November 22, 2020 8:13 AM'),(4,6,'Devops Engineer','Freelance','Bandung','Hajimemashite watashi wa hoshou marine desu..','talent_image-1606007896539.png','Sunday, November 22, 2020 8:18 AM'),(5,8,'Fullstack Web','Fulltime','Jakarta','Lorem ipsum dolor sit amed','talent_image-1606060265625.jpg','Sunday, November 22, 2020 10:51 PM'),(6,11,'Fullstack Web','Freelance','Tokyo','I AM ','','Sunday, November 22, 2020 11:35 PM'),(7,12,'Fullstack Web','Freelance','Tokyo','I AM ','talent_image-1606062781204.png','Sunday, November 22, 2020 11:33 PM'),(8,13,'Fullstack Web','Freelance','Tokyo','I AM ','talent_image-1606062778150.png','Sunday, November 22, 2020 11:32 PM'),(9,14,'Fullstack Web','Freelance','Tokyo','I AM ','talent_image-1606062774855.png','Sunday, November 22, 2020 11:32 PM'),(10,15,'Fullstack Web','Fulltime','Tokyo','I AM ','talent_image-1606062743972.png','Sunday, November 22, 2020 11:32 PM'),(11,16,'Fullstack Web','Fulltime','Tokyo','I AM ','talent_image-1606062739698.png','Sunday, November 22, 2020 11:32 PM'),(12,17,'Fullstack Web','Fulltime','Tokyo','I AM ','talent_image-1606062730135.png','Sunday, November 22, 2020 11:32 PM'),(13,18,'Fullstack Web','Freelance','Tokyo','Nothing last forever','','Monday, November 23, 2020 2:36 PM');
/*!40000 ALTER TABLE `talent` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `talentskill`
--

LOCK TABLES `talentskill` WRITE;
/*!40000 ALTER TABLE `talentskill` DISABLE KEYS */;
INSERT INTO `talentskill` VALUES (1,1,'Kotlin','Java','HTML','CSS','JavaScript','Sunday, November 15, 2020 9:52 PM'),(2,2,'HTML','CSS','JavaScript','React','React Natve','Sunday, November 15, 2020 9:52 PM'),(3,3,'Java','Kotlin','Node Js','JavaScript','React Native','Thursday, November 19, 2020 11:27 PM'),(4,4,'Javascript','React Native','HTML ','CSS','Python','Sunday, November 22, 2020 6:51 AM'),(5,5,'Laravel','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 9:26 AM'),(6,6,'Laravel','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:35 PM'),(7,7,'Angular','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(8,8,'HTML & CSS','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(9,9,'React','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(10,10,'Vue','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:36 PM'),(11,11,'MongoDB','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:37 PM'),(12,12,'Laravel','React Native','Javascript','Kotlin','Python','Sunday, November 22, 2020 11:37 PM'),(13,13,'Laravel','React Native','Javascript','Kotlin','Python','Monday, November 23, 2020 2:23 PM');
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

-- Dump completed on 2020-12-27  8:20:12
