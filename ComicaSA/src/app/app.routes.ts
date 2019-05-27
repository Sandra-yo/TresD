import { RecordComponent } from './record/record.component';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register/register.component';
import { CategoryComponent } from './categories/category/category.component';
import { ProviderComponent } from './providers/provider/provider.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { MyCartComponent } from './shopping/my-cart/my-cart.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent},
  { path: 'product', component: ProductComponent},
  { path: 'user', component: UserComponent},
  { path: 'category', component: CategoryComponent},
  { path: 'provider', component: ProviderComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'account', component: MyAccountComponent},
  { path: 'mycart', component: MyCartComponent},
  { path: 'record', component: RecordComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'login' },
];

export const appRouting = RouterModule.forRoot(routes);
