import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgForm } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BooksService } from './books.service';
import { RequestBookComponent } from './request-book/request-book.component';
import { RouterModule, Routes} from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HttpClientModule } from '@angular/common/http';
import { DataTableComponent } from './data-table/data-table.component';

const appRoutes: Routes=[
  {path:'',redirectTo: 'home', pathMatch:'full'},
//{path:'',component: MainPageComponent},
  {path:'home',component: MainPageComponent},
  {path:'requestbook',component: RequestBookComponent},
  {path: '**',component:PageNotFoundComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainPageComponent,
    NavBarComponent,
    RequestBookComponent,
    PageNotFoundComponent,
    DataTableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]   
})
export class AppModule { }
