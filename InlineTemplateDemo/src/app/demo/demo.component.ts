import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  template: `
    <p>
      test works!
    </p>
  `,
  styles: [
  ]
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
