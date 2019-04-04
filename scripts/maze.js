
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
  }

  return {
    init: init
  };
}

animateHTML().init();