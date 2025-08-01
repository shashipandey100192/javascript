$(document).ready(function(){

    $("#one section").click(function(){
        // $(this).fadeOut(7000,function(){
        //     $(this).fadeIn(5000);
        // });
        $("#one section").click(function(){
            $(this).fadeTo(3000,0.5);
        })
    });

    $(".page h3").click(function(){
        $(".page header").slideToggle(300,function(){
            var a = $(".page h3").text();
            if(a=="more")
            {
                $(".page h3").text("less");
            }
            else
            {
                $(".page h3").text("more")
            }
        });
    });

    $(".third ul li").click(function(){
        // $(this).css({backgroundColor:"red"});
        // $(this).next().addClass("active");
        // $(this).prev().addClass("active");
        // $(this).prevAll().addClass("active");
    //      $(this).prevUntil(".third ul li:nth-child(2)").addClass("active");
    $(".third ul li").removeClass("active");    
    $(this).addClass("active");
         

    })





})