
import { RouterConfig } from '@angular/router';

import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';

export const routes: RouterConfig = [
  { path: '', component: HomeComponent }
  { path: 'video', component: VideoComponent }
];