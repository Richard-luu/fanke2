-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 2018-11-16 01:46:16
-- 服务器版本： 5.5.20
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `fanke`
--

-- --------------------------------------------------------

--
-- 表的结构 `goods`
--

CREATE TABLE `goods` (
  `gid` int(11) NOT NULL COMMENT '商品id',
  `imagesSrc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '商品图',
  `style` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '4.0日式免烫',
  `direc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '充值购买更优惠'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `goods`
--

INSERT INTO `goods` (`gid`, `imagesSrc`, `style`, `direc`) VALUES
(1, 'images/9.jpg', '吉国武', '199'),
(2, 'images/1g.jpg', '牛仔夹克', '149'),
(3, 'images/2g.jpg', '水柔棉', '169'),
(4, 'images/4.jpg', '双帽双拉链', '199'),
(5, 'images/pc-4.01.jpg', '4.0日式免烫衬衫', '充值购买更优惠'),
(6, 'images/pc-srm-01.jpg', '水柔棉开衫卫衣', '充值购买更优惠'),
(7, 'images/pc-cx-01.jpg', '潮鞋来袭', '充值购买更优惠'),
(8, 'images/hw.jpg', '户外运动', '充值购买更优惠'),
(9, 'images/pc-njf-01.jpg', '牛津纺衬衫', '充值购买更优惠'),
(10, 'images/wy.jpg', '熊本熊卫衣', '充值购买更优惠'),
(11, 'images/pc-flr-03.jpg', '初秋精选', '充值购买更优惠'),
(12, 'images/pc-wt-01.jpg', '外套', '充值购买更优惠'),
(13, 'images/pc-xxk.jpg', '休闲裤', '充值购买相当于 79元起'),
(14, 'images/pc-zzk.jpg', '针织裤', '充值购买相当于 49元起'),
(15, 'images/pc4.jpg', '弹力休闲直筒裤', '充值购买相当于 124元'),
(16, 'images/s.jpg', '轻弹水洗休闲裤 ', '充值购买相当于 99元'),
(17, 'images/pc-jj-01.jpg', '更多精品围巾', '29'),
(18, 'images/pc-ny-01.jpg', '更多精品内衣', '19'),
(19, 'images/pc-wp-01.jpg', '更多精品袜子', '6'),
(20, 'images/pc-mj-01.jpg', '毛巾', '169'),
(21, 'images/pc-xb-01.jpg', '箱包', '111'),
(22, 'images/pc-fbx-01.jpg', '鞋子', '222');

-- --------------------------------------------------------

--
-- 表的结构 `goods1`
--

CREATE TABLE `goods1` (
  `g1id` int(20) NOT NULL,
  `imagesSrc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `spanBack` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT 'span背景图',
  `showImg1` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '大图',
  `showImg2` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `showImg3` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL COMMENT '大图3'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `goods1`
--

INSERT INTO `goods1` (`g1id`, `imagesSrc`, `spanBack`, `showImg1`, `showImg2`, `showImg3`) VALUES
(1, 'images/1g.jpg', ' ../images/44444.jpg', '  ../images/0000c01.jpg', ' ../images/0000c11.jpg', ' ../images/0000c21.jpg'),
(2, ' images/2g.jpg', ' ../images/55555.jpg', '../images/0000d01.jpg', ' ../images/0000d11.jpg', '.jpg ../images/0000d21.jpg'),
(3, ' images/4.jpg', ' ../images/33333.jpg', ' ../images/0000b01.jpg', '../images/0000b11.jpg', '../images/0000b21.jpg'),
(4, 'images/9.jpg', '../images/22222.jpg', '../images/0000a01.jpg', '../images/0000a11.jpg', '../images/0000a21.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `goods2`
--

CREATE TABLE `goods2` (
  `g2id` int(20) NOT NULL,
  `imagesSrc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `style` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `goods2`
--

INSERT INTO `goods2` (`g2id`, `imagesSrc`, `style`, `direc`) VALUES
(1, 'images/pc-4.01.jpg', '4.0日式免烫衬衫', ' 充值购买更优惠'),
(2, 'images/pc-srm-01.jpg ', '水柔棉开衫卫衣 ', '充值购买更优惠'),
(3, 'images/pc-cx-01.jpg ', '潮鞋来袭 ', '充值购买更优惠'),
(4, 'images/hw.jpg', '户外运动 ', '充值购买更优惠'),
(5, 'images/pc-njf-01.jpg ', '牛津纺衬衫 ', '充值购买更优惠'),
(6, 'images/wy.jpg ', '熊本熊卫衣 ', '充值购买更优惠'),
(7, 'images/pc-flr-03.jpg ', '初秋精选 ', '充值购买更优惠'),
(8, 'images/pc-wt-01.jpg ', '外套', '充值购买更优惠');

-- --------------------------------------------------------

--
-- 表的结构 `goods3`
--

CREATE TABLE `goods3` (
  `g3id` int(20) NOT NULL,
  `imagesSrc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `style` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `direc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `goods3`
--

INSERT INTO `goods3` (`g3id`, `imagesSrc`, `style`, `direc`) VALUES
(1, 'images/pc-xxk.jpg  ', '休闲裤', '充值购买相当于 79元起'),
(2, 'images/pc-zzk.jpg ', '针织裤', '充值购买相当于 49元起'),
(3, 'images/pc4.jpg ', '弹力休闲裤 ', '充值购买相当于 124元'),
(4, 'images/s.jpg  ', '轻弹水洗休闲裤', '充值购买相当于 99元');

-- --------------------------------------------------------

--
-- 表的结构 `goods4`
--

CREATE TABLE `goods4` (
  `g4id` int(20) NOT NULL,
  `imagesSrc` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `goods4`
--

INSERT INTO `goods4` (`g4id`, `imagesSrc`) VALUES
(1, 'images/pc-jj-01.jpg'),
(2, 'images/pc-ny-01.jpg'),
(3, 'images/pc-wp-01.jpg'),
(4, 'images/pc-mj-01.jpg'),
(5, 'images/pc-xb-01.jpg'),
(6, 'images/pc-fbx-01.jpg');

-- --------------------------------------------------------

--
-- 表的结构 `user`
--

CREATE TABLE `user` (
  `uid` int(20) NOT NULL,
  `userName` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(20) COLLATE utf8mb4_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- 转存表中的数据 `user`
--

INSERT INTO `user` (`uid`, `userName`, `password`) VALUES
(1, 'lijie', '123456'),
(2, '关慧男', '123456'),
(3, '苏家鑫', '111111'),
(4, '老夏', '123456'),
(5, '周颖', '123456'),
(6, '老哈', '123456'),
(7, '老胡', '123456'),
(8, '老1', '123456'),
(9, '老2', '123456'),
(10, '111', '1111'),
(11, '打人了啊', '123456'),
(12, '打人了', '1111111'),
(13, '老哈55', '111111'),
(14, '老哈11', '1111111'),
(15, '哈哈哈', '123456'),
(16, '哈哈哈1', '111111'),
(17, '22222', '22222222'),
(18, '44444444444', '444444444444444444'),
(19, '哈哈哈哈', '123456');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `goods`
--
ALTER TABLE `goods`
  ADD PRIMARY KEY (`gid`);

--
-- Indexes for table `goods1`
--
ALTER TABLE `goods1`
  ADD PRIMARY KEY (`g1id`);

--
-- Indexes for table `goods2`
--
ALTER TABLE `goods2`
  ADD PRIMARY KEY (`g2id`);

--
-- Indexes for table `goods3`
--
ALTER TABLE `goods3`
  ADD PRIMARY KEY (`g3id`);

--
-- Indexes for table `goods4`
--
ALTER TABLE `goods4`
  ADD PRIMARY KEY (`g4id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`uid`);

--
-- 在导出的表使用AUTO_INCREMENT
--

--
-- 使用表AUTO_INCREMENT `goods`
--
ALTER TABLE `goods`
  MODIFY `gid` int(11) NOT NULL AUTO_INCREMENT COMMENT '商品id', AUTO_INCREMENT=23;
--
-- 使用表AUTO_INCREMENT `goods1`
--
ALTER TABLE `goods1`
  MODIFY `g1id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `goods2`
--
ALTER TABLE `goods2`
  MODIFY `g2id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;
--
-- 使用表AUTO_INCREMENT `goods3`
--
ALTER TABLE `goods3`
  MODIFY `g3id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
--
-- 使用表AUTO_INCREMENT `goods4`
--
ALTER TABLE `goods4`
  MODIFY `g4id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- 使用表AUTO_INCREMENT `user`
--
ALTER TABLE `user`
  MODIFY `uid` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
