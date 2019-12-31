$(function(){
	// 购物车下滑
	$("#down").hide();
	$("#shop").hover(function(){
		$("#down").slideDown(200);
		$("#shop .icon,#shop .font").css({"color":"#ff6700"});
		$("#shop .icon,#shop .font").css({"background-color":"#fff"});
	},function(){
		$("#down").slideUp(200);
		setTimeout(function(){
		$("#shop .icon,#shop .font").css({"color":"#b0b0b0"});
		$("#shop .icon,#shop .font").css({"background-color":"#424242"});
		},400)
	});
	$("#down").hover(function(){
		$("#shop .icon,#shop .font").css({"color":"#ff6700"});
		$("#shop .icon,#shop .font").css({"background-color":"#fff"});
	},function(){
		setTimeout(function(){	
		$("#shop .icon,#shop .font").css({"color":"#b0b0b0"});
		$("#shop .icon,#shop .font").css({"background-color":"#424242"});
		},400)
	})
	$("#down").mouseover(function(){
		$(this).stop()
	})
	$("#down").mouseout(function(){
		$(this).slideUp()
	})
	// 搜索框hover
	$("#hunticon").hover(function(){
		$("#hunticon #icon").attr("src","images/oko.png");
		$("#hunt").css({"border":"#b0b0b0 1px solid"});
		// $("#hunt").css({"height":"51px"});
	},function(){
		$("#hunticon #icon").attr("src","images/okw.png");
		$("#hunt").css({"border":"#e0e0e0 1px solid"});
	});

	$("#hunt").focus(function(){
		$("#eightmi,#twomis").fadeOut(200);
		$("#hunticon,#hunt").css({"border":"#ff6700 1px solid"});
	});
	$("#hunt").blur(function(){
		$("#eightmi,#twomis").fadeIn(260);
		$("#hunticon,#hunt").css({"border":"#e0e0e0 1px solid"});
	});
	// 轮播效果
	// var i=0;
	// mytime();
	// // 显示第一张
	// $("#caroimg").eq(0).show().siblings("#caroimg").hide();
	// $("#dotmin").eq(0).css({"background-color":"#ff6700","opacity":"0.5"})
	// .siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});

	// function mytime(){
	// 	time = setInterval(function(){
	// 	i++;
	// 	if (i==$(".caro #caroimg").length){
	// 		i=0;
	// 	}	
	// 	$(".caro #caroimg").eq(i).fadeIn(1000).siblings("#caroimg").fadeOut(1000);
	// 	$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"})
	// 	.siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
		
	// },5000)
	// }
	// // 箭头hover
	// $(".caro .jian").hover(function(){
	// 	clearInterval(time);
	// },function(){
	// 	mytime();
	// });
	// // 左箭头
	// $(".caro #left").click(function(){
	// 	i--;
	// 	if (i<0) {
	// 		i=$(".caro #caroimg").length-1;
	// 	}
	// 	$(".caro #caroimg").eq(i).show().siblings("#caroimg").hide();
	// 	$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"}).siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
	// });
	// // 右箭头
	// $(".caro #right").click(function(){
	// 	i++;
	// 	if (i>$(".caro #caroimg").length-1) {
	// 		i=0;
	// 	}
	// 	$(".caro #caroimg").eq(i).show().siblings("#caroimg").hide();
	// 	$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"}).siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
	// });
	// // 小圆点hover
	// $(".dot #dotmin").hover(function(){
	// 	clearInterval(time);
	// 	i=$(this).index();
	// 	$(".caro #caroimg").eq(i).fadeIn().siblings("#caroimg").fadeOut();
	// 	$(".dot #dotmin").eq(i).css({"background-color":"#ff6700","opacity":"0.5"})
	// 	.siblings("#dotmin").css({"background-color":"#000","opacity":"0.5"});
	// },function(){
	// 	mytime();
	// });
	// 小米手机下滑
	$(".miphone").slideUp();
	$(".two ul a").hover(function(){
		var m = $(this).index();
		$(".miphone").eq(m).stop().slideDown(260)
		$(".miphone").hover(function(){
			$(this).stop()
		},function(){
			$(this).stop().slideUp(260)
		})
	},function(){
		var m = $(this).index();
		$(".miphone").eq(m).stop().slideUp(260)
	})



	

	// 右边滑动
		$(".page li").hover(function(){
		$(this).css({"background":"#fff"})
		})
		$(".page .font").hover(function(){
			$(this).css({"color":"#ff6700"})
		},function(){
			$(this).css({"color":"#333"})
		})

		$(".pages").hide();
		
		$(".one").hover(function(){
			var l = $(this).index(); 
			$(".pages").eq(l).show();
		},function(){
			var l = $(this).index(); 
			$(".pages").eq(l).hide();
		})
		var l = $(".one").index(); 
		$(".pages").eq(l).mouseover(function(){
		$(".pages").eq(l).show()
		})
		$(".pages").eq(l).mouseout(function(){
		$(".pages").eq(l).hide()
		})
	
	// 倒计时
	var times = new Date("2018/8/29/11:59:59")
		var hh=times.getHours();
		var mm=times.getMinutes();
		var ss=times.getSeconds();
	var h;
	var m
	var s
	function changehour(h,m,s){
		if (h<10) {
			return "0"+h;
		}else
		{
			return h;
		}
		if (m<10) {
			return "0"+h;
		}else
		{
			return h;
		}
		if (s<10) {
			return "0"+h;
		}else
		{
			return h;
		}
	}

	timemover = setInterval(function(){
		var time = new Date();
		var ll=	time.getHours();
		var lll=time.getMinutes();
		var llll=time.getSeconds();
		var news = parseInt((times-time)/1000);
		h= parseInt(news/60/60%24);
		m= parseInt(news/60%60);
		s= parseInt(news%60);
		// $("#hour").text(changehour(h));
		// $("#minute").text(changehour(m));
		// $("#secs").text(changehour(s));
		$("#hour").text(ll);
		$("#minute").text(lll);
		$("#secs").text(llll);
	},1000);

	// 闪购滑动
	$("#you").click(function(){
		$("#maxbox").animate({marginLeft:"-992px"})
	})
	$("#zuo").click(function(){
		$("#maxbox").animate({marginLeft:"0px"})
	})

	// 家电
   
	$("#move ul li").eq(0).attr("id","add");
	for(s=0;s<$("#move ul li").length;s++){
		$("#move ul li").eq(s).hover(function(){
		$(this).attr("id","add").siblings().removeAttr("id","add");
		$(".boxs").eq($(this).index()).css({"display":"block"}).siblings().css({"display":"none"});
	})
	}

	// 家电图片向上滑动
			// 一
	$(".up").hide();
	$(".house").hover(function(){
		var p = $(this).index()
		$(".house").eq(p).addClass("housecss");
		$(".up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".house").eq(p).addClass("housecss");
				$(".up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".house").eq(p).removeClass("housecss");
		$(".up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".house").eq(p).removeClass("housecss");
				$(".up").eq(p).slideDown();
			})
		})
	})
		// 二
	$(".houset").hover(function(){
		var p = $(this).index()
		$(".houset").eq(p).addClass("housecss");
		$(".houset .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".houset .up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".houset").eq(p).addClass("housecss");
				$(".houset .up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".houset").eq(p).removeClass("housecss");
		$(".houset .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".houset .up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".houset").eq(p).removeClass("housecss");
				$(".houset .up").eq(p).slideDown();
			})
		})
	})
	// 三
	$(".housett").hover(function(){
		var p = $(this).index()
		$(".housett").eq(p).addClass("housecss");
		$(".housett .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housett .up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".housett").eq(p).addClass("housecss");
				$(".housett .up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".housett").eq(p).removeClass("housecss");
		$(".housett .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housett .up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".housett").eq(p).removeClass("housecss");
				$(".housett .up").eq(p).slideDown();
			})
		})
	})
	// 四
	$(".housef").hover(function(){
		var p = $(this).index()
		$(".housef").eq(p).addClass("housecss");
		$(".housef .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housef .up").eq(p).mouseover(function(){
				var p = $(this).index()
				$(".housef").eq(p).addClass("housecss");
				$(".housef .up").eq(p).stop();
			})	
		})
	},function(){
		var p = $(this).index()
		$(".housef").eq(p).removeClass("housecss");
		$(".housef .up").eq(p).slideToggle(300,function(){
			var p = $(this).index()
			$(".housef .up").eq(p).mouseout(function(){
				var p = $(this).index()
				$(".housef").eq(p).removeClass("housecss");
				$(".housef .up").eq(p).slideDown();
			})
		})
	})


	// 输入框点击显示
	$("#hunt").focus(function(){
		$("#clicks").show();
	})
	$("#hunt").blur(function(){
		$("#clicks").hide();
	})
	// 为您推荐
	$("#youc").click(function(){
		$(".recommax").animate({marginLeft:"-992px"})
	})
	$("#zuoc").click(function(){
		$(".recommax").animate({marginLeft:"0px"})
	})

	// 内容部分
	// 第一个小轮播
	$("#conleft,#conright").hide();
	$(".con").hover(function(){
		$(this).addClass("hover");
		$("#conleft,#conright").show();
	},function(){
		$(this).removeClass("hover");
		$("#conleft,#conright").hide();
	})

	$("#conleft,#conright").hover(function(){
		$(this).css({"background":"#ccc"})
	},function(){
		$(this).css({"background":"#fafafa"})
	})
	// 轮播
	$(".conson").eq(0).show().siblings().hide();
	$(".dott").show();
	$(".dott .dotss span").eq(0).css({"border-color":"#ff6700","background-color":"rgba(255,255,255,0.5)"});
		// 左箭头
		var k= 0
	$("#conleft").click(function(){

		k--;
		if (k<0) {
			k=$(".conson").length-1;
		}
		$(".conson").eq(k).show().siblings().hide();
		$("#conleft,#conright").show();
		$(".con").addClass("hover")
		$(".dott").show();
		$(".dott .dotss span").eq(k).css({"border-color":"#ff6700","background-color":"rgba(255,255,255,0.5)"})
		.parent().siblings().children().css({"border-color":"#f5f5f5","background-color":"rgba(0,0,0,0.5)"});
	});
		$("#conright").click(function(){

		k++;
		if (k>$(".conson").length-1) {
			k=0;
		}
		$(".conson").eq(k).show().siblings().hide();
		$("#conleft,#conright").show();
		$(".con").addClass("hover")
		$(".dott").show();
		$(".dott .dotss span").eq(k).css({"border-color":"#ff6700","background-color":"rgba(255,255,255,0.5)"})
		.parent().siblings().children().css({"border-color":"#f5f5f5","background-color":"rgba(0,0,0,0.5)"});
	});
		// 小圆点hover
		$(".dott .dotss span").hover(function(){
			$(this).css({"background-color":"#ff6700"})
		},function(){
			$(this).css({"background-color":"rgba(0,0,0,0.5)"})
		})

	// 第二个小轮播	

	

	// 固定导航
	$("#toptitle").hide();
	var hei = screen.availHeight;
	$(window).scroll(function(){
		if($(window).scrollTop()>3*hei){
			$("#toptitle").show();
		}else{
			$("#toptitle").hide();
		}
	})

	// 登录部分
	;(function(){
		var zt = 0;
		// 判断cookie信息且自动登录函数
		function getCookie(){
			var cookie = document.cookie;
			cookieArr = cookie.split(';');
			var cookieObj = {};
			for(var i=0;i<cookieArr.length;i++){
				var cookieStr = cookieArr[i].trim().split('=')
				cookieObj[cookieStr[0]]=cookieStr[1];
			}
			return cookieObj;
		}
		var cookie = getCookie();
		
		if (cookie.code != undefined) {
			if (cookie.code.length != 0) {
				$('#loginBtn').html(decodeURI(cookie.code));
				$('#exitBut').html('退出').css('display','block');
				zt=1;
			}
		}

		// 登录模块
		$('#loginBtn').click(function(){
		var secret = prompt('暗号-.-(Evil)');
		// 判空操作 由于使用prompt不用做初始化操作
		if (secret.trim().length==0) {
			alert('秘钥不能为空哇！！！');
			return;
		}
		// ajax判断秘钥是否正确
		ajaxSeal({
			type:'post',
			url:'phpfile/login.php',
			data:{
				secretH:secret,
				},
			success:function(res){
					// console.log(res);
					if (res.code==0 && res.codeCookie==0) {
						alert("验证成功");
						$('#loginBtn').html(res.name);
						$('#exitBut').html('退出').css('display','block');
						zt=1;
					}else if (res.code==1 && res.codeCookie==1) {
						alert("验证失败！找找别的大佬要个CODE");
					}
				}
			});
			})
			// 注册退出操作   zt：0：注册  1：退出
			$('#exitBut').click(function(){
				if (zt==0) {
					var getsecret = prompt('获取秘钥--请输入一个秘钥');
					if (getsecret.trim().length==0) {
						alert('秘钥为空怎么能行！');
						return;
					}else{
						var getname = prompt('秘钥主人=>');
						if (!getname.trim().length==0) {
							ajaxSeal({
								type:'post',
								url:'phpfile/getlogin.php',
								data:{
									getsecretH:getsecret,
									getnameH:getname
								},
								success:function(res){
									console.log(res);
									if (res.code==0) {
										// console.log(res);
										zt=1;//注册成功自动登录
										alert('秘钥已生效！');
										$('#loginBtn').html(res.info['name']);
										$('#exitBut').html('退出');
									}else if (res.code==1) {
										alert('秘钥已经被人注册过了，请从新发出秘钥');
									}
								}
							});
						}else{
							alert('名字不能为空哇');
							return;
						}
						
					}

				}else if(zt==1){
					$('#loginBtn').html('登录');
					$('#exitBut').html('注册');
					// 删除cookie
					var expires = new Date(new Date().getTime()+1).toGMTString();
					document.cookie='code='+cookie.code+';expires='+expires+'Domain=domain;path=/';
					zt=0;
				}
				
			})
	}())


	// 轮播部分
	;(function(){
		ajaxSeal({
			type:'get',
			url:'phpfile/swiperData.php',
			data:{},
			success:function(res){
			var swiperDemo = document.querySelector('.swiper-container .swiper-wrapper');
			// console.log(res.swiperinfo.length);
			for(var i=0;i<res.swiperinfo.length;i++){
				var sliDiv = document.createElement('div');
				sliDiv.className='swiper-slide';
				var sliImg = document.createElement('img');
				sliImg.src=res.swiperinfo[i]['url'];
				sliDiv.appendChild(sliImg);
				swiperDemo.appendChild(sliDiv);
				// console.log("轮播图片"+i+"添加时间："+res.swiperinfo[i]['time']);
			}
			var swiper = new Swiper('.swiper-container',{
					autoplay:{
						delay:3000,
					},
					loop:true,
					pagination: {
		    		el: '.swiper-pagination',
		    		dynamicBullets: true,
		  			},
								
				});
			}
		});
	}())	


	// 闪购图片
	;(function(){
		ajaxSeal({
			type:'get',
			url:'phpfile/flashsales.php',
			data:{},
			success:function(res){
				// console.log(res.flashinfo);
				var minbox = document.querySelector('.slide .maxbox');
				for(var i=0;i<res.flashinfo.length;i++){
					var aa = document.createElement('a');
					var conDiv = document.createElement('div');
					conDiv.className='control';
					aa.appendChild(conDiv);
					var minDiv = document.createElement('div');
					minDiv.className='minbox';
					conDiv.appendChild(minDiv);
					var imgDiv = document.createElement('div');
					imgDiv.className='img';
					minDiv.appendChild(imgDiv);
					var imgimg = document.createElement('img');
					imgimg.src=res.flashinfo[i]['url'];
					imgDiv.appendChild(imgimg);
					var fontDiv = document.createElement('div');
					fontDiv.className='font';
					fontDiv.innerHTML=res.flashinfo[i]['name'];
					minDiv.appendChild(fontDiv);
					var fontsDiv = document.createElement('div');
					fontsDiv.className='fonts';
					fontsDiv.innerHTML=res.flashinfo[i]['explain'];
					minDiv.appendChild(fontsDiv);
					var costDiv = document.createElement('div');
					costDiv.className='cost';
					costDiv.innerHTML=res.flashinfo[i]['op']+'元';
					var del = document.createElement('del');
					del.innerHTML=res.flashinfo[i]['pp']+'元';
					costDiv.appendChild(del);
					minDiv.appendChild(costDiv);
					minbox.appendChild(aa);
					// 随机数给定颜色
					var ram = Math.floor(Math.random()*10);
					switch(ram){
						case 0:{
							conDiv.setAttribute('style','border-top:1px #DC143C solid');
						}
							break;
						case 1:{
							conDiv.setAttribute('style','border-top:1px #BA55D3 solid');
						}
							break;
						case 2:{
							conDiv.setAttribute('style','border-top:1px #1E90FF solid');
						}
							break;
						case 3:{
							conDiv.setAttribute('style','border-top:1px #0FF solid');
						}
							break;
						case 4:{
							conDiv.setAttribute('style','border-top:1px #00FF7F solid');
						}
							break;
						case 5:{
							conDiv.setAttribute('style','border-top:1px #FFA500 solid');
						}
							break;
						case 6:{
							conDiv.setAttribute('style','border-top:1px #FF0 solid');
						}
							break;
						case 7:{
							conDiv.setAttribute('style','border-top:1px #FF4500 solid');
						}
							break;
						case 8:{
							conDiv.setAttribute('style','border-top:1px #808080 solid');
						}
							break;
						case 9:{
							conDiv.setAttribute('style','border-top:1px #FF1493 solid');
						}
							break;
					}
				};

			}
		});
	}())








});