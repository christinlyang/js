
//section 3
$(function () {
$(document).ready(function() {
    //模块尺寸
    $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_pic').css('height', $(window).height());
    $('.div_pic').css('width', $(window).width());

})
//改变窗体大小时适应浏览器高度
$(window).resize(function() {
    //模块尺寸
   $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_pic').css('height', $(window).height());
    $('.div_pic').css('width', $(window).width());


});
    $(".tj_wrapper1").css('height',(parseInt($('.boxpic1').height()*2) + parseInt(20)) + 'px');
	$(".tj_wrapper1").css("overflow-y","scroll");	
})


$(function() {


	var bindClick = function(){
		$("#change_01").click(function(){
			//alert("01_click");
			goDown();
		})
			
		$("#change_02").click(function(){
			//alert("02_click");
			goUp();
		})
	}
	
	var length = $(".boxpic1").length;
	var rowLength = Math.ceil(length / 2);
	var max = rowLength - 2;
	var current = 0;
	if(max < 0){
		$("#change").css("opacity","0");
	}
	else{
		bindClick();
	}
	
	
	
	var goUp = function(){		
		$("#change_01").unbind("click");
		$("#change_02").unbind("click");

		if(current <= max && current != 0){
			var top = $("#aspvideocontent").css('top').replace("px","");
			current--;
			
			//$("#aspvideocontent").css("top",parseInt(top) + parseInt($('.boxpic1').height()) + "px");
			$("#aspvideocontent").animate({
				top:parseInt(top) + parseInt($('.boxpic1').height()) + parseInt(10) + "px"
			},400)
			
		}
		setTimeout(function(){
			bindClick();
		},400)

	}
	
	var goDown = function(){
		$("#change_01").unbind("click");
		$("#change_02").unbind("click");

		if(current < max){
			current++;
			var top = $("#aspvideocontent").css('top').replace("px","");

			//$("#aspvideocontent").css("top",parseInt(top) - parseInt($('.boxpic1').height()) + "px");

			$("#aspvideocontent").animate({
				top:parseInt(top) - parseInt($('.boxpic1').height()) - parseInt(10) + "px"
			},400)
		}
		setTimeout(function(){
			bindClick();
		},400)

	}
});


//section4
$(function () {
$(document).ready(function() {
    //模块尺寸
    $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_aspvideo').css('height', $(window).height());
    $('.div_aspvideo').css('width', $(window).width());

})
//改变窗体大小时适应浏览器高度
$(window).resize(function() {
    //模块尺寸
   $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_aspvideo').css('height', $(window).height());
    $('.div_aspvideo').css('width', $(window).width());


});
    $(".tj_wrapper2").css('height',(parseInt($('.boxpic2').height()*2) + parseInt(15)) + 'px');
	$(".tj_wrapper2").css("overflow-y","scroll");	
})


$(function() {


	var bindClick = function(){
		$("#change_01").click(function(){
			//alert("01_click");
			goDown();
		})
			
		$("#change_02").click(function(){
			//alert("02_click");
			goUp();
		})
	}
	
	var length = $(".boxpic2").length;
	var rowLength = Math.ceil(length / 2);
	var max = rowLength - 2;
	var current = 0;
	if(max < 0){
		$("#change").css("opacity","0");
	}
	else{
		bindClick();
	}
	
	
	
	var goUp = function(){		
		$("#change_01").unbind("click");
		$("#change_02").unbind("click");

		if(current <= max && current != 0){
			var top = $("#aspvideocontent2").css('top').replace("px","");
			current--;
			
			//$("#aspvideocontent2").css("top",parseInt(top) + parseInt($('.boxpic2').height()) + "px");
			$("#aspvideocontent2").animate({
				top:parseInt(top) + parseInt($('.boxpic2').height()) + parseInt(10) + "px"
			},400)
			
		}
		setTimeout(function(){
			bindClick();
		},400)

	}
	
	var goDown = function(){
		$("#change_01").unbind("click");
		$("#change_02").unbind("click");

		if(current < max){
			current++;
			var top = $("#aspvideocontent2").css('top').replace("px","");

			//$("#aspvideocontent2").css("top",parseInt(top) - parseInt($('.boxpic2').height()) + "px");

			$("#aspvideocontent2").animate({
				top:parseInt(top) - parseInt($('.boxpic2').height()) - parseInt(10) + "px"
			},400)
		}
		setTimeout(function(){
			bindClick();
		},400)

	}
});

