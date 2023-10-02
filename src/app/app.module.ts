import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { DashbaordComponent } from './dashbaord/dashbaord.component';
import { TokenInterceptorService } from './services/token-interceptor.service';
import { WebChatComponent } from './web-chat/web-chat.component';
import { NgRxPageComponent } from './ng-rx-page/ng-rx-page.component';
import { CouterControlsComponent } from './couter-controls/couter-controls.component';
import { CouterOutputsComponent } from './couter-outputs/couter-outputs.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './store/counter.reducer';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    DashbaordComponent,
    WebChatComponent,
    NgRxPageComponent,
    CouterControlsComponent,
    CouterOutputsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        counter: counterReducer,
      },
      {}
    ),
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
