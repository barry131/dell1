/*loading加载*/
$(window).load(function() {
    $(".ajaxpoput").fadeOut(3000);
})      
/*背景音乐*/
$(function(){
	$('.audioBtn').on('touchstart',function(){
		if($(this).hasClass('play')){
			$(this).removeClass("play windmill tupain");
			console.log($(this).siblings('audio'));
			$(this).siblings('audio').trigger('pause');
		}else{
			$(this).addClass("play windmill tupain");
			$(this).next().trigger('play');
		}
	});
})
/*var _self;
var hdsj={

    iswie:function(idx){
     },
     audioSwitch: function(){
        var Media = document.getElementsByTagName("audio")[0];
        Media.play();
        $("body")[0].addEventListener("touchstart", function(){
            if(_self.audioNum==0){
                Media.play();
                _self.audioNum++;
            }
        }, false);
        $(".audioBtn")[0].addEventListener("touchend", function () {
            if($(this).hasClass("play")){
                Media.pause();
                _self.scrolls.isvideo = false;
                $(this).removeClass("play");
                $(this).removeClass("windmill");
                $(this).removeClass("tupain");
            } else {
                Media.play();
                _self.scrolls.isvideo = true;
                $(this).addClass("play");
                $(this).addClass("windmill");
                $(this).addClass("tupain");
            }
    });
    },
    init:function(){
        _self = this;
        _self.iswie(0);
        ($('.audioBtn')[0]) && _self.audioSwitch();
    }
}
$(function(){
    hdsj.init();
    
});*/
/*end*/
/*价格滑动*/
$(document).ready(function () {
    var $range = $("#range_44"),
        $result = $("#result_44");

var dataToval = 0,
    dataFromval = 0;
    var track = function (data) {
        delete data.input;
        delete data.slider;
        if (JSON) {
            $result.html(JSON.stringify(data, null, 2));
        } else {
            $result.html(data.toString());
        }
		if(4000 >= data.to){
			$('.talk img').attr('src', 'images/chat_2.png');
		}else if(6000 >= data.to){
			$('.talk img').attr('src', 'images/chat_1.png');
		}else if(9000 >= data.to){
			$('.talk img').attr('src', 'images/chat_3.png');
		}else{
			$('.talk img').attr('src', 'images/chat_4.png');
		}
                    var dataToval = 0;
                    if(data.to == 3000){
                        dataToval = 4000;
                    }else{
                        dataToval = data.to;
                    };
                     if(data.from == 3000){
                        dataFromval = 4000;
                    }else{
                        dataFromval = data.from;
                    };
                console.log(dataToval)
                console.log(data.to)
		var inp_val =dataFromval + "," + dataToval;
		$range.val(inp_val)
        console.log(inp_val)
    };
    $range.ionRangeSlider({
        type: "double",
        min: 0,
        max: 12000,
        from: 0,
        to: 3000,
        step: 3000,
        grid: true,
        onStart: track,
        onChange: track,
        onFinish: track,
        onUpdate: track
    });
});
/*end*/
/*预算页选择*/
$(function(){
    $('.answer_one').on('touchstart',function(){
		if($(this).children('.answer_sel').hasClass('pic1')){
			$(this).children('.answer_sel').removeClass('pic1');
		}else{
			$(this).parents('.answer').find('.answer_sel').removeClass('pic1');
			$(this).children('.answer_sel').addClass('pic1');
		}
    });
    $('.next_con').on('touchstart',function(){
        var $temp = $(".answer  .pic1").parent().attr('data-one');
        var $rr = $("#range_44").val(inp_val);
        alert($temp)
        alert($rr)
        $.ajax({
                type:'post',
                url: '',
                data: {'curnum':subjnum,'answ':curAnsw},
                dataType:'json',
                error: function(request) {
                                           
                },
                success: function(data) {
                   
                },
        });
    });
});
/*end*/
/*屏幕尺寸*/
$(function(){
    $('.answers_one').on('touchstart',function(){
        /*$(this).parents('.answers').find('.answers_sel').removeClass('pic2');
        $(this).children('.answers_sel').addClass('pic2');
        $(this).parents('.choice').find('.num').html($(this).children('i').children('b').html());*/
		
		if($(this).children('.answers_sel').hasClass('pic2')){
			$(this).children('.answers_sel').removeClass('pic2');
        	$(this).parents('.choice').find('.num').html('请选择');
		}else{
			$(this).parents('.answers').find('.answers_sel').removeClass('pic2');
			$(this).children('.answers_sel').addClass('pic2');
        	$(this).parents('.choice').find('.num').html($(this).children('i').children('b').html());
		}
    });
	
    $('.downp').on('touchstart',function(){
        var upObj = $('.upp');
        if($(this).hasClass('upp')){
            $(this).find('.down').attr("src", "images/down.png");
			$(this).siblings('.scrn').fadeOut('fast');
            $(this).removeClass('upp');
        }else{
            if(upObj.length > 0){
                upObj.find('.down').attr("src", "../../images/dell/app/160302/down.png");
                upObj.siblings('.scrn').fadeOut('fast');
                upObj.removeClass('upp');
            }
            $(this).find('.down').attr("src", "images/up.png");
			$(this).siblings('.scrn').fadeIn('fast');
            $(this).addClass('upp');
        }
    });
    /*$('.down').on('touchstart',function(){
        if($(this).hasClass('up')){
            $(this).attr("src", "images/down.png").parents('.check').siblings('.scrn').fadeOut('fast');
            $(this).removeClass('up');
        }else{
            $(this).attr("src", "images/up.png").parents('.check').siblings('.scrn').fadeIn('fast');
            $(this).addClass('up');
        }
    });*/
    $('.sev').on('touchstart',function(){
        var p_text = $('.num').text();
        // alert(p_text)
        $.ajax({
                type:'post',
                url: '',
                data: {'curnum':subjnum,'answ':curAnsw},
                dataType:'json',
                error: function(request) {
                                           
                },
                success: function(data) {
                   
                },
        });
    });
});
/*end*/
/*其他软件页*/
$(function(){
    $('.two').on('touchstart',function(){
        $(this).children('.answers_sels').toggleClass('pic3');
        $(this).children('.answers_sels').hasClass('.pic3').length;
        var $aa = $(this).parents('.choice');
        var len = $aa.find('.pic3').length;
        $aa.find('.numb i').html(len)
        // console.log(length)
    }); 
    $('.sevs').click(function(){    
            $('.office').css("display","none");
            $('.sofrware').css("display","block");
                var $re= $("input").val();
		var choLen = $('.choice').length;
		var arrData = [];
		for(var i = 0; i < choLen; i++){
			var obj = $('.choice').eq(i).find('.pic3');
			var textLen = $('.choice').eq(i).find('.pic3').length;
			var str = '';
			for(var j = 0; j < textLen; j++){
				str = str + obj.eq(j).prev().children('a').html();
				if(j != textLen-1){
					str = str + '、';
				}
				
			}
			arrData[i] = str;
		}
		$('.show').each(function(index, element) {
            $(this).children('p').text(arrData[index]);
        });
    });
});
/*end*/
/*配置确认页*/
$(function(){
      $('.confirm').on('touchstart',function(){
        var span_text = $('.tex').text();
        $.ajax({
                type:'post',
                url: '',
                data: {'curnum':subjnum,'answ':curAnsw},
                dataType:'json',
                error: function(request) {
                                           
                },
                success: function(data) {
                   
                },
        });
    });  
});
/*end*/
/*软件确认页*/
$(function(){
      $('.confirms').on('touchstart',function(){
        var pp_text = $('.typ').text();
        alert(pp_text)
        $.ajax({
                type:'post',
                url: '',
                data: {'curnum':subjnum,'answ':curAnsw},
                dataType:'json',
                error: function(request) {
                                           
                },
                success: function(data) {
                   
                },
        });
    });  
      // $('.back').on('touchstart',function(){
      //   $('.software').hide();
      //   $('.office').show();
      // });
});
/*end*/
/*推荐产品页*/
$(function(){
    $('.tel').on('touchstart',function(){
        $('.pop2').show();
        $('body').css("background","hidden");
    });
    $('.cancel').on('touchstart',function(){
        $('.pop2').hide();
        $('body').css("background","auto");
    });
    $('.tels').on('touchstart',function(){
        $('.pops').show();
        $('body').css("background","hidden");
    });
    $('.cancels').on('touchstart',function(){
        $('.pops').hide();
        $('body').css("background","auto");
    });

    $('.answer_ones').on('touchstart',function(){
        $(this).parents('.yes-or-no').find('.answer_sele').removeClass('pic5');
        $(this).children('.answer_sele').addClass('pic5');
    });
    $('.submit').on('touchstart',function(){
        var $temps = $(".yes-or-no  .pic5").parent().attr('data-ans');
        var $idea = $("input").val();
        $('.pop5').show();
        $('body').css("overflow","hidden")
        // alert($idea)
        $.ajax({
                type:'post',
                url: '',
                data: {'curnum':subjnum,'answ':curAnsw},
                dataType:'json',
                error: function(request) {
                                           
                },
                success: function(data) {
                   
                },
        });
    }); 
    $('.over').on('touchstart',function(){
        $('.pop5').hide();
        $('body').css("overflow","auto")
    });    
    $('.shares').on('touchstart',function(){
        $('.pop6').show();
        $('body').css("overflow","hidden")
    });    
    $('.pop6').on('touchstart',function(){
        $('.pop6').hide();
        $('body').css("overflow","auto")
    });    
});
/*end*/
/*点击刷新*/
var htmlreload = function(){
    var $dom = $('<div class="htmlreloaddom"></div>');
    $dom.css({
        "position":"absolute",
        "top":"5%",
        "left":"5%",
        "z-index":9999,
        "background-color":"red",
        "width":"80px",
        "height":"40px",
        "line-height":"40px",
        "text-align":"center",
		'display':'none'
    })
    $dom.html('点击刷新');
    $('body').append($dom);
    $dom.on('click',function(){
        window.location.reload(true);
    })
}()

