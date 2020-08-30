import { Component, OnInit, ElementRef, Optional, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {


  constructor(e: ElementRef, @Optional() p: Input) {}

  ngOnInit() {
  }

}
