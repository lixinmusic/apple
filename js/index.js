//nav
$(function() {
    $('.nav-phone .menu').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('change');
        if ($(this).hasClass('change')) {
            $('body').css('overflow', 'hidden')
        } else {
            $('body').css('overflow', 'inherit')
        }

    })

    $('.header .search').on('click', function (e) {
        e.preventDefault();
        $('.header .nav').addClass('searching');
        $('.xiaoshi').css('display', 'none');
        $('.search-box').addClass('active');
        $('.bag').addClass('close');
        $('body').css('overflow', 'hidden');
        $('.zhezhao').css('display','block')
    })
    $('.close').on('click', function (e) {
        e.preventDefault();
        $('.header .nav').removeClass('searching');
        $('.zhezhao').css('display','none')
    })

//    导航响应式
    $('.nav-phone .menu').on('click', function () {
        if ($('.nav-phone .menu').hasClass('change')) {
            $('.header-xy').slideDown(500);
        } else {
            $('.header-xy').slideUp(500);
        }

    })
})

//    banner
$(function(){


   /* $(window).on('resize',function(){*/
        var as=$('.lb a');
        var lis=$('.point li');

        var t=setInterval(moveL,2000);
        var num=0;
        var next=0;
        var flag=true;
        var width=$(as).width();
        //var width=$(window).width();
        console.log(width);
        for(var i=0;i<as.length;i++){
            if(i==0){
                continue;
            }
            as.eq(i).offset({left:width});
            lis.eq(i).removeClass('p-yangshi');

        }
        $('.zuo').on('click',function(){
            if(flag){
                moveL();
                flag=false;
            }else{
                return ;
            }
        })


        $('.you').on('click',function(){
            if(flag){
                moveR();
                flag=false;
            }else{
                return;
            }
        })

    lis.on('click',function(){
         xiabiao= $(this).index();
        lis.removeClass('p-yangshi');
        $(this).addClass('p-yangshi');
        as.offset({left:width});
        as.eq(xiabiao).animate({left:0});
        num=xiabiao;
        next=num;
    })




        function moveL(){
            next++;
            if(next>=4){
                next=0;
            }
            as.eq(next).offset({left:width});
            as.eq(num).animate({left:-width});
            as.eq(next).animate({left:0},function(){
                flag=true;
            });
            num=next;

            for(var j=0;j<lis.length;j++){
                lis.eq(j).removeClass('p-yangshi');
            }
            lis.eq(num).addClass('p-yangshi');


        }
        function moveR(){
            next--;
            if(next<0){
                next=3;

            }
            as.eq(next).offset({left:-width});
            as.eq(num).animate({left:width});
            as.eq(next).animate({left:0},function(){
                flag=true;
            });
            num=next;
            for(var j=0;j<lis.length;j++){
                lis.eq(j).removeClass('p-yangshi');
            }
            lis.eq(num).addClass('p-yangshi')


        }

        $('.banner').on("mouseover",function(){
            clearInterval(t);
            $('.zuo').css('display','block');
            $('.you').css('display','block')
        })
        $('.banner').on("mouseout",function(){
            t=setInterval(moveL,2000);
            $('.zuo').css('display','none');
            $('.you').css('display','none')
        })
    })



//})

//底部
$(function(){
    dul=$('.lie');

    dul.on('click',function(){
        $(this).find('.xyclose').toggleClass('chazhuan') ;
        $(this).toggleClass("chuxian");

    })
});