$(function(){
  $window = $(window);
  $window.scroll(function(){
    var scrollTop = $window.scrollTop();
    $maincontainer = $(".main-container")
    val = - scrollTop / 6;
      $maincontainer.css("transform", 'translateY(' + val + 'px)');

    $scrollr = $(".scrollr")
    val = - scrollTop / 4;
      $scrollr.css("transform", 'translateY(' + val + 'px)');
  });
})


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((element) => observer.observe(element));