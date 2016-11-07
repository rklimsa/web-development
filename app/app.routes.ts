import { VideoComponent } from './components/video/video.component';
import { HomeComponent } from './components/home/home.component';
import { PictureComponent } from './components/picture/picture.component';

export const routes = [
  { path: '', component: HomeComponent },
  { path: 'video', component: VideoComponent },
  { path: 'picture', component: PictureComponent }
];