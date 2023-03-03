export class Router {

  private navmain: JQuery<HTMLElement>;
  private body: JQuery<HTMLElement>;
  private title: JQuery<HTMLElement>;

  constructor(navbarID: string, bodyID: string, titleID: string) {
    this.navmain = $(navbarID);
    this.body = $(bodyID);
    this.title = $(titleID);
  }

  swtRoute(route: Route) {
    this.navmain.children().each(function() {
      $(this).removeClass("active");
    });

    $(`#${route.route}`).addClass("active");

    let page = `${route.route}/${route.route}.html`;
    
    fetch(page).then(response => {
      if (response.status == 200) {
        this.body.load(page);
      } else {
        this.body.load("notfound/notfound.html");
      }
    }).catch(error => {
      this.body.load("notfound/notfound.html");
    });

    this.title.html(route.route);
  }
}

export class Route {
  public route: string;

  constructor(route: string) {
    this.route = route;
  }
}
    