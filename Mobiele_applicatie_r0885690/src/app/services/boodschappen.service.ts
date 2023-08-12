import { Injectable } from '@angular/core';
import {Task} from '../../datatypes/dataBoodschappen';
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
export class BoodschappenService {

  constructor() { }
  #boodschappen: Task[] = [];
    #id = 0;

    getAllTasks(): Task[] {
      return this.#boodschappen;
    }

    getTask(id: number): Task | undefined {
      return this.#boodschappen.find(t => t.id === id);
    }

    newTask(name: string): void {
      this.#boodschappen.push({
        name,
        id: this.#id,
      });
      this.#id++;
    }
  
    updateTask(updatedTask: Task): void {
      const task = this.#boodschappen.find(t => t.id === updatedTask.id);
      if (task === undefined) {
        console.error('Trying to update a nonexistent task.');
        return;
      }
  
      Object.assign(task, updatedTask);
    }

    getFilteredTasks(filter: Task): Task[] {
      return this.getAllTasks()
    }
}
