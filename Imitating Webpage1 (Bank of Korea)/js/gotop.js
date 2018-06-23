$(function(){
	
	//스크롤 이동 거리 50픽셀 이상이면 goTop메뉴 버튼 나타남
	//50픽셀 이하면 goTop메뉴 버튼 사라짐
	
	$(window).scroll(function(){
		if( $(window).scrollTop() >= 50 ){
			$('.goTop-wrap').fadeIn(600);
		}
		else{
			$('.goTop-wrap').fadeOut(600);
		}
	});
	
	
	
	$('.goTop-Bt').on({
		click:	function(){
					$('html,body').animate({scrollTop:0},600);
				}
		
	});
 
});