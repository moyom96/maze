
function prevImg(){
  $('.gallery-carousel').carousel('prev');
}

function nextImg(){
  $('.gallery-carousel').carousel('next');
}

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

var animateHTML = function() {
  function init() {
    handwritings = document.querySelectorAll('.handwriting');
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
      if (positionFromTop - windowHeight - 100 <= 0) {
          typewriters[i].className = typewriters[i].className.replace(
          'hidden-typewriter',
          'typewriter-animate'
        );
      }
    }

    for (var i = 0; i < handwritings.length; i++){
      var positionFromTop = handwritings[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight + 400 <= 0) {
          handwritings[i].classList = ['pen'];
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

$(document).ready(function(){
  $('#carousel-1').carousel({
    interval: 6000
  })
  $('#carousel-1').carousel('cycle')
})

$('#carousel-1').on('slide.bs.carousel', function () {
  $('#carousel-2').carousel('next');
})
