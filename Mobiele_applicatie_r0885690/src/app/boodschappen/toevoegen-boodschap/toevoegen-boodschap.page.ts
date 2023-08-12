import { Component, OnInit } from '@angular/core';
import {BoodschappenService} from '../../services/boodschappen.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-toevoegen-boodschap',
  templateUrl: './toevoegen-boodschap.page.html',
  styleUrls: ['./toevoegen-boodschap.page.scss'],
})
export class ToevoegenBoodschapPage implements OnInit {
  name : string = "";
  id?: number = undefined;

  constructor(public activatedRoute: ActivatedRoute,public navController: NavController, public boodschappenService: BoodschappenService) { 
  }

  ngOnInit() {
    this.setData();
  }

  setData(): void {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    if (id === null) {
      return;
    }

    this.id = Number(id);

    const task = this.boodschappenService.getTask(this.id);
    this.name = this.name;
  }

  handleCreateAndUpdate(): void {
    if (this.id === undefined) {
      this.createTask();
    }
    this.navController.back();
  }

  private createTask(): void {
    this.boodschappenService.newTask(this.name);
  }
}
