/*
Navicat MySQL Data Transfer

Source Server         : how2java
Source Server Version : 50718
Source Host           : localhost:3306
Source Database       : fsz

Target Server Type    : MYSQL
Target Server Version : 50718
File Encoding         : 65001

Date: 2019-08-15 21:49:36
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for advertising
-- ----------------------------
DROP TABLE IF EXISTS `advertising`;
CREATE TABLE `advertising` (
  `ADVE_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_ID` int(11) NOT NULL,
  `ADVE_LOCATION` varchar(20) NOT NULL,
  `PICTURE_PATH` varchar(50) NOT NULL,
  `CONTENT` varchar(200) DEFAULT NULL,
  `type` varchar(16) DEFAULT NULL,
  `weight` int(4) DEFAULT NULL,
  PRIMARY KEY (`ADVE_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of advertising
-- ----------------------------
INSERT INTO `advertising` VALUES ('1', '0', '1', '1', null, null, null);

-- ----------------------------
-- Table structure for catalog
-- ----------------------------
DROP TABLE IF EXISTS `catalog`;
CREATE TABLE `catalog` (
  `CAT_ID` int(11) NOT NULL AUTO_INCREMENT,
  `CAT_NAME` varchar(20) NOT NULL,
  `CAT_SUMMARY` varchar(200) NOT NULL,
  `CAT_DETAILED` text NOT NULL,
  `CAT_VIDEO` varchar(20) DEFAULT NULL,
  `CAL_PICTURE` varchar(300) DEFAULT NULL,
  `CAT_DIRECTORY` varchar(10) NOT NULL,
  `CAT_CITY` varchar(10) NOT NULL,
  `CAT_TYPE` int(11) DEFAULT NULL,
  PRIMARY KEY (`CAT_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of catalog
-- ----------------------------
INSERT INTO `catalog` VALUES ('1', '1', '12232344354657587698791232', '1', '1', '12timg.jpg,1学姐饿.PNG,', '建制沿革', '万柏林区', null);
INSERT INTO `catalog` VALUES ('7', '1213', '12576323476543234567876453', '123356557', '', '71.8.PNG,72timg.jpg,', '建制沿革', '小店区', '0');
INSERT INTO `catalog` VALUES ('8', '2334459823498', '29874398459439439054', '12894392305430', '', '', '建制沿革', '晋源区', '0');
INSERT INTO `catalog` VALUES ('9', '12432854398', '129823734887549843298jiksd', '1278923498', '', '', '建制沿革', '小店区', '0');
INSERT INTO `catalog` VALUES ('10', '23789139872498', '·13892489248932589jklfdkgml', '127892439i8jfoeidkrmltgm4;5', '', '', '建制沿革', '晋源区', '0');
INSERT INTO `catalog` VALUES ('11', '左权', ' 左权县原名辽县，隶属于山西省晋中市，位于山西省晋中市东南部，太行山主脉中段西侧。1942年5月25日国民革命军第八路军副总参谋长左权将军牺牲于此，山西人民为纪念左权将军，遂更县名为左权。', '夏时属冀州之域，春秋时属晋，战国时初属韩，后属赵。\n\n秦始皇改封建，分天下为三十六郡，属上党郡。\n\n西汉时，为冀州涅氏县地，属上党县。东汉延康元年（220）始置轑河县，治轑阳故城，属乐平郡。三国时属魏，隶属于乐平郡。西晋泰始元年（265）易名为轑阳县，属乐平郡。\n\n东晋十六国战乱时期，隶属变换频繁。建兴四年（316）属汉（前赵）；大兴二年（319）属赵（后赵）；升平二年（358）属燕（前燕）；太和五年（370）属秦（前秦）；太元十一年（386）属后燕，二十一年（396）属魏（北魏）。\n\n南北朝时期，北魏太平真君九年（448）废轑阳县并入乡县（今武乡）；孝昌二年（526）恢复县置，将“轑”改为“辽”，即辽阳县，属乐平郡；北齐天保五年，再度并入乡县。\n\n隋开皇十年(590)复置县，改名为辽山县，属并州。十六年（596），境内新置交漳县，同年始置辽州（治所辽阳故城），辖辽山、交漳二县。大业二年(606)废州，裁交漳县并入辽山县，属并州。\n\n唐代仍为辽山县，先后隶属于辽州、箕州、仪州、乐平郡、仪州。  \n\n五代十国时期，县置未变。后梁开平三年（909），仪州复名辽州，辽山县属辽州。十国时，辽州为北汉国十二州之一，辽山属辽州。\n\n北宋熙宁七年(1074)，废辽州，降平城、和顺二县为镇，入辽山县，隶平定军。元丰八年(1085)，复置辽州，辽山属辽州。\n\n金时县置未变，辽山属辽州，隶属河东南路。\n\n元代县置未变，辽山属辽州，隶属晋宁路。\n\n明洪武元年（1368）裁辽山县并入辽州，隶属山西布政使司，升辽州为直隶州，辖榆社、和顺二县。\n\n清雍正九年（1731），山西恢复道制，辽州隶属冀宁道。\n\n中华民国元年（1912）废州，辽州改名为辽县。民国三年（1914），隶冀宁道。民国十六年（1927）废道，隶山西省政府。1937年抗日战争爆发，辽县隶属山西省第三行政公署。1939年7月，日军占据县城，辽县抗日民主政府移驻西黄漳村，隶属太行第三专区。1941年9月，晋冀鲁豫边区政府决定：以平辽公路为界，划县境西北部置辽西县，县抗日政府驻蒿沟村，隶属太行三专区。   \n\n1942年9月，经晋冀鲁豫边区政府批准，辽县易名左权县。1943年，辽西县改属太行第二专区。1945年4月，县城光复，辽西县政府迁回县城；同年11月，左权、辽西两县合并为左权县，隶属于太行第二专区。\n\n      1949年1月，太行第二专区易名左权专区；同年9月1日，山西省人民政府成立，撤销左权专区，左权县隶属于山西省榆次专区。1958年11月，左权、和顺合并为和顺县。1959年6月，恢复左权县置，属山西省晋中地区。2000年10月晋中撤地建市，左权县隶属山西省晋中市。', '', '11640.jpg,', '建制沿革', '左权县', '0');
INSERT INTO `catalog` VALUES ('12', '民俗', 'hajsklfd收到货吉林省地方就好了烦得很', '师德师风就好了发顺丰', '', '', '民俗礼仪', '左权县', '0');
INSERT INTO `catalog` VALUES ('13', '测试2', '测试xxxxxxxxxxxxxxxxxxxx', '笑笑笑xx学习学习多寻寻做桌或或或寻寻寻寻寻寻寻寻奥奥奥所所付过过付所寻寻寻寻多多寻寻所所多多付发奥奥所所寻寻寻付过过所过多', '', '13640.jpg,', '山川风貌', '左权县', '0');
INSERT INTO `catalog` VALUES ('14', '1223', '121437982493589scdnjkfv', '122', '', '', '建制沿革', '阳曲县', '0');
INSERT INTO `catalog` VALUES ('15', '112435446', '12234457556880-00==-7575', '1223535364', '', '', '山川风貌', '晋源区', '0');
INSERT INTO `catalog` VALUES ('16', '2324', '2345与河北省杜鹃花开关板isfbvhjyldsbhsdjggb', 'adf', '', '', '传统技艺', '杏花岭区', '0');

-- ----------------------------
-- Table structure for modular
-- ----------------------------
DROP TABLE IF EXISTS `modular`;
CREATE TABLE `modular` (
  `MOD_ID` int(11) NOT NULL AUTO_INCREMENT,
  `MOD_NAME` varchar(10) NOT NULL,
  `UPDATE_CONENT` varchar(50) NOT NULL,
  `UODATE_DATE` date NOT NULL,
  PRIMARY KEY (`MOD_ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of modular
-- ----------------------------

-- ----------------------------
-- Table structure for shanxilocal
-- ----------------------------
DROP TABLE IF EXISTS `shanxilocal`;
CREATE TABLE `shanxilocal` (
  `LOCAL_ID` int(11) NOT NULL AUTO_INCREMENT,
  `COUNTY` varchar(10) NOT NULL,
  `CITY` varchar(10) NOT NULL,
  PRIMARY KEY (`LOCAL_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of shanxilocal
-- ----------------------------
INSERT INTO `shanxilocal` VALUES ('1', '万柏林区', '太原');
INSERT INTO `shanxilocal` VALUES ('2', '迎泽区', '太原');
INSERT INTO `shanxilocal` VALUES ('3', '杏花岭区', '太原');
INSERT INTO `shanxilocal` VALUES ('4', '晋源区', '太原');
INSERT INTO `shanxilocal` VALUES ('5', '尖草坪区', '太原');
INSERT INTO `shanxilocal` VALUES ('6', '小店区', '太原');
INSERT INTO `shanxilocal` VALUES ('7', '古交市', '太原');
INSERT INTO `shanxilocal` VALUES ('8', '娄烦县', '太原');
INSERT INTO `shanxilocal` VALUES ('9', '清徐县', '太原');
INSERT INTO `shanxilocal` VALUES ('10', '阳曲县', '太原');
INSERT INTO `shanxilocal` VALUES ('11', '离石区', '吕梁');
INSERT INTO `shanxilocal` VALUES ('12', '文水县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('13', '交城县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('14', '兴县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('15', '临县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('16', '柳林县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('17', '石楼县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('18', '岚县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('19', '方山县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('20', '中阳县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('21', '交口县', '吕梁');
INSERT INTO `shanxilocal` VALUES ('22', '孝义市', '吕梁');
INSERT INTO `shanxilocal` VALUES ('23', '汾阳市', '吕梁');
INSERT INTO `shanxilocal` VALUES ('24', '云冈区', '大同');
INSERT INTO `shanxilocal` VALUES ('25', '平城区', '大同');
INSERT INTO `shanxilocal` VALUES ('26', '灵丘县', '大同');
INSERT INTO `shanxilocal` VALUES ('27', '浑源县', '大同');
INSERT INTO `shanxilocal` VALUES ('28', '左云县', '大同');
INSERT INTO `shanxilocal` VALUES ('29', '天镇县', '大同');
INSERT INTO `shanxilocal` VALUES ('30', '广灵县', '大同');
INSERT INTO `shanxilocal` VALUES ('31', '城区', '长治');
INSERT INTO `shanxilocal` VALUES ('32', '郊区', '长治');
INSERT INTO `shanxilocal` VALUES ('33', '长治县', '长治');
INSERT INTO `shanxilocal` VALUES ('34', '襄垣县', '长治');
INSERT INTO `shanxilocal` VALUES ('35', '屯留县', '长治');
INSERT INTO `shanxilocal` VALUES ('36', '平顺县', '长治');
INSERT INTO `shanxilocal` VALUES ('37', '黎城县', '长治');
INSERT INTO `shanxilocal` VALUES ('38', '壶关县', '长治');
INSERT INTO `shanxilocal` VALUES ('39', '长子县', '长治');
INSERT INTO `shanxilocal` VALUES ('40', '武乡县', '长治');
INSERT INTO `shanxilocal` VALUES ('41', '沁县', '长治');
INSERT INTO `shanxilocal` VALUES ('42', '沁源县', '长治');
INSERT INTO `shanxilocal` VALUES ('43', '潞城市', '长治');
INSERT INTO `shanxilocal` VALUES ('44', '高新区', '长治');
INSERT INTO `shanxilocal` VALUES ('45', '尧都区', '临汾');
INSERT INTO `shanxilocal` VALUES ('46', '安泽县', '临汾');
INSERT INTO `shanxilocal` VALUES ('47', '洪洞县', '临汾');
INSERT INTO `shanxilocal` VALUES ('48', '古县', '临汾');
INSERT INTO `shanxilocal` VALUES ('49', '乡宁县', '临汾');
INSERT INTO `shanxilocal` VALUES ('50', '蒲县', '临汾');
INSERT INTO `shanxilocal` VALUES ('51', '侯马市', '临汾');
INSERT INTO `shanxilocal` VALUES ('52', '吉县', '临汾');
INSERT INTO `shanxilocal` VALUES ('53', '霍州市', '临汾');
INSERT INTO `shanxilocal` VALUES ('54', '曲沃县', '临汾');
INSERT INTO `shanxilocal` VALUES ('55', '榆次区', '晋中');
INSERT INTO `shanxilocal` VALUES ('56', '太谷县', '晋中');
INSERT INTO `shanxilocal` VALUES ('57', '祁县', '晋中');
INSERT INTO `shanxilocal` VALUES ('58', '平遥县', '晋中');
INSERT INTO `shanxilocal` VALUES ('59', '介休市', '晋中');
INSERT INTO `shanxilocal` VALUES ('60', '灵石县', '晋中');
INSERT INTO `shanxilocal` VALUES ('61', '榆社县', '晋中');
INSERT INTO `shanxilocal` VALUES ('62', '左权县', '晋中');
INSERT INTO `shanxilocal` VALUES ('63', '和顺县', '晋中');
INSERT INTO `shanxilocal` VALUES ('64', '昔阳县', '晋中');
INSERT INTO `shanxilocal` VALUES ('65', '寿阳县', '晋中');
INSERT INTO `shanxilocal` VALUES ('66', '晋中开发区', '晋中');
INSERT INTO `shanxilocal` VALUES ('67', '代县', '忻州');
INSERT INTO `shanxilocal` VALUES ('68', '忻府区', '忻州');
INSERT INTO `shanxilocal` VALUES ('69', '静乐县', '忻州');
INSERT INTO `shanxilocal` VALUES ('70', '五台县', '忻州');
INSERT INTO `shanxilocal` VALUES ('71', '定襄县', '忻州');
INSERT INTO `shanxilocal` VALUES ('72', '神池县', '忻州');
INSERT INTO `shanxilocal` VALUES ('73', '岢岚县', '忻州');
INSERT INTO `shanxilocal` VALUES ('74', '河曲县', '忻州');
INSERT INTO `shanxilocal` VALUES ('75', '保德县', '忻州');
INSERT INTO `shanxilocal` VALUES ('76', '五寨县', '忻州');
INSERT INTO `shanxilocal` VALUES ('77', '繁峙县', '忻州');
INSERT INTO `shanxilocal` VALUES ('78', '宁武县', '忻州');
INSERT INTO `shanxilocal` VALUES ('79', '山阴县', '朔州');
INSERT INTO `shanxilocal` VALUES ('80', '朔城区', '朔州');
INSERT INTO `shanxilocal` VALUES ('81', '怀仁县', '朔州');
INSERT INTO `shanxilocal` VALUES ('82', '平鲁区', '朔州');
INSERT INTO `shanxilocal` VALUES ('83', '右玉县', '朔州');
INSERT INTO `shanxilocal` VALUES ('84', '应县', '朔州');
INSERT INTO `shanxilocal` VALUES ('85', '阳泉城区', '阳泉');
INSERT INTO `shanxilocal` VALUES ('86', '阳泉矿区', '阳泉');
INSERT INTO `shanxilocal` VALUES ('87', '阳泉郊区', '阳泉');
INSERT INTO `shanxilocal` VALUES ('88', '平定县', '阳泉');
INSERT INTO `shanxilocal` VALUES ('89', '盂县', '阳泉');
INSERT INTO `shanxilocal` VALUES ('90', '盐湖区', '运城');
INSERT INTO `shanxilocal` VALUES ('91', '永济市', '运城');
INSERT INTO `shanxilocal` VALUES ('92', '河津市', '运城');
INSERT INTO `shanxilocal` VALUES ('93', '绛县', '运城');
INSERT INTO `shanxilocal` VALUES ('94', '夏县', '运城');
INSERT INTO `shanxilocal` VALUES ('95', '新绛县', '运城');
INSERT INTO `shanxilocal` VALUES ('96', '稷山县', '运城');
INSERT INTO `shanxilocal` VALUES ('97', '芮城县', '运城');
INSERT INTO `shanxilocal` VALUES ('98', '临猗县', '运城');
INSERT INTO `shanxilocal` VALUES ('99', '万荣县', '运城');
INSERT INTO `shanxilocal` VALUES ('100', '闻喜县', '运城');
INSERT INTO `shanxilocal` VALUES ('101', '垣曲县', '运城');
INSERT INTO `shanxilocal` VALUES ('102', '平陆县', '运城');
INSERT INTO `shanxilocal` VALUES ('103', '晋城城区', '晋城');
INSERT INTO `shanxilocal` VALUES ('104', '高平市', '晋城');
INSERT INTO `shanxilocal` VALUES ('105', '泽州县', '晋城');
INSERT INTO `shanxilocal` VALUES ('106', '阳城县', '晋城');
INSERT INTO `shanxilocal` VALUES ('107', '沁水县', '晋城');
INSERT INTO `shanxilocal` VALUES ('108', '陵川县', '晋城');

-- ----------------------------
-- Table structure for user_information
-- ----------------------------
DROP TABLE IF EXISTS `user_information`;
CREATE TABLE `user_information` (
  `USER_ID` int(11) NOT NULL AUTO_INCREMENT,
  `USER_NAME` varchar(5) NOT NULL,
  `VIP_LEVEL` varchar(5) NOT NULL,
  `PHONE_NUMBER` varchar(11) NOT NULL,
  `APPLE_ID` varchar(20) NOT NULL,
  `PASSWORD` varchar(11) NOT NULL,
  `BUSINESS_LICEBSE` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`USER_ID`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user_information
-- ----------------------------
INSERT INTO `user_information` VALUES ('1', '石小东', '管理员', '15234197121', '2016340216', '0', '../');
INSERT INTO `user_information` VALUES ('9', '管理员', '管理员', '123456789', 'admin', 'admin', null);
INSERT INTO `user_information` VALUES ('13', '测试1', 'VIP', '123456', '123456', '123456', '../');
