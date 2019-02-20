import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PostComponent } from './components/post/post.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SubmitPostComponent } from './components/submit-post/submit-post.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'submit', component: SubmitPostComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'post/:id', component: PostComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
