import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AComponent } from './pages/a/a.component';
import { BComponent } from './pages/b/b.component';
import { CComponent } from './pages/c/c.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { AppRoutingModule } from './app.routing';
import { BreadcrumbService } from './services/breadcrumb.service';
import { NameService } from './services/name.service';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    CComponent,
    BreadcrumbComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [BreadcrumbService, NameService],
  bootstrap: [AppComponent]
})
export class AppModule { }
