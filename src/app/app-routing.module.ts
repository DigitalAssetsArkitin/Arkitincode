import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeOneComponent } from './components/pages/home/home-one.component';
import { AboutComponent } from './components/pages/about/about.component';
import { ContactComponent } from './components/pages/contact/contact.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PartnersComponent } from './components/pages/partners/partners.component';
import { NewsMediaComponent } from './components/pages/news-media/news-media.component';
import { CareerComponent } from './components/pages/careers/career.component';
import { ServicesComponent } from './components/pages/services/services.component';
import { SignInComponent } from './components/pages/sign-in/sign-in.component';
import { RefferalComponent } from './components/pages/refferal/refferal.component';



const routes: Routes = [
    {path: '' , redirectTo:"/Home", pathMatch:"full"},
    {path: 'Home', component: HomeOneComponent},
    {path: 'about', component: AboutComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'products',component: ProductsComponent},
    {path: 'partners',component:PartnersComponent},
    {path: 'newsMedia',component:NewsMediaComponent},
    {path: 'career',component:CareerComponent},
    {path: 'services',component:ServicesComponent},
    {path: 'sign-in',component:SignInComponent},
    {path: 'referral',component:RefferalComponent}
    // Here add new pages component

    // {path: '**', component: ErrorComponent}
    // This line will remain down from the whole pages component list

];

@NgModule({
    imports: [RouterModule.forRoot(routes,{ useHash: false })],
    exports: [RouterModule]
})
export class AppRoutingModule { }