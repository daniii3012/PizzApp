import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { environment } from '../environments/environment.prod';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { AuthService } from './services/auth/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { StoreComponent } from './pages/store/store.component';
import { AdminComponent } from './pages/admin/admin.component';
import { UserComponent } from './pages/user/user.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { CartComponent } from './pages/cart/cart.component';
import { UserDashboardComponent } from './pages/admin/user-dashboard/user-dashboard.component';
import { ProductDashboardComponent } from './pages/admin/product-dashboard/product-dashboard.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchaseCompleteComponent } from './pages/purchase/purchase-complete/purchase-complete.component';
import { MeseroComponent } from './pages/store/mesero/mesero.component';
import { CocinaComponent } from './pages/store/cocina/cocina.component';
import { DomicilioComponent } from './pages/store/domicilio/domicilio.component';
import { OrdenCompletaComponent } from './pages/store/mesero/orden-completa/orden-completa.component';
import { OrderDashboardComponent } from './pages/admin/order-dashboard/order-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductsComponent,
    StoreComponent,
    AdminComponent,
    UserComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    CartComponent,
    UserDashboardComponent,
    ProductDashboardComponent,
    PurchaseComponent,
    PurchaseCompleteComponent,
    MeseroComponent,
    CocinaComponent,
    DomicilioComponent,
    OrdenCompletaComponent,
    OrderDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule.enablePersistence(),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
