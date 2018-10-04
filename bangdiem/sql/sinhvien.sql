SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;


CREATE TABLE IF NOT EXISTS `sinhvien` (
`id` int(11) NOT NULL,
  `name` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `class` varchar(10) CHARACTER SET latin1 NOT NULL,
  `ma_mh` int(2) DEFAULT NULL,
  `diem` decimal(2,0) DEFAULT NULL,
  `loaidiem` varchar(4) COLLATE utf8mb4_unicode_ci DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=10 ;

INSERT INTO `sinhvien` (`id`, `name`, `class`, `ma_mh`, `diem`, `loaidiem`) VALUES
(1, 'Hồ Công Lịnh', 'FFSE1801', NULL, NULL, NULL),
(2, 'Trần Thị Tuyết Nhung', 'FFSE1801', NULL, NULL, NULL),
(3, 'Trần Nguyên Trung', 'FFSE1801', NULL, NULL, NULL),
(4, 'Mai Tuyết Loan', 'FFSE1802', NULL, NULL, NULL),
(5, 'Trương Đại Nghĩa', 'FFSE1802', NULL, NULL, NULL),
(6, 'Phạm Quang Nhân', 'FFSE1802', NULL, NULL, NULL),
(7, 'Bùi Ngọc Quỳnh Nhi', 'FFSE1803', NULL, NULL, NULL),
(8, 'Nguyễn Minh Huy', 'FFSE1804', NULL, NULL, NULL),
(9, 'Trần Thu Hà', 'FFSE1801', NULL, NULL, NULL);


ALTER TABLE `sinhvien`
 ADD PRIMARY KEY (`id`), ADD KEY `sinhvien_ibfk_1` (`ma_mh`);


ALTER TABLE `sinhvien`
MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=10;

ALTER TABLE `sinhvien`
ADD CONSTRAINT `sinhvien_ibfk_1` FOREIGN KEY (`ma_mh`) REFERENCES `monhoc` (`ma_mh`) ON DELETE CASCADE ON UPDATE CASCADE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;