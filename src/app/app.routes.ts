import {RouterModule, Routes} from '@angular/router';


import {LoginComponent} from './pages/login/login.component';

import {PagesComponent} from './pages/pages.component';
import { SurveyComponent } from './pages/survey/survey.component';
import {NopagefoundComponent} from './shared/nopagefound/nopagefound.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'survey', component: SurveyComponent},
  /* {path: 'register',component:RegisterComponent }, */
  {path: '', component: PagesComponent},
  {path: '**', component: NopagefoundComponent},
];

export const APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});