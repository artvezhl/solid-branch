import { Component, OnInit } from '@angular/core';
import { operationsFiltered } from "../data/constants";
import { IOperationElement } from "../models/operation";

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  operations: Array<IOperationElement> = operationsFiltered;

  constructor() { }

  ngOnInit(): void {
  }

}
