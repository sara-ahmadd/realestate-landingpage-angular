import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { leftSectionComponent } from './home/leftSection/leftSec.component';
import { RightSectionComponent } from './home/rightSection/rightSec.component';
import { FeaturedHouseComponent } from './featured-house/featured-house.component';
import { ReadyToSellComponent } from './ready-to-sell/ready-to-sell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    leftSectionComponent,
    RightSectionComponent,
    FeaturedHouseComponent,
    ReadyToSellComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
