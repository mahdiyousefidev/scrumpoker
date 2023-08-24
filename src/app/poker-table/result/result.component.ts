import {Component, Input} from '@angular/core';
import {cardModel} from "../../_shared/models";

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {
  @Input() isValueVisible: boolean = true;
  cards: cardModel[] = [{value: 10, owner: {name: 'mahdi'}},
    {value: 5, owner: {name: 'majid'}},
    {value: 7, owner: {name: 'ali'}},
    {value: 3, owner: {name: 'hosein'}},
  ];
}
