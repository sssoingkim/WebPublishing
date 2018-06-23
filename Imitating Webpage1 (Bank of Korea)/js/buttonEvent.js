$(function(){
	
	$('.header-nav-bg').slideUp(0);
	$('.nav-bt-sub').slideUp(0);

	
	//이미지 클릭 시 히든박스 나타남
	$('.container-sec1-col-2-Anchor-bt2').on({
		click:	function(){
					$('.hidden-box1').fadeIn(600);
					$('.hidden-box2').fadeOut(600);
				}
		
	});
	$('.hidden-box1-close-bt').on({
		click:	function(){
					$('.hidden-box1').fadeOut(300);
				}
	});
	
	$('.container-sec1-col-3-Anchor-bt2').on({
		click:	function(){
					$('.hidden-box1').fadeOut(600);
					$('.hidden-box2').fadeIn(600);
				}
		
	});
	$('.hidden-box2-close-bt').on({
		click:	function(){
					$('.hidden-box2').fadeOut(300);
				}
	});
	
	//////////////////////////서브메뉴///////////////////////////////
	
	//마우스 롤오버시 서브메뉴 펼침.
	$('.nav-Bt').on({
		click:	function(){
					$('.header-nav-bg').slideDown(300);
					$('.nav-bt-sub').slideDown(300);
				}
	});
	
	//마우스 롤아웃시 서브메뉴 접힘.
	$('.header-nav').on({
		mouseleave:		function(){
							$('.header-nav-bg').slideUp(300);
							$('.nav-bt-sub').slideUp(300);
						}
	});
	
	
	///////////////////////////메인메뉴//////////////////////////////
	//메인메뉴 버튼에 롤오버시 버튼이미지 색상변경(하이라이트)
	/*
	$('.nav-Bt').on({
		mouseenter:		function(){
							$(this).css({backgroundImage:'url(img/gnb01On.gif)', borderBottom:'5px solid #cfa761'});
						},
		focusin:		function(){
							$(this).css({backgroundImage:'url(img/gnb01On.gif)', borderBottom:'5px solid #cfa761'});
						},						
		mouseleave:	function(){
							$(this).css({backgroundImage:'url(img/gnb01Off.gif)', borderBottom:'0px solid #cfa761'});
						},
		focusout:	function(){
							$(this).css({backgroundImage:'url(img/gnb01Off.gif)', borderBottom:'0px solid #cfa761'});
						}						
	});		*/
	

	//Nav 메인메뉴 버튼 이벤트 입니다.
	$('.nav-Bt').on({
		mouseenter:	function(){
						var bgImg = $(this).css('backgroundImage').replace('Off','On');
									$(this).css({backgroundImage:bgImg, borderBottom:'5px solid #cfa761'});	
					},
		mouseleave:	function(){
						var bgImg = $(this).css('backgroundImage').replace('On','Off');
									$(this).css({backgroundImage:bgImg, borderBottom:'0px solid #cfa761'});	
					},	
		//focusin					
		focus:	function(){
						var bgImg = $(this).css('backgroundImage').replace('Off','On');
									$(this).css({backgroundImage:bgImg, borderBottom:'5px solid #cfa761'});	
					},
		//focusout					
		blur:	function(){
						var bgImg = $(this).css('backgroundImage').replace('On','Off');
									$(this).css({backgroundImage:bgImg, borderBottom:'0px solid #cfa761'});	
					}						
					
	});
	
	//Nav 서브메뉴 버튼 이벤트 입니다.
	$('.sub-Bt').on({
		mouseenter:	function(){
						var bgImg = $(this).css('backgroundImage').replace('Off','On');
									$(this).css({backgroundImage:bgImg});	
					},
		mouseleave:	function(){
						var bgImg = $(this).css('backgroundImage').replace('On','Off');
									$(this).css({backgroundImage:bgImg});	
					},
		focusin:	function(){
						var bgImg = $(this).css('backgroundImage').replace('Off','On');
									$(this).css({backgroundImage:bgImg});	
					},
		focusout:	function(){
						var bgImg = $(this).css('backgroundImage').replace('On','Off');
									$(this).css({backgroundImage:bgImg});	
					}						
					
	});
	
	
	
	
	
});