import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { PDPComponent } from './components/pdp/pdp.component';


const routes: Routes = [
  { path: '', component: WelcomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'pdp', component : PDPComponent}

  // { path: 'login', component: LoginComponent},
  // { path: 'userLibrary', component: UserLibraryComponent},
  // { path: 'book/:id', component: BookDetailComponent},
  // { path: 'addBook', component: AddBookComponent},
  // { path: 'modify/:id', component: ModifyBookComponent},
  // { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
