import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './component/home/home.component';
import { ChartBarSimpleComponent } from './component/chartbarsimple/chartbarsimple.component';
import { ChartBarDoubleComponent } from './component/chartbardouble/chartbardouble.component';
import { ChartLineSimpleComponent } from './component/chartlinesimple/chartlinesimple.component';
import { ChartLineDoubleComponent } from './component/chartlinedouble/chartlinedouble.component';
import { ChartPieComponent } from './component/chartpie/chartpie.component';
import { ChartStackedComponent } from './component/chartstacked/chartstacked.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chartbarsimple', component: ChartBarSimpleComponent },
  { path: 'chartbardouble', component: ChartBarDoubleComponent },
  { path: 'chartlinesimple', component: ChartLineSimpleComponent },
  { path: 'chartlinedouble', component: ChartLineDoubleComponent },
  { path: 'chartpie', component: ChartPieComponent },
  { path: 'chartstacked', component: ChartStackedComponent },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
