import { Component, Input, OnInit } from '@angular/core';
import { IOperationElement } from "../../models/operation";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html'
})
export class TabComponent implements OnInit {
  @Input() operation: IOperationElement;

  constructor() { }

  ngOnInit(): void {
  }

}
