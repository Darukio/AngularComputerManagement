import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComputerService } from '../computer.service';
import { Computer } from '../computer';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  computerService = inject(ComputerService);
  computer: Computer | undefined;
  constructor() {
    const computerId = parseInt(this.route.snapshot.params['id'], 10);
    this.computerService.getComputerById(computerId).then((computer) => {
      this.computer = computer;
    });
  }
}