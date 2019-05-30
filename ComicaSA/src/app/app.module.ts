import { GuidService } from './services/guid/guid.service';

import { appRouting } from './app.routes';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// LOCAL-STORAGE
import {Ng2Webstorage} from 'ngx-webstorage';

// FIRESTORAGE
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';

// COMPONENTS
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { ListProductComponent } from './products/list-product/list-product.component';
import { RegisterComponent } from './components/register/register/register.component';
import { CategoryComponent } from './categories/category/category.component';
import { AddCategoryComponent } from './categories/add-category/add-category.component';
import { ListCategoryComponent } from './categories/list-category/list-category.component';
import { ProviderComponent } from './providers/provider/provider.component';
import { AddProviderComponent } from './providers/add-provider/add-provider.component';
import { ListProviderComponent } from './providers/list-provider/list-provider.component';
import { ProductComponent } from './products/product/product.component';
import { UserComponent } from './users/user/user.component';
import { ListUserComponent } from './users/list-user/list-user.component';
import { AddUserComponent } from './users/add-user/add-user.component';
import { MyAccountComponent } from './account/my-account/my-account.component';
import { LoaderComponent } from './components/loader/loader.component';
import { MyCartComponent } from './shopping/my-cart/my-cart.component';
import { PurchasedComponent } from './shopping/purchased/purchased.component';
import { RecordComponent } from './record/record.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    DashboardComponent,
    AddProductComponent,
    AddCategoryComponent,
    ListProductComponent,
    ListCategoryComponent,
    RegisterComponent,
    CategoryComponent,
    ProviderComponent,
    AddProviderComponent,
    ListProviderComponent,
    ProductComponent,
    UserComponent,
    ListUserComponent,
    AddUserComponent,
    MyAccountComponent,
    LoaderComponent,
    MyCartComponent,
    PurchasedComponent,
    RecordComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    Ng2Webstorage,
    FormsModule,
    appRouting,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireDatabaseModule,
  ],
  providers: [GuidService],
  bootstrap: [AppComponent]
})
export class AppModule { }
