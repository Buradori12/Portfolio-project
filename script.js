window.addEventListener('scroll', function() {
  var secondContainer = document.getElementById('secondContainer');
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var containerOffset = secondContainer.offsetTop;

  if (scrollPosition > containerOffset - windowHeight * 0.8) {
      var elements = secondContainer.querySelectorAll('.stagger-animation');
      elements.forEach(function(element, index) {
          setTimeout(function() {
              element.classList.add('animated');
          }, index * 100); // Adjust the delay as needed
      });
  }
});
