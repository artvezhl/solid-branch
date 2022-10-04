import {Component, Input} from '@angular/core';
import {IOperationElement} from '../../models/operation';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.component.html'
})

export class OperationComponent {
  @Input() operation: IOperationElement
}

