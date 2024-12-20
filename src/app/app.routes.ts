import { Routes } from '@angular/router';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageFriendsComponent } from './page-friends/page-friends.component';

export const routes: Routes = [
    {path: 'page-home', component: PageHomeComponent},
    {path: 'page-friends', component: PageFriendsComponent}
];
