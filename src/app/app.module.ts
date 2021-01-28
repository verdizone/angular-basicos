import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HeroesModule } from './heroes/heroes.module';
import { ContadorModule } from './contador/contador.module';


// Services

// Routes

// Components
import { AppComponent } from './app.component';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
