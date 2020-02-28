//load the app module into browser
// To bootstrap angular application
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule)