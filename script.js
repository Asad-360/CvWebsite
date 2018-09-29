$(document).ready(function () {

    $(window).on("scroll", function () {
const x=870;
        const scrollHeight = $(window).height();
        var scrollTop = $(window).scrollTop()+scrollHeight;
        //console.log(scrollHeight + '--' + scrollTop);
        if (scrollTop > x){
alert('working');
            $(".html").animate({
                width: '80%'
            }, 1000,function(){});
           /* $(".css, .wcf").animate({
                width: '70%'
            }, 1000,function(){});
            $(".js").animate({
                width: '76%'
            }, 1000,function(){});
            $(".jquery").animate({
                width: '85%'
            }, 1000,function(){});
            
           $(".bootstrap,.entity").animate({
                width: '90%'
            }, 1000,function(){});
            $(".csharp").animate({
                width: '95%'
            }, 1000,function(){});
            $(".asp").animate({
                width: '88%'
            }, 1000,function(){});
            $(".webapi").animate({
                width: '88%'
            }, 1000,function(){});
           */
        } 

    });


});
