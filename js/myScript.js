$(document).ready(function(){    
    init();
});


function init() {
    console.log('im ready');
    
    var t1 = new TimelineMax();
    
    var boxA = $('.home_box_a');
    var boxB = $('.home_box_b');
    var boxC = $('.home_box_c');
    var boxD = $('.home_box_d');
    var boxE = $('.home_box_e');
    var myName = $('.chingching');
    var about = $('.aboutLink');
    var work = $('.workLink');
    
    t1
        .from(about, 1.5, {x:-1500, delay:1})
        .from(work, 1, {x:1500})
        .from(boxA, 0.5, {y:-1000})
        .from(boxB, 0.5, {y:-1000})
        .from(boxC, 0.5, {y:-1000})
        .from(boxE, 0.5, {x:2000})
        .from(boxD, 0.5, {y:-500});
    
    
    var t2 = new TimelineMax();
    var mainAllison = $('.main_allison path');
    
    t2.add(TweenMax.staggerFromTo(mainAllison, 2, {autoAlpha:0}, {autoAlpha:1, ease: Quad.easeOut}, 0.12));

    
    $(function(){
        $('a').each(function() {
            if ($(this).prop('href') == window.location.href) {
            $(this).addClass('current');
            $(this).removeClass('hvr-underline-reveal');
            }
        });
    });
    
//    var shape = document.querySelector(".line");
//    var shapeL = shape.getTotalLength();
//    console.log(shapeL);
}

