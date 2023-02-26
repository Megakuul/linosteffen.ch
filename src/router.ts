let home_loc: string = "Home/Home.html";
let projekte_loc: string = "Projekte/Projekte.html";

function loadContent() {
  $(document).ready(function() {
    $("#body").load(home_loc, function() {
        alert("Content loaded")
      })
    });
}

function func() {
  $("#test1" ).on("click", function() {
    alert( "Handler for .click() called." );
  });
  $("#test2").after(`<h1> Hasdf </h1>`);
}

func();
