import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() id: number;
  @Input() name: string;
  @Input() salary: number;
  @Input() designation: string;
  @Input() doj: string;
  @Output() sendViewData: EventEmitter<any> = new EventEmitter();
  @Output() sendDeleteData: EventEmitter<any> = new EventEmitter();
  constructor() { }


  ngOnInit() {
  }
  selectMethod(id) {    
    switch (id) {
      case 1:
        this.sendViewData.emit();
        break;
      case 2:
        this.sendDeleteData.emit();
        break;
    }
  };

}
