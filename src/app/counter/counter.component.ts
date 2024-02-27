import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  itemCount = 0;

  increment(): void {
    this.itemCount++;
  }

  decrement(): void {
    this.itemCount--;
  }

}
