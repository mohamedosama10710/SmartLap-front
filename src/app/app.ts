import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Footer } from "./components/footer/footer";
import { Main } from "./components/main/main";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Footer, Main],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('SmartLap');
}
