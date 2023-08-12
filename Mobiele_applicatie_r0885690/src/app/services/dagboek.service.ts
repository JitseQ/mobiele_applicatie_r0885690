import { Injectable } from '@angular/core';
import {Task} from '../../datatypes/dataDagboek';
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
export class DagboekService {
  #dagboek: Task[] = [];
  #id = 0;

  getAllTasks(): Task[] {
    return this.#dagboek;
  }

  newTask(datumSend: string, ontbijtSend?: string, middagSend?: string, avondSend?: string, waterSend?: number): void {
    this.#dagboek.push({
      datum: datumSend,
      id: this.#id,
      ontbijt: ontbijtSend,
      middag: middagSend,
      avond: avondSend,
      water: waterSend,
    });
    this.#id++;
  }

  constructor() { }
}
