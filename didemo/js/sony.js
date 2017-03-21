/* 时间 */
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
/* index.js */

$(function () {
	
$(document).ready(function() {
    //模块尺寸
    $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_00').css('height', $(window).height());
    $('.div_00').css('width', $(window).width());             
})
//改变窗体大小时适应浏览器高度
$(window).resize(function() {
    //模块尺寸
   $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_00').css('height', $(window).height());
    $('.div_00').css('width', $(window).width());   
	        
   
});
})
//onfocus 
function change(id,path){ 
document.getElementById(id).setAttribute("src",path); 

} 
/*
$(function () {
	$(document).ready(function(){
  $(".index1").focus(function(){
    $(".index1").css("box-shadow","0px 0px 18px #e5e4f3");
  });
    $(".index1").blur(function(){
    $(".index1").css("box-shadow","none");
  });
  
  $(".index2").focus(function(){
    $(".index2").css("box-shadow","0px 0px 18px #e5e4f3");
  });
    $(".index2").blur(function(){
    $(".index2").css("box-shadow","none");
  });
  
  $(".index3").focus(function(){
    $(".index3").css("box-shadow","0px 0px 18px #e5e4f3");
  });
    $(".index3").blur(function(){
    $(".index3").css("box-shadow","none");
  });
   });
  }) */
/* sence.js */
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
})


/* type.js */
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
})
/* project.js */
$(document).ready(function() {
    //模块尺寸
    $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_project').css('height', $(window).height());
    $('.div_project').css('width', $(window).width());
	
})
//改变窗体大小时适应浏览器高度
$(window).resize(function() {
    //模块尺寸
   $('body').css('height', $(window).height());
	$('body').css('width', $(window).width());
    $('.container').css('height', $(window).height());
	$('.container').css('width', $(window).width());
    $('.div_project').css('height', $(window).height());
    $('.div_project').css('width', $(window).width());
	


});
/* productDetail.js */
  $(document).ready(function() {
            //模块尺寸
            $('body').css('height', $(window).height());
            $('body').css('width', $(window).width());
            $('.container').css('height', $(window).height());
            $('.container').css('width', $(window).width());
            $('.div_productDetail').css('height', $(window).height());
            $('.div_productDetail').css('width', $(window).width());

        })
        //改变窗体大小时适应浏览器高度
        $(window).resize(function() {
            //模块尺寸
            $('body').css('height', $(window).height());
            $('body').css('width', $(window).width());
            $('.container').css('height', $(window).height());
            $('.container').css('width', $(window).width());
            $('.div_productDetail').css('height', $(window).height());
            $('.div_productDetail').css('width', $(window).width());



        });
		

/* msvideo.js */
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

/* aspvideo.js */
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

setTimeout("layload()",500);
})

$(function() {
	//

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
//
function change(id,path){ 
document.getElementById(id).setAttribute("src",path); 
} 


$(function() {


	var bindClick = function(){
		$("#change_01").click(function(){
		
			goDown();
		})
			
		$("#change_02").click(function(){
		
			goUp();
		})
	}
	
	var length = $(".boxpic").length;
	var rowLength = Math.ceil(length / 3);
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

			$("#aspvideocontent").animate({
				top:parseInt(top) + parseInt($('.boxpic').height()) + "px"
			},600)
			
		}
		setTimeout(function(){
			bindClick();
		},600)
		
	}
	
	var goDown = function(){
		$("#change_01").unbind("click");
		$("#change_02").unbind("click");
	
		if(current < max){
			current++;
			var top = $("#aspvideocontent").css('top').replace("px","");

			$("#aspvideocontent").animate({
				top:parseInt(top) - parseInt($('.boxpic').height()) + "px"
			},600)
		}
		setTimeout(function(){
			bindClick();
		},600)
		
	}
});
/* productDetail.js */
//tab 导航
    function btn(a){ 
        var which;
        $(".btn").find('a').each(function(index,el){

            if(this == a){
                $(this).parent().addClass('active');
				$(this).parent().css("box-shadow","0px 0px 15px #e5e4f3");
                which = index;
            }else{
                $(this).parent().removeClass('active');
				$(this).parent().css("box-shadow","none");
            }
        })

        $(".main").find('.section').each(function(index,el){
            if(which == index){
                $(this).removeClass('hidden');
            }else{
                $(this).addClass('hidden');
            }
        })
    }
	
	function btn2(a){ 
	//alert(a.parent());
        var which;
        $(".btn").find('a').each(function(index,el){

            if(this == a){
                $(this).parent().addClass('active');
				$(this).parent().css("box-shadow","none");
                which = index;
            }else{
                $(this).parent().removeClass('active');
				$(this).parent().css("box-shadow","none");
            }
        })

        $(".main").find('.section').each(function(index,el){
            if(which == index){
                $(this).removeClass('hidden');
            }else{
                $(this).addClass('hidden');
            }
        })
    }

//
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
$(".tj_wrapper1").css('height',(parseInt($('.boxpic').height()*2) + parseInt(20)));
})
//
$(function(){
	$(".modulemain a").focus(function(){
		var on = $(this).attr("on");
		var off = $(this).attr("off");
		$(this).find("img").attr("src",on);
	});
	$(".modulemain a").blur(function(){
		var on = $(this).attr("on");
		var off = $(this).attr("off");
		$(this).find("img").attr("src",off);
	});
})
	

 function godF(a){
	a.css("box-shadow","0px 0px 15px #e5e4f3");
	
	
}
function godM(a){
	a.css("box-shadow","none");
	a.css("box-shadow","none");

}

function layload(){
	$(".tj_wrapper").css('height',(parseInt($('.boxpic').height()*2) + parseInt(20)));
 $(".tj_wrapper").css("overflow-y","scroll");
}

