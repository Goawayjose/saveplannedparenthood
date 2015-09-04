var main = function() {



$(window).scroll(function() {

    var wScroll = $(this).scrollTop();

    $('#top').css({
      'transform' : 'translate(0px, '+ wScroll /30+'%)'
    });
    
    $('#top2').css({
      'transform' : 'translate(0px, -'+ wScroll /30+'%)'
    });
    
    $('#topText').css({
      'transform' : 'translate(0px, '+ wScroll /5+'%)'
    });

    $('#top3').css({
      'transform' : 'translate(0px, -'+ wScroll /24+'%)'
    });
    
    
});
    
}

$(document).ready(main);