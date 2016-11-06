// LOAD FONT AWESOME ICONS
import 'font-awesome/css/font-awesome.css';

// all others css files will be loaded automatically

// LOAD FRAMEWORK
export async function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()

  await aurelia.start();
  aurelia.setRoot('app');

  // load offfline plugin if prod
  if (process.env.ENV === "production") {
    const offline = await System.import('offline-plugin/runtime');
    offline.install();
  }
}
