

$(document).ready(function() {




    $(".toggle-menu").on("click", function(){
        
        $("aside").css("height", $(document).height());
        $(this).addClass("on");
        $("aside").addClass("on");
        
    });

    $("aside button.close").on("click", function(){
        $(".toggle-menu").removeClass("on");
        $("aside").removeClass("on");
    });


    $('body.site .list p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });


    $('body.site .order-list p.image').each(function() {
        $(this).css("background", "url('" + $(this).find("img").attr("src") + "') no-repeat center / cover");
    });




    $('.count button.minus').click(function () {
        var $input = $(this).parent().find('span input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.count button.plus').click(function () {
        var $input = $(this).parent().find('span input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $(window).on("resize", function(){
        if ($(window).width() > 800) {
            $("aside").removeClass("on");
        }
    });


});

