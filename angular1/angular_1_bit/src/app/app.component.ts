import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SkaiciuokleComponent } from './skaiciuokle/skaiciuokle.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SkaiciuokleComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_1_bit';
}
