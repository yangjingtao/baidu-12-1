$(function(){
    $("#fullpage").mousedown(function(e){
        e.preventDefault();
    })
    $("#fullpage").mousemove(function(e){
        e.preventDefault();
    })

    var ch=$(window).height();
    var num=0;
    var flag=true;

    touch.on("body","swipeup","#fullpage",function(e){
        if(!flag){
            return;
        }
        num++;
        if(num==$("section").length){
            num=$("section").length-1;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*ch);
    })
    
    touch.on("body","swipedown","#fullpage",function(){
        if(!flag){
            return;
        }
        num--;
        if(num==-1){
            num=0;
            return;
        }
        flag=false;
        $("#fullpage").css("marginTop",-num*ch);
    });

    $("section").eq(1).css("height",(ch+100)+"px");
    $(window).resize(function(){
        ch=$(window).height();
        $("#fullpage").css("marginTop",-num*ch);
    });
    var flag2=true;
    $(".menu").click(function () {
        if(flag2){
            $(".menu-option").css("display","block");
            $(this).find(".menu-tline").css({
                transform: "translate(0,5px) rotate(45deg);",
            });
            $(this).find(".menu-bline").css({
                transform: "translate(0,-5px) rotate(-45deg);",
            });
            $(".menu-option a").each(function(index,obj){
               $(obj).css({
                   animation:"menu 1s linear forwards "+index*0.2+"s",
               })
            });
            flag2=false;
        }else{
            $(this).find(".menu-tline").css({
                transform: "translate(0,0) rotate(0deg);",
            });
            $(this).find(".menu-bline").css({
                transform:" translate(0,0px) rotate(0deg);",
            });
            $(".menu-option a").each(function(index,obj) {
                $(obj).css({
                    animation: "menu1 1s linear forwards " + (1.2 - index * 0.2) + "s"
                })

            });
                flag2=true;
            setTimeout(function(){
                $(".menu-option").css("display","none");
            },1200);
        }
    });

    $("section").find(".sright-text-box").css({
        opacity:0
    });
    $("section").find(".sleft-text-box").css({
        opacity:0
    });

    $("#fullpage")[0].addEventListener("webkitTransitionEnd",function(){
        flag=true;
        $("section").each(function (index,obj) {
            $(obj).find(".sright-text-box").css({
                animation:"img1-rslide 2s linear forwards"
            })
            $(obj).find(".sleft-text-box").css({
                animation:"img1-lslide 2s linear forwards"
            })
            if(num==0){
                return;
            }else if(num==index){
                $(obj).find(".sright-text-box").css({
                    animation:"img-rslide 2s linear forwards"
                })
                $(obj).find(".sleft-text-box").css({
                    animation:"img-lslide 2s linear forwards"
                })
            }

            
        })
        
    });
})