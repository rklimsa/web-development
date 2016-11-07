    import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
    import { MainModule } from './base.module';
    const platform = platformBrowserDynamic();
    platform.bootstrapModule(MainModule);