import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  template: `
  <footer>
  <h2>© 2025 Rick and Morty Fan Page</h2>
  </footer>
  `,
  styles: `
  h2 {
    color:rgb(67, 243, 190);
  }
  footer {
    padding: 10px;
    background-color:rgb(69, 133, 56);
   
    text-align: center;
  }
  `
})

export class FooterComponent {
}