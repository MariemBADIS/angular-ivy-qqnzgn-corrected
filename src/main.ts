import './polyfills';

// @ts-ignore
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
/*
we have deleted this
platformBrowserDynamic().bootstrapModule(AppModule).then(ref => {
  // Ensure Angular destroys itself on hot reloads.
 /!* if (window['ngRef']) {
    window['ngRef'].destroy();
  }*!/
  //window['ngRef'] = ref;

  // Otherwise, log the boot error
}).catch(err => console.error(err));*/
platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));
