<?php
	//code 0:注册成功 1：注册失败
	//coodCookie---0:cookie添加成功   1：cookie添加失败
	require_once 'singPDO.php';
	$pdo = SingPDO::getPDO();

	$success = array('mgs'=>'ok');
	$getsecre = $_POST['getsecretH'];
	$getname = $_POST['getnameH'];
	$success['info']=array('name'=>$getname,'secre'=>$getsecre);
	
	$loginSQL = "select * from mi_index_login";
	$pdoLogin = $pdo->prepare($loginSQL);
	$pdoLogin->bindColumn(1,$secreP);
	$pdoLogin->bindColumn(2,$nameP);
	$pdoLogin->execute();
	$loginInfo = [];
	for ($i=0;$pdoLogin->fetch(PDO::FETCH_COLUMN);$i++) { 
		$loginInfo[$i]=array('secre'=>$secreP,'name'=>$nameP);
	}
	// 开始判断数据 secre相同就不行
	$ls = true;
	for($j=0;$j<count($loginInfo);$j++){
		if ($loginInfo[$j]['secre']==$getsecre) {
			// if ($loginInfo[$j]['name']==$getname) {
				$ls = false;
				$success['code']=1;
				$success['coodCookie']=1;
				break;
			// }
		}
	}

	if ($ls) {
		$success['coodCookie']=0;
		$success['code']=0;
		// 开始将注册信息插入数据库
		$getSql = "insert into mi_index_login(code,name) values (?,?)";
		$getData = $pdo->prepare($getSql);
		$getData->bindValue(1,$getsecre);
		$getData->bindValue(2,$getname);
		$getData->execute();
		// 设置前端cookie
		setcookie('code',$getname,time()+60*60*24,'/');
	}


	echo json_encode($success);
?>