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
            $(".productpicshow").delegate(".left","click",function(){
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
$(function () {
 $(document).ready(function(){
   $("#pic1").focus(function(){
    $("#pic1").css("box-shadow","0px 0px 18px #e5e4f3");
  });
    $("#pic1").blur(function(){
    $("#pic1").css("box-shadow","none");
  });

  
      $("#pic2").focus(function(){
    $("#pic2").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#pic2").blur(function(){
    $("#pic2").css("box-shadow","none");
  });
  
      $("#pic3").focus(function(){
    $("#pic3").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#pic3").blur(function(){
    $("#pic3").css("box-shadow","none");
  });
  
      $("#pic4").focus(function(){
    $("#pic4").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#pic4").blur(function(){
    $("#pic4").css("box-shadow","none");
  });
  
      $("#pic5").focus(function(){
    $("#pic5").css("box-shadow","0px 0px 18px #e5e4f3");
  });
  $("#pic5").blur(function(){
    $("#pic5").css("box-shadow","none");
  });
  
  
  
  });
  })