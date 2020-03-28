import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './pages/user-list/user-list.component';
import { GenerateQrComponent } from './pages/generate-qr/generate-qr.component';
import { SearchComponent } from './pages/search/search.component';
import { CheckInfoComponent } from './pages/check-info/check-info.component';
import { RegistershopComponent } from './pages/registershop/registershop.component';


const routes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'qr', component: GenerateQrComponent },
  { path: 'search', component: SearchComponent },
  { path: 'check/:id', component: CheckInfoComponent },
  { path: 'register/:id', component: RegistershopComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
