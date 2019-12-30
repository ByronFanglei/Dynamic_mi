<?php
	require_once 'singPDO.php';
	$pdo = SingPDO::getPDO();

	$success=array('mgs'=>'ok');

	$flashSQL = "select * from mi_index_flashsales";
	$flashData = $pdo->prepare($flashSQL);
	$flashData->bindColumn(1,$urlP);
	$flashData->bindColumn(2,$nameP);
	$flashData->bindColumn(3,$explainP);
	$flashData->bindColumn(4,$opP);
	$flashData->bindColumn(5,$ppP);
	$flashData->execute();
	$flashInfo = [];
	for($i=0;$flashData->fetch(PDO::FETCH_COLUMN);$i++){
		$flashInfo[$i]=array(
			'url'=>$urlP,
			'name'=>$nameP,
			'explain'=>$explainP,
			'op'=>$opP,
			'pp'=>$ppP,
		);
	}
	$success['flashinfo']=$flashInfo;

	echo json_encode($success);
?>