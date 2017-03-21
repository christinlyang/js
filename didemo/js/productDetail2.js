function change(id,path){ 
document.getElementById(id).setAttribute("src",path); 

} 
 function godF(a){
	a.css("box-shadow","0px 0px 15px #e5e4f3");
	
}
function godM(a){
	a.css("box-shadow","none");
}
$(function () {
	
            var config = {
                btn:{
                    left:$(".left"),
                    right:$(".right")
                },
                disClass: {
                    left: "left-dis",
                    right: "right-dis"
                },
                wrapLength: $("#list").width(),
                listLength: $("#list ul").width(),
                $list: $("#list .wrap ul")
            };
            $(".product_picshow").delegate(".left","click",function(){
                scrollList(config,"left");
            }).delegate(".right","click",function(){
                scrollList(config,"right");
            });
           
         


function scrollList(config,type){
    var $list = config.$list;
    var wrapLength = config.wrapLength;
    var listLength = config.listLength;
    var btn = config.btn;
    var disClass = config.disClass;
    switch (type) {
        case "left" :
            var left = parseInt($list.css("left"));
            var scrollLeft;
            if(left+wrapLength>=0){
                scrollLeft = 0;
                btn.left.addClass(disClass.left);
            } else {
                scrollLeft = left+wrapLength;
                btn.right.removeClass(disClass.right);
            }
            $list.animate({left :scrollLeft});
            break;
        case "right" :
            var left = parseInt($list.css("left"));
            var scrollLeft;
            if(listLength+left-wrapLength<wrapLength){
                scrollLeft = -(listLength-wrapLength);
                btn.right.addClass(disClass.right);
            } else {
                scrollLeft = left-wrapLength;
                btn.left.removeClass(disClass.left);
            }
            $list.animate({left :scrollLeft});
            break;
       
        
        default:
        return;
    }
};
})





$(function() {


	
	$(".tj_wrapper1").scroll(function(){
		//alert($(this).scrollTop());
		
		if($(this).scrollTop() == 0){
			$(".right_01").find("img").attr("src","images/producticon06.png");
		}
		else if($(this).scrollTop() + parseInt($(this).css("height").replace("px","")) == document.getElementById("tj1").scrollHeight){
			$(".left_01").find("img").attr("src","images/producticon07.png");
		}
		else{
			$(".right_01").find("img").attr("src","images/producticon04.png");
			$(".left_01").find("img").attr("src","images/producticon05.png");
		}
	});
	

});


$(function() {


	
	$(".tj_wrapper2").scroll(function(){
		//alert($(this).scrollTop());
		
		if($(this).scrollTop() == 0){
			$(".right_02").find("img").attr("src","images/producticon06.png");
		}
		else if($(this).scrollTop() + parseInt($(this).css("height").replace("px","")) == document.getElementById("tj2").scrollHeight){
			$(".left_02").find("img").attr("src","images/producticon07.png");
		}
		else{
			$(".right_02").find("img").attr("src","images/producticon04.png");
			$(".left_02").find("img").attr("src","images/producticon05.png");
		}
	});
	

});