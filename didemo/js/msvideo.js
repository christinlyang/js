$(function () {
$(document).ready(function() {
    //模块尺寸
    $('body').css('height', $(window).height());
    $('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
    $('.container').css('width', $(window).width());
    $('.div_msvideo').css('height', $(window).height());
    $('.div_msvideo').css('width', $(window).width());
    
})
//改变窗体大小时适应浏览器高度
$(window).resize(function() {
    //模块尺寸
   $('body').css('height', $(window).height());
    $('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
    $('.container').css('width', $(window).width());
    $('.div_msvideo').css('height', $(window).height());
    $('.div_msvideo').css('width', $(window).width());

});
$(".tj_wrapper").css('width',(parseInt($('.boxpic').width()*3) + parseInt(30)) + 'px');
	$(".tj_wrapper").css("overflow-x","scroll");
}) 

$(function() {


	
	$(".tj_wrapper").scroll(function(){
		//alert($(this).scrollTop());
		
		if($(this).scrollRight() == 0){
			$("#left").find("img").attr("src","images/producticon06.png");
		}
		else if($(this).scrollRight() + parseInt($(this).css("width").replace("px","")) == document.getElementById("tj").scrollWidth){
			$("#right").find("img").attr("src","images/producticon07.png");
		}
		else{
			$("#left").find("img").attr("src","images/producticon04.png");
			$("#right").find("img").attr("src","images/producticon05.png");
		}
	});
	

});
$(function () {
 $(document).ready(function(){
  $("#box1").focus(function(){
    $("#box1").css("box-shadow","0px 0px 18px #9a91f5");
	
  });
  $("#box1").blur(function(){
    $("#box1").css("box-shadow","none");
  });
  
   $("#box2").focus(function(){
    $("#box2").css("box-shadow","0px 0px 18px #9a91f5");
	
  });
  $("#box2").blur(function(){
    $("#box2").css("box-shadow","none");
  });
  
   $("#box3").focus(function(){
    $("#box3").css("box-shadow","0px 0px 18px #9a91f5");
	
  });
  $("#box3").blur(function(){
    $("#box3").css("box-shadow","none");
  });
  
   $("#box4").focus(function(){
    $("#box4").css("box-shadow","0px 0px 18px #9a91f5");
	
  });
  $("#box4").blur(function(){
    $("#box4").css("box-shadow","none");
  });
  
   $("#box5").focus(function(){
    $("#box5").css("box-shadow","0px 0px 18px #9a91f5");
	
  });
  $("#box5").blur(function(){
    $("#box5").css("box-shadow","none");
  });
    
});
}) 
function startTime()
{
var today=new Date()
var h=today.getHours()
var m=today.getMinutes()
var s=today.getSeconds()
// add a zero in front of numbers<10
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
	a.parents(".bannerpic").css("box-shadow","0px 0px 15px #e5e4f3");
	
}
function godM(a){
	a.parents(".bannerpic").css("box-shadow","none");
}