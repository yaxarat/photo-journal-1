import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Post } from '../models/Post';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  postsCollection: AngularFirestoreCollection<Post>;
  postDoc: AngularFirestoreDocument<Post>;
  posts: Observable<Post[]>;
  post: Observable<Post>;

  constructor(private afs: AngularFirestore) {
    this.postsCollection = this.afs.collection('posts', ref => ref.orderBy('title', 'asc'));
  }

  getPosts(): Observable<Post[]> {
    // Get clients by id
    this.posts = this.postsCollection.snapshotChanges().pipe(
      map(changes => changes.map(action => {
        const data = action.payload.doc.data() as Post;
        data.id = action.payload.doc.id;
        return data;
      }))
    );

    return this.posts;
  }
  getPost(id: string): Observable<Post> {
    this.postDoc = this.afs.doc<Post>(`posts/${id}`);
    this.post = this.postDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          console.log('PAYLOAD IS NULL');
          return null;
        } else {
          const data = action.payload.data() as Post;
          data.id = action.payload.id;
          return data;
        }
      }));

    return this.post;
  }
  updateLike(post: Post) {
    this.postDoc = this.afs.doc(`posts/${post.id}`);
    this.postDoc.update(post);
  }
  addPost(post: Post) {
    this.postsCollection.add(post);
  }
}

