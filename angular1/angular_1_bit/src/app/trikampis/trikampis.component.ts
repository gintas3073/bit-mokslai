import { Component } from '@angular/core';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.css']
})
export class TriangleComponent {
  side1: number;
  side2: number;
  side3: number;
  area: number = null;

  calculateArea() {
    const s = (this.side1 + this.side2 + this.side3) / 2;
    this.area = Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
  }
}