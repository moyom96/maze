
function prevImg(){
  $('.gallery-carousel').carousel('prev');
}

function nextImg(){
  $('.gallery-carousel').carousel('next');
}

var animateHTML = function() {
  function init() {
    typewriters = document.querySelectorAll('.hidden-typewriter');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }

  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
    checkPosition();
  }

  function checkPosition() {

    for (var i = 0; i < typewriters.length; i++) {
      var positionFromTop = typewriters[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
          typewriters[i].className = typewriters[i].className.replace(
          'hidden-typewriter',
          'typewriter-animate'
        );
      }
    }

    var scroll = $(window).scrollTop();

    if(scroll > 540){
      $('#logo-blue').addClass('img-hidden');
      $('#logo-blue').removeClass('img-show');
      $('#logo-orange').removeClass('img-hidden');
      $('#logo-orange').addClass('img-show');
    } else{
      $('#logo-orange').addClass('img-hidden');
      $('#logo-orange').removeClass('img-show');
      $('#logo-blue').removeClass('img-hidden');
      $('#logo-blue').addClass('img-show');
    }
  }

  return {
    init: init
  };
}

animateHTML().init();