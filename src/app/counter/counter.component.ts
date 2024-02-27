import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent {

  @HostListener("document:Ajoutpanier", ["$event"])
  incrementCounter(event: any) {
    this.increment();
  }

  @HostListener("document:Suppanier", ["$event"])
  decrementCounter(event: any) {
    this.decrement();
  }

  public counter: number = 1;

  increment() {
    this.counter++;
  }

  decrement() {
    if (this.counter > 1) {
      this.counter--;
    }
  }

  emettre($event: any): void {
    const event: CustomEvent = new CustomEvent('echange', { detail: $event?.target?.value } );
    document.dispatchEvent(event);
  }

}
