/*注册验证*/

var _self = null;
var touch = {
	scrolls :{
		startX:0,
		startY:0, 
		scrX:0,
		scrY:0,
		ids:0,
		leng:null,
	},
	touchSatrtFunc:function(evt){
		//evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
		var touch = evt.touches[0]; //获取第一个触点
		var x = Number(touch.pageX); //页面触点X坐标
		var y = Number(touch.pageY); //页面触点Y坐标
		//记录触点初始位置
		_self.scrolls.startX =x;  
		_self.scrolls.startY =y;  
		
	},
	touchMoveFunc:function(evt){
		evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
		//evt.stopPropagation();//阻止事件冒泡
		var touch = evt.touches[0]; //获取第一个触点
		var x = Number(touch.pageX); //页面触点X坐标
		var y = Number(touch.pageY); //页面触点Y坐标

		_self.scrolls.scrX=x - _self.scrolls.startX;
		_self.scrolls.scrY=y - _self.scrolls.startY;
	  
	},
	touchEndFunc:function(){
		//evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
		//evt.stopPropagation();//阻止事件冒泡
		_self.scrolls.leng = $(this).children().length;
		
		if(_self.scrolls.scrX>30){
			$(this).hide();
			$(this).next().show();
		}  
	}, 
	init:function(obj){
		_self = this;
		$('.'+obj)[0].addEventListener('touchstart', _self.touchSatrtFunc, false);  
		$('.'+obj)[0].addEventListener('touchmove', _self.touchMoveFunc, false);  
		$('.'+obj)[0].addEventListener('touchend', _self.touchEndFunc, false);
	},
	bodyroxh:function(){
		$('body').on('touchstart',function(evt){
			evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
		})
	} 
}

var _interval;
var a = navigator.userAgent;
$(function(){
	if(-1!=a.indexOf("Android")){
		$('#share-zi').addClass('share-text');
	}
	$("section").height($(window).height());
	var d = new Date();
	if(d.getMinutes() < 10){
		var minVal = "0" + d.getMinutes();
	}else{
		var minVal = d.getMinutes();
	}
	$(".first_time").text(d.getHours() + ":" + minVal);
	$(".first_date").text(d.getMonth() + "月" + d.getDate() + "日");
	var day = d.getDay();
	var weekDesc = new Array("星期天","星期一","星期二","星期三","星期四","星期五","星期六");
	for(var i = 0; i < weekDesc.length; i++){
		if(day==i){
			$(".first_week").text(weekDesc[i]);
		}
	}
	
	touch.init('sec_first');
	touch.bodyroxh();
	
	$(".newfriend_btn").on('touchstart',function(){
		$("#sec_second").hide();
		$("#sec_third").show();
		setTimeout(function(){
			$("#sec_third .showobj").show();
			setTimeout(function(){
				$(".send_btnshow").show();
				$(".send_btnnone").hide();
			},1000);
		},1000);
	});
	$(".chat_bottom_btn").on('touchstart',function(){
		$('#sec_third').hide();
		$('#sec_fourth').show();
		setTimeout(function(){
			$("#sec_fourth .showobj").show();
			setTimeout(function(){
				$('#sec_fourth').hide();
				$('#sec_fifth').show();
				$('#tel_audio').trigger("play");
			},3000);
		},1000);
	});
	$(".tel_anser").on('touchstart',function(){
		$('#tel_audio').trigger("pause");
		$('#sec_fifth').hide();
		$('#sec_sixth').show();
		$('#tel_audio2').trigger("play");
		_interval = setInterval(function(){
			var second = parseInt($(".talktime_s").text())+1;
			var minute = parseInt($(".talktime_m").text());
			if(second > 22){
				clearInterval(_interval);
				$('#tel_audio2').trigger("pause");
				var timeVal = $(".talktime").text();
				$('#sec_sixth').hide();
				$('#sec_seventh').show();
				$("#talktime").html(timeVal);
				setTimeout(function(){
					$("#sec_seventh .showobj").show();
				},1000);	
			}
			if(second == 60){
				second = 0;
				minute += 1;
			}
			if(minute < 10){
				minute = "0" + minute;
			}
			if(second < 10){
				second = "0" + second;
			}
			$(".talktime_s").text(second);
			$(".talktime_m").text(minute);
		},1000);
	});
	/*$("#tel_hangup").on('touchstart',function(){
		$('#tel_audio2').trigger("pause");
		var timeVal = $(".talktime").text();
		$('#sec_sixth').hide();
		$('#sec_seventh').show();
		$("#talktime").html(timeVal);
		setTimeout(function(){
			$("#sec_seventh .showobj").show();
		},1000);
	});*/
	$(".chat_redpacket").on('touchstart',function(){
		$('#sec_seventh').hide();
		$('#sec_eighth').show();
	});
	$(".sharebot_dh").on('touchstart',function(){
		$(".alert_wydh").show();
	});
	$(".sharebot_tjhy").on('touchstart',function(){
		$(".alert_yqhy").show();
	});
	$(".share_yh").on('touchstart',function(){
		$(".alert_yhqsysm").show();
	});
	$(".coupon_close").on('touchstart',function(){
		$(this).parents(".coupon_wrap").hide();
	});
	$(".alert_yqhy").on('touchstart',function(){
		$(this).hide();
	});
});