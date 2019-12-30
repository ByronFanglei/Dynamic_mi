<?php
	// 创建PDO连接数据库单例模式
	class SingPDO{
		private static $pdo = null;
		public static function getPDO(){
			if (self::$pdo==null) {
				try{
					self::$pdo = new PDO("mysql:host=localhost;dbname=mi","root","root");
					self::$pdo->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
				}catch(PDOException $e){
					echo $e->getMessage();
				}
			}
			return self::$pdo;
		}
	}











?>