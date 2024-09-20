import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ComputerService } from '../services/computer.service';
import { Computer } from '../computer';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [],
  templateUrl: './details-computer.component.html',
  styleUrl: './details-computer.component.css',
})

export class DetailsComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  computerService = inject(ComputerService);
  computer: Computer | undefined;
  constructor() {
    const computerId = this.route.snapshot.params['id'];
    this.computerService.getComputerById(computerId).then((computer) => {
      this.computer = computer;
    });
  }
}