import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { ReviewsAddComponent } from './reviews-add/reviews-add.component';
import { UsersUpdateComponent } from './users-update/users-update.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"register", component: RegisterComponent},
  {path:"login", component: LoginComponent},
  {path:"user", component: UserComponent },
  {path:"dashboard", component: DashboardComponent},
  {path:"users", component: UsersComponent},
  {path:"users/add", component: UsersAddComponent },
  {path:"users/update/:id", component: UsersUpdateComponent },
  {path:"reviews", component:  ReviewsComponent},
  {path:"reviews/add", component:  ReviewsAddComponent},
];
