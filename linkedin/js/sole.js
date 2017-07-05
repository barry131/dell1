$(window).load(function() {
	$("#loading").fadeIn(500);
})               
    
var cons = {

};
$(function(){
	$('.struts').click(function(){
		$('.pop1').show();
	});
	$('.answer_one').click(function(){
		$(this).parents('.answer').find('.answer_sel').removeClass('answer_sty');
		$(this).children('.answer_sel').addClass('answer_sty');
	});
	$('.next_con').click(function(){
		var $temp = $(".que_sel  .answer_sty").parent().attr('data');

		// alert($temp)

		var $que = $(this).parent('.question');
		if($('.que_sel').find('.answer_sty').length == 0){

		return false;
		}
		if($que.next('.question').length == 0){
			return false;
		}
		$que.next().addClass('que_sel');
		$que.removeClass('que_sel');
	});

});
  $(document).ready(function() {  
        $('.pic3').click(function(){
        	// $(this).wrap("<a href='http://www.baidu.com'></a>")
            location.href="http://www.chitu.com/download/jump.html?_fr=dell_calculator&mktapp=1"
    });
});
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

