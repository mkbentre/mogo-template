$(function() {
    var viewed = false;
    $(window).scroll(function(event) {
        if (isScrolledIntoView(".achievements") && !viewed) {
            viewed = true;
            $('.ach-number').each(function() {
                var start = 0;
                var stop = $(this).text();

                // set counter = start (bằng 0)
                $(this).prop('counter', start).animate({
                    counter: stop
                }, {
                    duration: 4000,
                    easing: 'swing',
                    step: function(now) {
                        // now là giá trị của counter được tăng theo thời gian
                        $(this).text(Math.ceil(now));
                    }
                });
                // End animate
            })
        }
    });

    	//Hiệu ứng smoothly
	$(".back-to-top").click(function(event) {
		/* Act on the event */
		//Về home và có hiệu chậm chậm
		$("html").animate(
		{
			scrollTop: 0
		},
		2000
		);

	});


    // click trên menu sẽ di chuyển đến id tương ứng
    $('header .menu ul li a').on('click', function(e) {
        e.preventDefault();
        var target = this.hash;
        if (target) {
            $target =$(target);

            $('html, body').stop().animate({
                'scrollTop': $target.offset().top
            }, 500, 'swing', function() {
                window.location.hash = target;
            });
        }
    });
});
 
function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

$(window).scroll(function() {
    // ẩn hiện menu
    if ($(this).scrollTop() >= $('#about').offset().top) {
        var height = $('header .menu').height();
        $("header .menu").addClass('fixed-menu');
        $("body").css("padding-top", height + "px");

        $("header .navbar-light .navbar-nav").addClass('pd-tg');
        $("header .navbar .navbar-brand").addClass('pt-0');
    }
    else {
        $("header .menu").removeClass('fixed-menu');
        $("body").css("padding-top", 0);
        
        $("header .navbar-light .navbar-nav").removeClass('pd-tg');
        $("header .navbar .navbar-brand").removeClass('pt-0');
    }

    	// Back to top ẩn/hiện
	if ($(this).scrollTop()) { 
        //chưa phải ở top
        $(".back-to-top").fadeIn();
   } 
    else { 
        //đã ở top
        $(".back-to-top").fadeOut(); 
   } 
})