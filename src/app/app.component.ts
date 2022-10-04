import { Component } from '@angular/core';
import IOperation from './models/operation';
import data from './data/operations';
import operations from "./data/operations";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'solid branch';

  total: number = data.total;
  operations: Array<IOperation> = data.data;

  operationTypes = (): Array<{
    type: string,
    count: number
  }> => {
    const result: Array<{
      type: string,
      count: number
    }> = [];

    this.operations.forEach((operation) => {
      const currentType = result.find(item => item.type === operation.type);
      currentType ? currentType.count += 1 : result.push({
        type: operation.type,
        count: 0
      })
    } )

    return result;
  }
}
