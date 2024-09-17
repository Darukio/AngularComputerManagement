import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ComputerService } from '../computer.service';
import { Computer } from '../computer';

@Component({
  selector: 'app-form-computer',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './form-computer.component.html',
  styleUrl: './form-computer.component.css'
})
export class FormComputerComponent {
  applyForm = new FormGroup({
    brand: new FormControl(''),
    model: new FormControl(''),
    processor: new FormControl(''),
    ram: new FormControl(''),
    storage: new FormControl(''),
  });

  route: ActivatedRoute = inject(ActivatedRoute);
  computerService = inject(ComputerService);

  submitNewComputer() {
    this.computerService.submitNewComputer(
      this.applyForm.value.brand ?? '',
      this.applyForm.value.model ?? '',
      this.applyForm.value.processor ?? '',
      this.applyForm.value.ram ?? '',
      this.applyForm.value.storage ?? '',
    );
  }
}
