// we want font-awesome to load as soon as possible to show the fa-spinner
// comment out if you don't want a Promise polyfill (remove also from webpack.common.js)
// import * as Bluebird from 'bluebird';
// Bluebird.config({
//   warnings: true
// });


// import './styles/styles.css';
import 'font-awesome/css/font-awesome.css';
// import '!style!css!sass!./styles/main.scss';
// import 'roboto-fontface';
import './styles/checkbox.css'
import './styles/flex.css';
import './styles/utils.css';
import './styles/main.sass';
// import 'bulma';

export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    // .developmentLogging()
    .feature('resources')
    .plugin('aurelia-dialog', config => {
      config.useDefaults();
      config.settings.lock = false;
      config.settings.centerHorizontalOnly = false;
      config.settings.startingZIndex = 500;
    })
    .plugin('aurelia-auth', (baseConfig) => {
      baseConfig.configure({
        // baseUrl: 'http://127.0.0.1:3001',
        baseUrl: '/api/v1',
        // loginRedirect: '/',
        loginOnSignup: false,
        logoutRedirect: '/',
        signupUrl: '/auth/local/register',
        signupRedirect: false,
        // signupRedirect: '#/login?signup=1',
        loginUrl: '/auth/local/login',
        loginRedirect: '/#u',
        authToken: 'JWT',
      });
    })
    // .plugin('aurelia-chartist')
    // .plugin('aurelia-animator-css', instance => {
    //
    // });


  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker),
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
   */
  if (process.env.ENV === "production") {
    const offline = await System.import('offline-plugin/runtime');
    offline.install();
  }
}
