$(function(){
  $(window).scroll(function(){
    let scrollTop = $(window).scrollTop();
    let docHeight = $(document).height();
		let winHeight = $(window).height();
    let scrollPercent = (scrollTop) / (docHeight - winHeight);


    $maincontainer = $(".main-container")
    val = - scrollTop / 6;
    $maincontainer.css("transform", 'translateY(' + val + 'px)');

    $scrollr = $(".scrollr")
    val2 = (docHeight - 200) * scrollPercent;


    if (scrollPercent < 1/20) {
      
    } else if (scrollPercent > 19/20) {

    } else {
      $scrollr.css("display", "grid");
      $scrollr.css("top", val2 + 'px');
    }
    
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