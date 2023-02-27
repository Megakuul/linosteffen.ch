import {Router, Route} from "./router";

let router = new Router("#nav-main", "#body", "#title");

const urlParams = new URLSearchParams(window.location.search);

const firstParam = urlParams.entries().next().value;

const pageRoute = firstParam ? firstParam[0] : null;

let mainroute = new Route(pageRoute);

router.swtRoute(mainroute);

$("#nav-main").children().each(function() {
  $(this).on("click", () => {
    let id: string = $(this).attr("id") || "";
    mainroute.route=id;
    window.location.href= `${window.location.origin}${window.location.pathname}?${id}`;
  });
});