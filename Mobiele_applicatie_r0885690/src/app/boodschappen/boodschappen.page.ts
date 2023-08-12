import { Component, OnInit } from '@angular/core';
import {BoodschappenService} from '../services/boodschappen.service';
import {Task} from '../../datatypes/dataBoodschappen';

@Component({
  selector: 'app-boodschappen',
  templateUrl: './boodschappen.page.html',
  styleUrls: ['./boodschappen.page.scss'],
})
export class BoodschappenPage implements OnInit {

  constructor(public boodschappenService: BoodschappenService) { }

  allBoodschappen = this.boodschappenService.getAllTasks();

  ngOnInit() {
  }

}
