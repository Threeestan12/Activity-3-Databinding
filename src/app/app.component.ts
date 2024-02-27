import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
})
export class AppComponent {
  title = "Databinding";
  username = "";

  GetData() {
    return "Insert Username";
  }

  ChangeTitle(event) {
    this.username = ""; // Reset username 
  }

  constructor() { }

  ngOnInit(): void {}
}