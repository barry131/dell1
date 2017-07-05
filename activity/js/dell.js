
(function(){
    /**
     * 戴尔空间域名
     * @memberOf eub
     * @namespace eub.dell
     */
    var dell = eub.register('eub.dell');
     
    /**
     * 戴尔要一摇换场效果
     * @memberOf msc.dell
     * @namespace eub.dell.bgmask
     * @param {object} 传入那个div要进行换场效果
     * @function
     * @example
     *     1. eub.dell.bgmask($('.div'));//入场动画方便调用
     */
    dell.bgmask = function(dom){
    }

    //添加动画

    dell.delayAni = function(obj,tag,time){
        setTimeout(function(){
            obj.addClass('animated ' + tag);
			$('.share_footer_zj img').addClass('asdf');
        },400)
    }

    dell.addAni = function(dom,attrName,attrTime){
        var $dom = dom,
            $attrName,$attrTime;

        $dom.each(function(i){
            $attrName = $(this).attr(attrName);
            $(this).removeClass('animated ' + $attrName);
        });

        $dom.each(function(i){
            $attrName = $(this).attr(attrName);
            $attrTime = $(this).attr(attrTime) ? $(this).attr(attrTime) : 0 ;
            dell.delayAni($(this),$attrName,$attrTime);
        })
    }


	dell.init = function(){
        //动画添加
        $('.choices')[0] && eub.dell.addAni($('.choices [tag-name]'),'tag-name','tag-time');
		
    }

})();

$(function(){
    eub.dell.init();
    //eub.dell.bgmask($('.div2'));
})


wx.ready(function () {
    wx.hideMenuItems({
        menuList: [
            'menuItem:copyUrl',
            'menuItem:openWithSafari',
            'menuItem:openWithQQBrowser',
            'menuItem:share:email'
        ]
    });
})

/*$('.index_di_y').click(function(){
	$('.popu').fadeIn();
})
$('.popu_close').click(function(){
	$('.popu').fadeOut();
})
*/

$('.send_envelope').click(function(evt){
	evt.stopPropagation();//阻止事件冒泡
	$('.popu2').fadeIn();
      // $('.left').hide();
})

$('.popu2').click(function(){
	$('.popu2').fadeOut();
      // $('.left').show();
})
$('#chakan').click(function(){
	wx.closeWindow();
})

//alert(document.body.clientWidth)


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
		"text-align":"center"
	})
	$dom.html('点击刷新');
	$('body').append($dom);
	$dom.on('click',function(){
		window.location.reload(true);
	})
}()