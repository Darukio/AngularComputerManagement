import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Computer } from '../computer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterOutlet ],
  templateUrl: './computer.component.html',
  styleUrl: './computer.component.css'
})
export class ComputerComponent {
  @Input() computer!: Computer;
}
