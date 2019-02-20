import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatToolbarModule, MatIconModule, MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PostsComponent } from './components/posts/posts.component';
import { PostComponent } from './components/post/post.component';
import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import { HomeComponent } from './components/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NotFoundComponent,
    PostsComponent,
    PostComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    UserService,
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
