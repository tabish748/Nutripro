$(window).scroll(function() {

    // Write code here
    var scroll = $(window).scrollTop();
    if (scroll >= 40) {
        alert("hyy")
        $(".header-wrap").addClass("hdr-scroll");
    } else {
        $(".header-wrap").removeClass("hdr-scroll");
    }


});
