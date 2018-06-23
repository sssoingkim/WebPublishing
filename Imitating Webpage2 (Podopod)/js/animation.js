$(function(){

	var sec2Top = $('#section2').offset().top-200;
	var sec3Top = $('#section3').offset().top-200;
	var sec4Top = $('#section4').offset().top-200;
	var sec5Top = $('#section5').offset().top-200;
	var sec6Top = $('#section6').offset().top;
	
	var s1=0, s2=0, s3=0, s4=0, s5=0, s6=0;

	$(window).scroll(function(){
		if($(window).scrollTop() >= sec2Top && $(window).scrollTop() < sec3Top ){
			if(s2==0){
				section2();
				s1=0;s2=1;s3=0;s4=0;s5=0;s6=0;
			}
		}
		
		else if($(window).scrollTop() >= sec3Top && $(window).scrollTop() < sec4Top ){
			if(s3==0){
				section3();
				s1=0;s2=0;s3=1;s4=0;s5=0;s6=0;
			}
		}
		
		else if($(window).scrollTop() >= sec4Top && $(window).scrollTop() < sec5Top ){
			if(s4==0){
				section4();
				s1=0;s2=0;S3=0;s4=1;s5=0;s6=0;
			}
		}
		
		else if($(window).scrollTop() >= sec5Top && $(window).scrollTop() < sec6Top ){
			if(s5==0){
				section5();
				s1=0;s2=0;S3=0;s4=0;s5=1;s6=0;
			}
		}
		
	});
	
	
	function section2(){
		$('.section2-image-wrap').animate({top:'-800'},0)
								 .animate({top:'300'},1500)
								 .animate({top:'150'},1000);
	}

	function section3(){
		$('.section3-image-wrap>li').eq(0)
								 .animate({bottom:'-1000',opacity:'1'},0)
								 .animate({bottom:'-20'},2000)
								 .delay(1000)
								 .animate({opacity:'0'},1000);
		$('.section3-image-wrap>li').eq(1)
								 .animate({opacity:'0'},0)
								 .delay(3000)
								 .animate({opacity:'1'},1000);
	}
	
	function section4(){
		$('.section4-image-wrap').animate({bottom:'-1000'},0)
								 .animate({bottom:'-150'},2500);
		$('.section4-image-wrap>li').eq(1)
								 .animate({bottom:'-650'},0)
								 .delay(2500)
								 .animate({bottom:'-300'},2000)
								 .delay(500)
								 .animate({bottom:'-650'},1500);
	}

	function section5(){
		$('.section5-image-wrap>li').eq(1)
								 .animate({bottom:'50'},0)
								 .animate({bottom:'200'},2000);
		$('.section5-image-wrap>li').eq(2)
								 .animate({bottom:'50'},0)
								 .animate({bottom:'350'},2000);
		
	}
section6();
	function section6(){
		
		$('.section6-image-effect>li').eq(0).animate({opacity:1},200).delay(200).animate({opacity:0},200);
		$('.section6-image-effect>li').eq(1).animate({opacity:1},700).delay(200).animate({opacity:0},200);
		$('.section6-image-effect>li').eq(2).animate({opacity:1},900).delay(200).animate({opacity:0},200);
		$('.section6-image-effect>li').eq(3).animate({opacity:1},1100).delay(200).animate({opacity:0},200);
		$('.section6-image-effect>li').eq(4).animate({opacity:1},1300).delay(200).animate({opacity:0},200);
		$('.section6-image-effect>li').eq(5).animate({opacity:1},1500).delay(200).animate({opacity:0},200);


		$('.section6-image-wrap2>li').eq(0)
									 .animate({top:'1000'},0)
									 .animate({top:'730'},1500);

		$('.section6-image-wrap2>li').eq(1)
									 .animate({top:'1000'},0)
									 .delay(1500)
									 .animate({top:'700'},1500);
									 
	}


});