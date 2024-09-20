import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Computer } from '../computer';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-computer',
  standalone: true,
  imports: [ CommonModule, RouterLink, RouterOutlet ],
  templateUrl: './list-computer.component.html',
  styleUrl: './list-computer.component.css'
})
export class ComputerComponent {
  @Input() computer!: Computer;
}
