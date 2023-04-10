import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { DealsComponent } from './Components/deals/deals.component';
import { DelegatesComponent } from './Components/delegates/delegates.component';
import { ExhibitorsComponent } from './Components/exhibitors/exhibitors.component';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { ProgramComponent } from './Components/program/program.component';
import { SalesComponent } from './Components/sales/sales.component';
import { SettingComponent } from './Components/setting/setting.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';

const routes: Routes = [
  {path:'' , redirectTo:'sales' , pathMatch:"full"},
  {path:'sales' , component:SalesComponent , children:[
    {path:'deals' , component:DealsComponent},
    {path:'activites' , component:ActivitiesComponent},
    {path:'statistics' , component:StatisticsComponent}
  ]},
  {path:'exhibitors' , component:ExhibitorsComponent},
  {path:'program' , component:ProgramComponent},
  {path:'delegates' , component:DelegatesComponent},
  {path:'setting' , component:SettingComponent},
  {path:'**' , component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
