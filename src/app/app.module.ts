import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OperationComponent} from './components/operation/operation.component';
import { HomeComponent } from './home/home.component';
import { NavigatorComponent } from './navigator/navigator.component';
import { TabComponent } from './components/tab/tab.component';
import { FolderComponent } from './components/folder/folder.component';

@NgModule({
  declarations: [
    AppComponent,
    OperationComponent,
    HomeComponent,
    NavigatorComponent,
    TabComponent,
    FolderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
