import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventsComponent } from './events/events.component';
import {HomeComponent} from './home/home.component'
import { LoginComponent } from './login/login.component';
import { MyorderReviewComponent } from './myorder-review/myorder-review.component';
import { OrderReviewComponent } from './order-review/order-review.component';
import { ProfileComponent } from './profile/profile.component';
import { QuestionsKingHomeComponent } from './questions-king-home/questions-king-home.component';
import { QuestionsKingComponent } from './questions-king/questions-king.component';
import { ShopComponent } from './shop/shop.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'login', component: LoginComponent },
  { path: 'myorderReview', component: MyorderReviewComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'events', component: EventsComponent },
  { path: 'questions-king-home', component: QuestionsKingHomeComponent },
  { path: 'questions-king', component: QuestionsKingComponent },
  { path: 'orderReview', component: OrderReviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
