var animateHTML = function() {
  typewriters = document.querySelectorAll('.hidden-typewriter');
  windowHeight = window.innerHeight;

  console.log("Entré 1");

  for (var i = 0; i < typewriters.length; i++) {
    console.log("Entré");
    var positionFromTop = typewriters[i].getBoundingClientRect().top;
    if (positionFromTop - windowHeight <= 0) {
        typewriters[i].className = typewriters[i].className.replace(
        'hidden-typewriter',
        'typewriter-animate'
      );
    }
  }
  return {
    init: init
  };
}

animateHTML().init();