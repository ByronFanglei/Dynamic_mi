<?php
	//0:秘钥成功  1:秘钥失败
	// 接收前端秘钥数据
	require_once 'singPDO.php';
	$pdo = SingPDO::getPDO();

	$codeH = $_POST['secretH'];
	$success = array('mgs'=>'ok');
	
	$loginSQL="select * from mi_index_login";
	$pdoso = $pdo->prepare($loginSQL);
	$pdoso->bindColumn(1,$codeP);
	$pdoso->bindColumn(2,$nameP);
	$pdoso->execute();
	// 获取表中数据
	$secret = [];
	for($i=0;$pdoso->fetch(PDO::FETCH_COLUMN);$i++){
		$secret[$i]=array('secret'=>$codeP,'name'=>$nameP);
	}
	// 后台判断秘钥是否正确
	$ls=false; //设置信标
	for($j=0;$j<count($secret);$j++){
		if ($secret[$j]['secret']==$codeH) {
			// 判断成功
			$success['code']=0;
			$success['name']=$secret[$j]['name'];
			$ls=true;
			break;
		}
	}
	if (!$ls) {
		$success['code']=1;
	}
	echo json_encode($success);

?>