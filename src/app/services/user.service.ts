import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  users: Observable<User[]>;
  user: Observable<User>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.afs.collection('users', ref => ref.orderBy('lastName', 'asc'));
  }

  getUsers(): Observable<User[]> {
    // Get clients by id
    this.users = this.usersCollection.snapshotChanges().pipe(
      map(changes => changes.map(action => {
        const data = action.payload.doc.data() as User;
        data.id = action.payload.doc.id;
        return data;
      }))
    );

    return this.users;
  }
  getCurrentUser(id: string): Observable<User> {
    this.userDoc = this.afs.doc<User>(`users/${id}`);
    this.user = this.userDoc.snapshotChanges().pipe(
      map(action => {
        if (action.payload.exists === false) {
          console.log('PAYLOAD IS NULL');
          return null;
        } else {
          const data = action.payload.data() as User;
          data.id = action.payload.id;
          return data;
        }
      }));

    return this.user;
  }

  addUser(user: User) {
    this.usersCollection.add(user);
  }
}
