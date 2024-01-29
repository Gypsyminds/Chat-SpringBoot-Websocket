import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PassageTestComponent } from './passage-test/passage-test.component';
import { RouterModule } from '@angular/router';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ScoreComponent } from './score/score.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PassageTestComponent,
    ScoreComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModalModule,
    RouterModule,
    NgbModule,
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
