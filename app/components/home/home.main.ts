    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { MainModule } from './home.module';
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(MainModule);