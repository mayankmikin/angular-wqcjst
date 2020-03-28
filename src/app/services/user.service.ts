import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Owner } from '../models/owner.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private firestore: AngularFirestore) { }

  getUsers() {
    return this.firestore.collection('users').snapshotChanges();

  }
  createUser(user: Owner){
    return this.firestore.collection('users').add(user);
  }
  // updatePolicy(policy: Policy){
  //   delete policy.id;
  //   this.firestore.doc('policies/' + policy.id).update(policy);
  // }
  // deletePolicy(policyId: string){
  //   this.firestore.doc('policies/' + policyId).delete();
  // }
}
