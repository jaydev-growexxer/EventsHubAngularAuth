import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { authGuard } from './guards/auth.guard';
import { WebChatComponent } from './web-chat/web-chat.component';
import { NgRxPageComponent } from './ng-rx-page/ng-rx-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashbaord',
    pathMatch: 'full',
  },
  {
    path: 'dashbaord',
    component: DashbaordComponent,
    canActivate: [authGuard],
  },
  {
    path: 'authenticate',
    component: RegisterComponent,
  },
  {
    path: 'webchat',
    component: WebChatComponent,
    canActivate: [authGuard],
  },
  {
    path: 'ngrx',
    component: NgRxPageComponent,
  },
  { path: '**', component: DashbaordComponent, canActivate: [authGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
