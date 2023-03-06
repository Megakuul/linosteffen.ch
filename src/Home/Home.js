console.log("Hallo");

$(function(){
    console.log("Hallo2");
    $window = $(window);
    $window.scroll(function(){
      var scrollTop = $window.scrollTop();
      $this = $('#welcome-main')
      val = - scrollTop / 2;
        $this.css('transform', 'translateY(' + val + 'px)');
    });
})