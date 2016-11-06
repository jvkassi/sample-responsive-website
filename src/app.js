export class App {

  // configure routes

  configureRouter(config, router) {
    config.title = 'Acceuil';
    config.map([{
      route: '',
      name: 'Welcome',
      moduleId: './home',
      nav: true,
      title: 'home'
    }, ]);

    this.router = router;
  }
}
