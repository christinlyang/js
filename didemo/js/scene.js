$(function () {

$(document).ready(function() {
    //模块尺寸
    $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_02').css('height', $(window).height());
    $('.div_02').css('width', $(window).width());

})
//改变窗体大小时适应浏览器高度
$(window).resize(function() {
    //模块尺寸
   $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_02').css('height', $(window).height());
    $('.div_02').css('width', $(window).width());


});
$(".tj_wrapper").css('height',(parseInt($('.boxpic').height()*3) + parseInt(30)) + 'px');
	$(".tj_wrapper").css("overflow-y","scroll");
})
$(function() {
 $(document).ready(function(){
  $("#boxpic1").focus(function(){
    $("#boxpic1").css("box-shadow","0px 0px 18px #9a91f5");
  });
  $("#boxpic1").blur(function(){
    $("#boxpic1").css("box-shadow","none");
  });
  
    $("#boxpic2").focus(function(){
    $("#boxpic2").css("box-shadow","0px 0px 18px #9a91f5");
  });
  $("#boxpic2").blur(function(){
    $("#boxpic2").css("box-shadow","none");
  });
  
    $("#boxpic3").focus(function(){
    $("#boxpic3").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic3").blur(function(){
    $("#boxpic3").css("box-shadow","none");
  });
  
    $("#boxpic4").focus(function(){
    $("#boxpic4").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic4").blur(function(){
    $("#boxpic4").css("box-shadow","none");
  });
  
    $("#boxpic5").focus(function(){
    $("#boxpic5").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic5").blur(function(){
    $("#boxpic5").css("box-shadow","none");
  });
  
    $("#boxpic6").focus(function(){
    $("#boxpic6").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic6").blur(function(){
    $("#boxpic6").css("box-shadow","none");
  });
  
    $("#boxpic7").focus(function(){
    $("#boxpic7").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic7").blur(function(){
    $("#boxpic7").css("box-shadow","none");
  });
  
    $("#boxpic8").focus(function(){
    $("#boxpic8").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic8").blur(function(){
    $("#boxpic8").css("box-shadow","none");
  });
  
    $("#boxpic9").focus(function(){
    $("#boxpic9").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic9").blur(function(){
    $("#boxpic9").css("box-shadow","none");
  });
  
    $("#boxpic10").focus(function(){
    $("#boxpic10").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic10").blur(function(){
    $("#boxpic10").css("box-shadow","none");
  });
  
    $("#boxpic11").focus(function(){
    $("#boxpic11").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic11").blur(function(){
    $("#boxpic11").css("box-shadow","none");
  });
  
    $("#boxpic12").focus(function(){
    $("#boxpic12").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic12").blur(function(){
    $("#boxpic12").css("box-shadow","none");
  });
  
    $("#boxpic13").focus(function(){
    $("#boxpic13").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic13").blur(function(){
    $("#boxpic13").css("box-shadow","none");
  });
  
    $("#boxpic14").focus(function(){
    $("#boxpic14").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic14").blur(function(){
    $("#boxpic14").css("box-shadow","none");
  });
  
    $("#boxpic15").focus(function(){
    $("#boxpic15").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic15").blur(function(){
    $("#boxpic15").css("box-shadow","none");
  });
  
    $("#boxpic16").focus(function(){
    $("#boxpic16").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic16").blur(function(){
    $("#boxpic16").css("box-shadow","none");
  });
  
    $("#boxpic17").focus(function(){
    $("#boxpic17").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic17").blur(function(){
    $("#boxpic17").css("box-shadow","none");
  });
  
  
    $("#boxpic18").focus(function(){
    $("#boxpic18").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#boxpic18").blur(function(){
    $("#boxpic18").css("box-shadow","none");
  });

 
  
});
})
$(function() {


	
	$(".tj_wrapper").scroll(function(){
		//alert($(this).scrollTop());
		
		if($(this).scrollTop() == 0){
			$("#change_02").find("img").attr("src","images/producticon06.png");
		}
		else if($(this).scrollTop() + parseInt($(this).css("height").replace("px","")) == document.getElementById("tj").scrollHeight){
			$("#change_01").find("img").attr("src","images/producticon07.png");
		}
		else{
			$("#change_02").find("img").attr("src","images/producticon04.png");
			$("#change_01").find("img").attr("src","images/producticon05.png");
		}
	});
	

});
function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()

m=checkTime(m)
s=checkTime(s)
document.getElementById('txt').innerHTML=h+":"+m
t=setTimeout('startTime()',500)
}

function checkTime(i)
{
if (i<10) 
  {i="0" + i}
  return i
}

 function godF(a){
	a.css("box-shadow","0px 0px 15px #e5e4f3");
	
}
function godM(a){
	a.css("box-shadow","none");
}