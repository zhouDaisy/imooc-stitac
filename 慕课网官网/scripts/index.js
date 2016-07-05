$(document).ready(function(){
    //phone,QQ提示框
   $("#click_phone").hover(function(){
        $(".phone_message").toggle();   
   });
   $(".QQ_click").hover(function(){
        $(".QQ_message").slideDown(0);
        $(".QQ_click img").css("border","1px red solid");
        },function(){
        $(".QQ_message").slideUp(0);
        $(".QQ_click img").css("border","none");
   }); 
   //轮播图图片定义
   var imgsNode=$("#course_imgs li"),
   pagesNode=$("#course_pages li");
   imgsNode.eq(0).show().siblings().hide();
   pagesNode.eq(0).addClass("selected");
   //手动焦点
   pagesNode.each(function(index){
        var liNode=$(this);
        liNode.mouseover(function(){
        liNode.addClass("selected").siblings().removeClass("selected");
        var index=liNode.index();
        imgsNode.eq(index).fadeIn(300).siblings().fadeOut(300);
        })
    });
    //点击左右按钮播放
    $("#left_finger").click(function(){
        i--;
        if(i==-1){i=3;}
        imgsNode.eq(i).fadeIn(300).siblings().fadeOut(300);
        pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    });
   $("#right_finger").click(function(){
        autoplay();
    });
   //图片自动轮播
   var i=0;
   var time=setInterval(autoplay,2000);
   function autoplay(){
        i++;
        if(i==3){
        i=0
        }
        imgsNode.eq(i).fadeIn(300).siblings().fadeOut(300);
        pagesNode.eq(i).addClass("selected").siblings().removeClass("selected");
    }
   $("#course_loop,#course_finger").hover(function(){
        clearInterval(time);},function(){
        time=setInterval(autoplay,2000);
   });
   //course提示框
    $("#course_list nav ul li").each(function(index){
        var liNode = $(this);
        liNode.hover(function(){
        timeroutid = setTimeout(function(){
            $("#course_message .selected").removeClass("selected");
            $("#course_message .course_message").eq(index).addClass("selected");
        },300);     
    });
    $("#course_content").mouseleave(function(){
        clearTimeout(timeroutid);
       $("#course_message .selected").removeClass("selected");  
    })  
    });
 //小慕推荐向上展出
    $(".recommend_content li").hover(function(){
        $(this).children(".center").slideDown(0);
        },function(){
        $(this).children(".center").slideUp(0);
        }); 
        $(".recommend_content li").mouseenter(function(){
        $(this).children(".name,.center,.nums").animate({
        bottom:110},0);
    })
    $(".recommend_content li").mouseleave(function(){
        $(this).children(".name,.center,.nums").animate({
        bottom:62},0);
    });
    //Web
    $("#Web #branch2 .Web3,#Web #branch2 .Web4").hover(function(){
        $(this).children(".content").slideDown(0);
        },function(){
        $(this).children(".content").slideUp(0);
    }); 
    $("#Web #branch2 .Web3,#Web #branch2 .Web4").mouseenter(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:110},0);
    });
    $("#Web #branch2 .Web3,#Web #branch2 .Web4").mouseleave(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:62},0);
    });
    $("#Web #branch3").hover(function(){
        $("#Web #branch3 .Web5 .content").slideDown(0);
        },function(){
        $("#Web #branch3 .Web5 .content").slideUp(0);
    }); 
    $("#Web #branch3").mouseenter(function(){
        $("#Web #branch3 .Web5 .title,#Web #branch3 .Web5 .content,#Web #branch3 .Web5 .num").animate({
        bottom:110},0);
    });
    $("#Web #branch3").mouseleave(function(){
        $("#Web #branch3 .Web5 .title,#Web #branch3 .Web5 .content,#Web #branch3 .Web5 .num").animate({
        bottom:62},0);
    });

    $(".Java2 li").hover(function(){
        $(this).children(".content").slideDown(0);
        },function(){
        $(this).children(".content").slideUp(0);
    }); 
    $(".Java2 li").mouseenter(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:100},0);
    });
    $(".Java2 li").mouseleave(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:52},0);
    });
    $("#Java #branch2").hover(function(){
        $("#Java #branch2 .Java3 .content").slideDown(0);
        },function(){
        $("#Java #branch2 .Java3 .content").slideUp(0);
    }); 
    $("#Java #branch2").mouseenter(function(){
        $("#Java #branch2 .Java3 .title,#Java #branch2 .Java3 .content,#Java #branch2 .Java3 .num").animate({
        bottom:110},0);
    });
    $("#Java #branch2").mouseleave(function(){
        $("#Java #branch2 .Java3 .title,#Java #branch2 .Java3 .content,#Java #branch2 .Java3 .num").animate({
        bottom:62},0);
    });
    $("#PHP #branch2 .PHP2,#PHP #branch2 .PHP3").hover(function(){
        $(this).children(".content").slideDown(0);
        },function(){
        $(this).children(".content").slideUp(0);
    }); 
    $("#PHP #branch2 .PHP2,#PHP #branch2 .PHP3").mouseenter(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:110},0);
    });
    $("#PHP #branch2 .PHP2,#PHP #branch2 .PHP3").mouseleave(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:62},0);
    });
    $("#PHP #branch3").hover(function(){
        $("#PHP #branch3 .PHP4 .content").slideDown(0);
        },function(){
        $("#PHP #branch3 .PHP4 .content").slideUp(0);
    }); 
    $("#PHP #branch3").mouseenter(function(){
        $("#PHP #branch3 .PHP4 .title,#PHP #branch3 .PHP4 .content,#PHP #branch3 .PHP4 .num").animate({
        bottom:110},0);
    });
    $("#PHP #branch3").mouseleave(function(){
        $("#PHP #branch3 .PHP4 .title,#PHP #branch3 .PHP4 .content,#PHP #branch3 .PHP4 .num").animate({
        bottom:62},0);
    });
    $("#Linux .branch1,#Linux .branch2,#Linux .branch3,#Linux .branch4").hover(function(){
        $(this).children(".content").slideDown(0);
        },function(){
        $(this).children(".content").slideUp(0);
    }); 
    $("#Linux .branch1,#Linux .branch2,#Linux .branch3,#Linux .branch4").mouseenter(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:110},0);
    });
    $("#Linux .branch1,#Linux .branch2,#Linux .branch3,#Linux .branch4").mouseleave(function(){
        $(this).children(".title,.content,.num").animate({
        bottom:62},0);
    });
    //footer
    $("#footer .weixin").hover(function(){
        $(".footer_sns_emagges").toggle();   
    });
}) 