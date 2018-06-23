$(function(){

	var s1=0, s2=0, s3=0;
	var setId='';
	
	nextSlide1();
	autoPlay();

	
	//////////////////////자동&정지/////////////////////////
	function autoPlay(){
		setId = setInterval(nextSlide, 8000);
	}
	function stopPlay(){
		clearInterval(setId);
	}
	
	
	//////////////////네이게이션 라운드 버튼 클릭 시 실행////////////////////
	$('.nav-round-bt1').on({
		click:	function(){
					/*
					if(s2==1 || s3==1){ prevSlide1(); }	//슬라이드 2번 3번이 실행 중일 때만 실행
					*/
					if(s1!=1){ prevSlide1(); }
				}
	});
	$('.nav-round-bt2').on({
		click:	function(){
					if(s1==1){ nextSlide2(); }		//슬라이드 1번이 실행중일 때는 nextSlide2()
					else if(s3==1){ prevSlide2(); }	//슬라이드 3번이 실행중일 때는 prevSlide2()
				}
	});
	$('.nav-round-bt3').on({
		click:	function(){
					if(s1==1 || s2==1){ nextSlide3(); }	//슬라이드 1번과 2번이 실행 중일 때만 실행 if(s3!==1)와 같음
				}
	});
	

	////////////////롤 오버시 자동 실행 중지/////////////////
	$('.Arrow-Anchor-bt').on({
		mouseenter:	function(){
						stopPlay();
					},
		mouseleave:	function(){
						autoPlay();
					},
		focusin:	function(){
						stopPlay();
					},
		focusout:	function(){
						autoPlay();
					}
	});

	
	/////////////////좌우 화살 버튼 이벤트 함수/////////////////
	$('.left-Arrow-Anchor-bt').on({
		click:		function(){
						prevSlide();
					}
	});
	$('.right-Arrow-Anchor-bt').on({
		click:		function(){
						nextSlide();
					}
	});
	
	/////////////////다음에 실행할 함수/////////////////////////
	function nextSlide(){
		if(s1==1){
			nextSlide2();
		}
		else if(s2==1){
			nextSlide3();
		}
		else if(s3==1){
			nextSlide1();
		}
	}
	function nextSlide1(){
		s1=1, s2=0, s3=0;
		roundBt1();
		slide1Ani();
		$('.slide3').stop().animate({left:'0%'},0).animate({left:'-100%'},600)
		$('.slide1').stop().animate({left:'100%'},0).animate({left:'0%'},600)
		$('.slide2').stop().animate({left:'200%'},0).animate({left:'100%'},600)
	}
	function nextSlide2(){
		s1=0, s2=1, s3=0;
		roundBt2();
		slide2Ani();
		$('.slide1').stop().animate({left:'0%'},0).animate({left:'-100%'},600)
		$('.slide2').stop().animate({left:'100%'},0).animate({left:'0%'},600)
		$('.slide3').stop().animate({left:'200%'},0).animate({left:'100%'},600)
	}	
	function nextSlide3(){
		s1=0, s2=0, s3=1;
		roundBt3();
		slide3Ani();
		$('.slide2').stop().animate({left:'0%'},0).animate({left:'-100%'},600)
		$('.slide3').stop().animate({left:'100%'},0).animate({left:'0%'},600)
		$('.slide1').stop().animate({left:'200%'},0).animate({left:'100%'},600)
	}
	
	//////////////이전슬라이드 실행 함수/////////////////////
	function prevSlide(){
		if(s1==1){
			prevSlide3();
		}
		else if(s2==1){
			prevSlide1();
		}
		else if(s3==1){
			prevSlide2();
		}
	}
	
	function prevSlide3(){
		s1=0, s2=0, s3=1;
		roundBt3();
		slide3Ani();
		$('.slide2').stop().animate({left:'-200%'},0).animate({left:'-100%'},600)
		$('.slide3').stop().animate({left:'-100%'},0).animate({left:'0%'},600)
		$('.slide1').stop().animate({left:'0%'},0).animate({left:'100%'},600)
	}
	function prevSlide2(){
		s1=0, s2=1, s3=0;
		roundBt2();
		slide2Ani();
		$('.slide1').stop().animate({left:'-200%'},0).animate({left:'-100%'},600)
		$('.slide2').stop().animate({left:'-100%'},0).animate({left:'0%'},600)
		$('.slide3').stop().animate({left:'0%'},0).animate({left:'100%'},600)
	}
	function prevSlide1(){
		s1=1, s2=0, s3=0;
		roundBt1();
		slide1Ani();
		$('.slide3').stop().animate({left:'-200%'},0).animate({left:'-100%'},600)
		$('.slide1').stop().animate({left:'-100%'},0).animate({left:'0%'},600)
		$('.slide2').stop().animate({left:'0%'},0).animate({left:'100%'},600)
	}
	
	//슬라이드1 애니메이션 함수
	function slide1Ani(){	
		$('.slide1-1-tit').stop().animate({left:300},1000).animate({left:30},1000);
		$('.slide1-2-tit').stop().animate({opacity:0},1000).animate({opacity:1},1000);
		$('.slide1-3').stop().animate({bottom:1000},1000).animate({bottom:0},1000);
		$('.slide1-4').stop().animate({bottom:-500},1000).animate({bottom:35},1000);
		$('.slide1-5').stop().animate({bottom:-500},1000).animate({bottom:75},1000);
		$('.slide1-6').stop().animate({top:-500, right:-500},1000).animate({top:50, right:70},1000);
		$('.slide1-7').stop().animate({top:-500, right:-500},1000).animate({top:40, right:200},1300);
	}
	
	//슬라이드2 애니메이션 함수	
	function slide2Ani(){
		$('.slide2-1-tit').stop().animate({left:300},1000).animate({left:30},1000);
		$('.slide2-2-tit').stop().animate({opacity:0},1000).animate({opacity:1},1000);
		$('.slide2-3').stop().animate({width:0,bottom:500},1000).animate({width:544,bottom:0},1000);
		$('.slide2-4').stop().animate({bottom:1000},1000).animate({bottom:110},1000);
		$('.slide2-5').stop().animate({bottom:-500},1000).animate({bottom:30},1000);
	}
	
	//슬라이드3 애니메이션 함수	
	function slide3Ani(){
		$('.slide3-1-tit').stop().animate({left:300},1000).animate({left:30},1000);
		$('.slide3-2-tit').stop().animate({opacity:0},1000).animate({opacity:1},1000);
		$('.slide3-3').stop().animate({width:0},1000).animate({width:685},1000);
		$('.slide3-4').stop().animate({top:-500},1000).animate({top:140},1000);
		$('.slide3-5').stop().animate({top:-500},1000).animate({top:110},1200);
		$('.slide3-6').stop().animate({top:-500},1000).animate({top:110},1100);
		$('.slide3-7').stop().animate({top:-500},1000).animate({top:160},1000);
		$('.slide3-8').stop().animate({top:-500},1000).animate({top:100},900);
		$('.slide3-9').stop().animate({top:-500},1000).animate({top:186},1000);
		$('.slide3-10').stop().animate({top:-500},1000).animate({top:225},800);
		$('.slide3-11').stop().animate({top:-500},1000).animate({top:250},1000);
		$('.slide3-12').stop().animate({top:-500},1000).animate({top:230},1100);
	}
	
	///////////////////네비게이션 둥근 버튼 함수//////////////////
		
	function roundBt1(){
		$('.nav-round-bt1').css({backgroundPosition:'0 bottom'});
		$('.nav-round-bt2').css({backgroundPosition:'-16px bottom'});
		$('.nav-round-bt3').css({backgroundPosition:'-16px bottom'});
	}
	function roundBt2(){
		$('.nav-round-bt1').css({backgroundPosition:'-16px bottom'});
		$('.nav-round-bt2').css({backgroundPosition:'0 bottom'});
		$('.nav-round-bt3').css({backgroundPosition:'-16px bottom'});
	}
	function roundBt3(){
		$('.nav-round-bt1').css({backgroundPosition:'-16px bottom'});
		$('.nav-round-bt2').css({backgroundPosition:'-16px bottom'});
		$('.nav-round-bt3').css({backgroundPosition:'0 bottom'});
	}


	
	
	
	
	
	
	
	
});