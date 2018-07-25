import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  public colors= ["red", "blue", "yellow", "black"] ;
  
  @Input() public parentData ;

  @Output() public childEvent = new EventEmitter() ;

  constructor() { }

  ngOnInit() {
  }

  public fireEvent() {
    this.childEvent.emit('Code evolution');
  }

 

 

}
