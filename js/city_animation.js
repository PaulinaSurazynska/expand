$(document).ready(function () {
	
	var winWidth = $(window).width();

	//Detect the width of the window and if is smaller than 767px remove images
	if (winWidth < 768){
		$("#img4, #img8, #img9, #img10, #img11, #img12, #img17, #img18, #img19, #img20, #img21, #img22, #img23, #img24, #img25, #img26, #img27, #img28, #img29, #img30, #img31, #img32, #img33, #img34").remove();
	}

	//Animate "The City"
	setTimeout(function(){
		$("#ground").addClass("animated bounce");
	}, 500);
	
	setTimeout(function(){
		$("#cloud").addClass("animated bounceIn");		
	}, 5000);

	setTimeout(function(){
		$("#img1").addClass("animated bounce");		
	}, 900);
	setTimeout(function(){
		$("#img2").addClass("animated bounce");		
	}, 1100);
	setTimeout(function(){
		$("#img3").addClass("animated bounce");		
	}, 1200);
	setTimeout(function(){
		$("#img4").addClass("animated bounce");		
	}, 1200);
	setTimeout(function(){
		$("#img5").addClass("animated bounce");		
	}, 1300);
	setTimeout(function(){
		$("#img6").addClass("animated bounce");		
	}, 1400);
	setTimeout(function(){
		$("#img7").addClass("animated bounce");		
	}, 1600);
	setTimeout(function(){
		$("#img8").addClass("animated bounce");		
	}, 1700);
	setTimeout(function(){
		$("#img9").addClass("animated bounce");		
	}, 1800);
	setTimeout(function(){
		$("#img10").addClass("animated bounce");		
	}, 1700);
	setTimeout(function(){
		$("#img11").addClass("animated bounce");		
	}, 1700);
	setTimeout(function(){
		$("#img12").addClass("animated bounce");		
	}, 1800);
	setTimeout(function(){
		$("#img13").addClass("animated bounce");		
	}, 1900);
	setTimeout(function(){
		$("#img14").addClass("animated bounce");		
	}, 2000);
	setTimeout(function(){
		$("#img15").addClass("animated bounce");		
	}, 2100);
	setTimeout(function(){
		$("#img16").addClass("animated bounce");		
	}, 2100);
	setTimeout(function(){
		$("#img17").addClass("animated bounce");		
	}, 2200);
	setTimeout(function(){
		$("#img18").addClass("animated bounce");		
	}, 2300);
	setTimeout(function(){
		$("#img19").addClass("animated bounce");		
	}, 2350);
	setTimeout(function(){
		$("#img20").addClass("animated bounce");		
	}, 2400);
	setTimeout(function(){
		$("#img21").addClass("animated bounce");		
	}, 2400);
	setTimeout(function(){
		$("#img22").addClass("animated bounce");		
	}, 2500);
	setTimeout(function(){
		$("#img23").addClass("animated bounce");		
	}, 2500);
	setTimeout(function(){
		$("#img24").addClass("animated bounce");		
	}, 2600);
	setTimeout(function(){
		$("#img25").addClass("animated bounce");		
	}, 2700);
	setTimeout(function(){
		$("#img26").addClass("animated bounce");		
	}, 2800);
	setTimeout(function(){
		$("#img27").addClass("animated bounce");		
	}, 2850);
	setTimeout(function(){
		$("#img28").addClass("animated bounce");		
	}, 2850);
	setTimeout(function(){
		$("#img29").addClass("animated bounceLeft");		
	}, 3200);
	setTimeout(function(){
		$("#img30").addClass("animated bounce");		
	}, 3500);
	setTimeout(function(){
		$("#img31").addClass("animated bounce");		
	}, 3500);
	setTimeout(function(){
		$("#img32").addClass("animated bounce");		
	}, 3500);
	setTimeout(function(){
		$("#img33").addClass("animated bounce");		
	}, 3600);
	setTimeout(function(){
		$("#img34").addClass("animated bounceLeft");		
	}, 4000);	
	
	$(".sm_icons").mouseover(function(){
		$(this).addClass("animated bounceIn");
		
	});
	$(".sm_icons").mouseout(function(){
		$(this).removeClass("animated bounceIn");
	
	});
});

	




