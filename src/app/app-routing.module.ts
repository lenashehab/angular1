import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ApiComponent } from './api/api.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent ,title:'Start Angular'},
  {path:'portfolio',component:PortfolioComponent ,title:'Portfolio'},
  {path:'about',component:AboutComponent,title:'About'},
  {path:'contact',component:ContactComponent ,title:'Contact'},
  {path:'api',component:ApiComponent,title:'Api'},
  {path:'**',component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
