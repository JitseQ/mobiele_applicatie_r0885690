import { Injectable } from '@angular/core';
import {Task} from '../../datatypes/dataRecepten';
import {
    addDoc,
    collection,
    collectionData,
    CollectionReference,
    doc,
    DocumentReference,
    Firestore,
    orderBy,
    query,
    deleteDoc,
    updateDoc
  } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class ReceptService {

  constructor() { }

  #recepten: Task[] = [];
  #id = 0;
}
