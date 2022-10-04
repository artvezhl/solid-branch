import { Component, OnInit } from '@angular/core';
import { IOperationElement } from "../models/operation";
import data from '../data/operations';
import { operationsFiltered } from "../data/constants";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  total: number = data.total;
  operations: Array<IOperationElement> = operationsFiltered;

  constructor() { }

  ngOnInit(): void {
    operationsFiltered[0].count === 0 &&
    data.data.forEach((operation) => {
      const currentOperation = this.operations.find(item => item.type === operation.type);
      if (currentOperation) currentOperation.count += 1;
    } )
  }

}
