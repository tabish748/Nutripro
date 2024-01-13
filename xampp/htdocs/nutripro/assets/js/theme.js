/**
 * @var $ jQuery
 */

// Full Height...
function fsHeight() {
    let winHeight = $(window).height();
    $('[data-height="viewport"]').css('height', winHeight, '!important');
    $('[data-min-height="viewport"]').css('minHeight', winHeight, '!important');
}

/* Window Load ---------------------- */

$(window).on('load', function() {
    setTimeout(function() {
        $('body').addClass('loaded');
    }, 400);

    setTimeout(function() {
        AOS.init({
            once: true,
            duration: 1000
        });
    }, 800);

});

$(window).on('load', function() {

    document.getElementById("cookies-section-area").style.display = "block";
    $('cookies-section-area').addClass('animate__animated animate__fadeInDown');
});

$(window).scroll(function() {

    // Write code here
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {

        $(".site-nav").addClass("sticky");
        $(".site-nav").addClass("animate__animated animate__fadeInDown");
        $(".up-arrow-btn").addClass("d-block");
        

    } else {
        $(".site-nav").removeClass("sticky");
        $(".up-arrow-btn").removeClass("d-block");
    }
});

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
        $("#mobile-menu-section").toggleClass("d-block");
	});


    $('.has-drop-home').click(function(){
      
		$(this).toggleClass('bg-black');
		$(this).siblings('div').toggleClass('d-block');
		$('.has-drop-building').toggleClass('d-none');
		$('.has-drop-investor').toggleClass('d-none');
		$('.has-drop-turnkey').toggleClass('d-none');
		$('.has-drop-news').toggleClass('d-none');
		$('.has-drop-contact').toggleClass('d-none');

        $('a').removeClass('active-item');
        var $this = $(this);
        if (!$this.hasClass('active-item') || $this.hasClass('bg-black')) {
            $this.addClass('active-item');
        }
	});


    $('.has-drop-generic,.has-drop-story,.has-drop-team,.has-drop-affiliate,.has-drop-partners,.has-drop-contributions,.has-drop-association,.has-drop-awards,.has-drop-testimonial').click(function(){
     
		$(this).children('a').toggleClass('bg-black');
		$(this).children('div').toggleClass('d-block');
		$(this).siblings('li').toggleClass('d-none');
        $('a').removeClass('active-item');
        var $this = $(this);
        if (!$this.hasClass('active-item') || $this.hasClass('bg-black')) {
            $this.children('a').addClass('active-item');
        }
	});

    // *************
    $('.has-drop-building').click(function(){
      
      
		$(this).toggleClass('bg-black');
		$(this).siblings('div').toggleClass('d-block');
		$('.has-drop-home').toggleClass('d-none');
		$('.has-drop-investor').toggleClass('d-none');
		$('.has-drop-turnkey').toggleClass('d-none');
		$('.has-drop-news').toggleClass('d-none');
		$('.has-drop-contact').toggleClass('d-none');

        $('a').removeClass('active-item');
        var $this = $(this);
        if (!$this.hasClass('active-item') || $this.hasClass('bg-black')) {
            $this.addClass('active-item');
        }
	});

    // &=***********************
    
    $('.has-drop-investor').click(function(){
      
		$(this).toggleClass('bg-black');
		$(this).siblings('div').toggleClass('d-block');
		$('.has-drop-home').toggleClass('d-none');
		$('.has-drop-building').toggleClass('d-none');
		$('.has-drop-turnkey').toggleClass('d-none');
		$('.has-drop-news').toggleClass('d-none');
		$('.has-drop-contact').toggleClass('d-none');

        $('a').removeClass('active-item');
        var $this = $(this);
        if (!$this.hasClass('active-item') || $this.hasClass('bg-black')) {
            $this.addClass('active-item');
        }
	});

    // **************
      
    $('.has-drop-turnkey').click(function(){
      
		$(this).toggleClass('bg-black');
		$(this).siblings('div').toggleClass('d-block');
		$('.has-drop-home').toggleClass('d-none');
		$('.has-drop-building').toggleClass('d-none');
		$('.has-drop-investor').toggleClass('d-none');
		$('.has-drop-news').toggleClass('d-none');
		$('.has-drop-contact').toggleClass('d-none');

        $('a').removeClass('active-item');
        var $this = $(this);
        if (!$this.hasClass('active-item') || $this.hasClass('bg-black')) {
            $this.addClass('active-item');
        }
	});

    // **************

    $('.has-drop-news').click(function(){
      
		$(this).toggleClass('bg-black');
		$(this).siblings('div').toggleClass('d-block');
		$('.has-drop-home').toggleClass('d-none');
		$('.has-drop-building').toggleClass('d-none');
		$('.has-drop-investor').toggleClass('d-none');
		$('.has-drop-turnkey').toggleClass('d-none');
		$('.has-drop-contact').toggleClass('d-none');

        $('a').removeClass('active-item');
        var $this = $(this);
        if (!$this.hasClass('active-item') && $this.hasClass('bg-black')) {
            $this.addClass('active-item');
        }
	});
    
// *********************
$('.has-drop-contact').click(function(){
  
    $(this).toggleClass('bg-black');
    $(this).siblings('div').toggleClass('d-block');
    $('.has-drop-home').toggleClass('d-none');
    $('.has-drop-building').toggleClass('d-none');
    $('.has-drop-investor').toggleClass('d-none');
    $('.has-drop-turnkey').toggleClass('d-none');
    $('.has-drop-news').toggleClass('d-none');

    $('a').removeClass('active-item');
    var $this = $(this);
    if (!$this.hasClass('active-item') || $this.hasClass('bg-black')) {
        $this.addClass('active-item');
    }
});







});
// *******************mobile menu


























/* Document Ready ---------------------- */

$(document).ready(function() {

    fsHeight();


    // Inline background image...
    $("[data-bg]").each(function() {
        const image = $(this).attr("data-bg");
        $(this).css({
            backgroundImage: 'url("' + image + '")',
        });
    });

});



$('.navbar-toggler').click(function(event) {
    event.preventDefault();
    $('#svgPlus').toggle();
    $('#svgMinus').toggle();
});

/* Window Scroll ---------------------- */


/* Window Resize ---------------------- */

$(window).on('resize', function() {

    fsHeight();

});

// *****************stick navabar



//  ************

// **************


function showMenu() {
    document.getElementById("mobile-menu-section").style.display = "block";
    $(document).mouseup(function(e) {
        var container = $("#mobile-menu-inner-parent");
        var container2 = $("#mobile-menu-section");
        // if the target of the click isn't the container nor a descendant of the container
        if (!container.is(e.target) && container.has(e.target).length === 0) {
            container2.hide();
        }
    });
}
