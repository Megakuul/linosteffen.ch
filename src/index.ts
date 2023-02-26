import {Router} from "./router"

let router = new Router("#nav-main", "#body", "#title");

let home_loc: string = "Home/Home.html";
let projekte_loc: string = "Projekte/Projekte.html";
let fotos_loc: string = "Fotos/Fotos.html";
let videos_loc: string = "Videos/Videos.html";
let about_loc: string = "About/About.html";
let base_path: string;


$("#nav-main").children().each(function() {
  $(this).on("click", () => {
    let id: string = $(this).attr("id") || "";
    router.swtRoute($(this), `${id}/${id}.html`, id);
  });
  base_path = window.location.pathname;
});