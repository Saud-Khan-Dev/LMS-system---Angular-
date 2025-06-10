import { Component } from '@angular/core';
import { Form } from "./components/form/form";

@Component({
  selector: 'app-root',
  imports: [Form],
  templateUrl: './app.html',
})
export class App {
  protected title = 'project';
}
