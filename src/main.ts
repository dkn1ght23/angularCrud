import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {RootBrowerModule} from "./app/root-brower/root-brower.module";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(RootBrowerModule)
  .catch(err => console.error(err));
