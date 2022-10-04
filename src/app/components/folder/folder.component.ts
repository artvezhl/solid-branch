import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { operationsFiltered } from "../../data/constants";
import operations from "../../data/operations";

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  tabID: number;
  currentType: string = '';
  currentPersons: Array<{
    name: string,
    amount: string
  }> = [];

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.tabID = this.route.snapshot.queryParams['tab'];
    const operation = operationsFiltered.find(operation => operation.id == this.tabID);
    this.currentType = operation ? operation.type : '';
    const data = operations.data.filter(operation => operation.type === this.currentType);

    data.forEach(operation => {
      const name = operation.name.first + " " + operation.name.last;
      this.currentPersons.push({
        name: name,
        amount: operation.amount
      })
    });
  }
}
