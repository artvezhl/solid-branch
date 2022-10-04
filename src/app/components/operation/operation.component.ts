import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html'
})

export class OperationComponent {
  @Input() operation: {
    type: string,
    count: number
  }
}

