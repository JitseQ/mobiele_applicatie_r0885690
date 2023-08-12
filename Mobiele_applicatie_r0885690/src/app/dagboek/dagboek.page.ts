import { Component, OnInit } from '@angular/core';
import {DagboekService} from '../services/dagboek.service';
import {Task} from '../../datatypes/dataDagboek';

@Component({
  selector: 'app-dagboek',
  templateUrl: './dagboek.page.html',
  styleUrls: ['./dagboek.page.scss'],
})
export class DagboekPage implements OnInit {

  constructor(public dagboekService: DagboekService) { }
  allEntrees = this.dagboekService.getAllTasks();
  ngOnInit() {
  }

}
