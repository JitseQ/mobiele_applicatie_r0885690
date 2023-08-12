import { Component, OnInit } from '@angular/core';
import {DagboekService} from '../../services/dagboek.service';
import {ActivatedRoute} from '@angular/router';
import {NavController} from '@ionic/angular';

@Component({
  selector: 'app-toevoegen-dagboek',
  templateUrl: './toevoegen-dagboek.page.html',
  styleUrls: ['./toevoegen-dagboek.page.scss'],
})
export class ToevoegenDagboekPage implements OnInit {
  id?: number = undefined;
    datum: string = "";
    ontbijt?: string;
    middag?: string;
    avond?: string;
    water?: number;
  constructor(public activatedRoute: ActivatedRoute,public navController: NavController, public dagboekService: DagboekService) { 
  }

  ngOnInit() {
  }

  handleCreateAndUpdate(): void {
    if (this.id === undefined) {
      this.createTask();
    }
    this.navController.back();
  }

  private createTask(): void {
    this.dagboekService.newTask(this.datum);
  }

}
