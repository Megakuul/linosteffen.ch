export class Router {

  private navmain: JQuery<HTMLElement>;
  private body: JQuery<HTMLElement>;
  private title: JQuery<HTMLElement>;

  constructor(navbarID: string, bodyID: string, titleID: string) {
    this.navmain = $(navbarID);
    this.body = $(bodyID);
    this.title = $(titleID);
  }

  swtRoute(selectedItem: JQuery<HTMLElement>, page: string, title: string) {
    this.navmain.children().each(function() {
      $(this).removeClass("active");
    });

    selectedItem.addClass("active");

    this.body.load(page, (response, status, xhr) => {
      if (status == "error") {
        this.body.load("/src/notfound/notfound.html");
      }
    });

    window.history.replaceState(null, title, `/${title}`);

    this.title.html(title);
  }
}
    