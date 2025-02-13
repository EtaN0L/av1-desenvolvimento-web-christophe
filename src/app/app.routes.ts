import { Routes } from '@angular/router';
import { PageHomeComponent } from './pages/page-home/page-home.component';
import { PageFriendsComponent } from './pages/page-friends/page-friends.component';
import { PageAccountComponent } from './pages/page-account/page-account.component';
import { PageCreateAccountComponent } from './pages/page-create-account/page-create-account.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';

//heists pages
import { PageOgHeistsComponent } from './pages/heists/page-og-heists/page-og-heists.component';
import { PageDoomsdayComponent} from './pages/heists/page-doomsday/page-doomsday.component';
import { PageCasinoComponent } from './pages/heists/page-casino/page-casino.component';
import { PageCayoComponent } from './pages/heists/page-cayo/page-cayo.component';

//CEO pages
import { PageCargoComponent } from './pages/CEO/page-cargo/page-cargo.component';
import { PageImportExportComponent } from './pages/CEO/page-import-export/page-import-export.component';
import { PageSpecialVehicleWorkComponent } from './pages/CEO/page-special-vehicle-work/page-special-vehicle-work.component';

//MC pages
import { PageMcBusinessesComponent } from './pages/MC/page-mc-businesses/page-mc-businesses.component';

//Other Businesses pages
import { PageGunrunningComponent } from './pages/other/page-gunrunning/page-gunrunning.component';
import { PageAirFreightComponent } from './pages/other/page-air-freight/page-air-freight.component';
import { PageNightclubComponent } from './pages/other/page-nightclub/page-nightclub.component';

export const routes: Routes = [
    {path: '', redirectTo: '/page-home', pathMatch: 'full'},
    {path: 'page-home', component: PageHomeComponent},
    {path: 'page-friends', component: PageFriendsComponent},
    {path: 'page-account', component: PageAccountComponent},
    {path: 'page-create-account', component: PageCreateAccountComponent},
    {path: 'page-login', component: PageLoginComponent},
    {path: 'page-og-heists', component: PageOgHeistsComponent},
    {path: 'page-doomsday', component: PageDoomsdayComponent},
    {path: 'page-casino', component: PageCasinoComponent},
    {path: 'page-cayo', component: PageCayoComponent},
    {path: 'page-cargo', component: PageCargoComponent},
    {path: 'page-import-export', component: PageImportExportComponent},
    {path: 'page-special-vehicle-work', component: PageSpecialVehicleWorkComponent},
    {path: 'page-mc-businesses', component: PageMcBusinessesComponent},
    {path: 'page-gunrunning', component: PageGunrunningComponent},
    {path: 'page-air-freight', component: PageAirFreightComponent},
    {path: 'page-nightclub', component: PageNightclubComponent}
];
