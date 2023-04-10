import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { ExhibitorsComponent } from './Components/exhibitors/exhibitors.component';
import { SalesComponent } from './Components/sales/sales.component';
import { ProgramComponent } from './Components/program/program.component';
import { DelegatesComponent } from './Components/delegates/delegates.component';
import { SettingComponent } from './Components/setting/setting.component';
import { DealsComponent } from './Components/deals/deals.component';
import { ActivitiesComponent } from './Components/activities/activities.component';
import { StatisticsComponent } from './Components/statistics/statistics.component';
import {HttpClientModule} from '@angular/common/http';
import { NotfoundComponent } from './Components/notfound/notfound.component';
import { HeaderComponent } from './Components/header/header.component';
import { HeaderSalesComponent } from './Components/header-sales/header-sales.component';
import { CustomPipe } from './Pipes/custom.pipe';
import { PercentagePipe } from './Pipes/percentage.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


 


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ExhibitorsComponent,
    SalesComponent,
    ProgramComponent,
    DelegatesComponent,
    SettingComponent,
    DealsComponent,
    ActivitiesComponent,
    StatisticsComponent,
    NotfoundComponent,
    HeaderComponent,
    HeaderSalesComponent,
    CustomPipe,
    PercentagePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    DragDropModule,
    FormsModule,
    Ng2SearchPipeModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
