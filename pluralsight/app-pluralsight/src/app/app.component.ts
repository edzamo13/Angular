import { Component } from '@angular/core';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'change name of project';
  pageTitle: String = "Acme Product Management"
}
