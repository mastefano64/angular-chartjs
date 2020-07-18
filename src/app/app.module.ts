import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppMaterialModule } from './app.material.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { ChartBarSimpleComponent } from './component/chartbarsimple/chartbarsimple.component';
import { ChartBarDoubleComponent } from './component/chartbardouble/chartbardouble.component';
import { ChartLineSimpleComponent } from './component/chartlinesimple/chartlinesimple.component';
import { ChartLineDoubleComponent } from './component/chartlinedouble/chartlinedouble.component';
import { ChartPieComponent } from './component/chartpie/chartpie.component';
import { ChartStackedComponent } from './component/chartstacked/chartstacked.component';
import { SaveImagePopupComponent } from './component/saveimagepopup/saveimagepopup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ChartBarSimpleComponent,
    ChartBarDoubleComponent,
    ChartLineSimpleComponent,
    ChartLineDoubleComponent,
    ChartPieComponent,
    ChartStackedComponent,
    SaveImagePopupComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppMaterialModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
