<?php
	require_once 'singPDO.php';
	$pdo = SingPDO::getPDO();

	$success=array('mgs'=>'ok');

	$swiperSql = "select * from mi_index_swiper";
	$pdoSwiper = $pdo->prepare($swiperSql);
	$pdoSwiper->bindColumn(1,$urlP);
	$pdoSwiper->bindColumn(2,$timeP);
	$pdoSwiper->execute();
	$swiperInfo = [];
	for($i=0;$pdoSwiper->fetch(PDO::FETCH_COLUMN);$i++){
		$swiperInfo[$i]=array('url'=>$urlP,'time'=>date("Y-m-d H:i:s",$timeP));
	}
	$success['swiperinfo']=$swiperInfo;

	echo json_encode($success);










?>