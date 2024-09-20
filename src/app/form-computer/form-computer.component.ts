import { Component, inject } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { ComputerService } from '../services/computer.service';
import { Computer } from '../computer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-computer',
  templateUrl: './form-computer.component.html',
  styleUrls: ['./form-computer.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    ReactiveFormsModule
  ]
})
export class FormComputerComponent {
  private fb = inject(FormBuilder);
  computerForm = this.fb.group({
    id: ['', Validators.required],
    brand: ['', Validators.required],
    model: ['', Validators.required],
    processor: ['', Validators.required],
    ram: ['', Validators.required],
    storage: ['', Validators.required],
  });

  computerService = inject(ComputerService);

  async submitNewComputer() {
    const newComputer: Computer = {
      id: '', // Se generará automáticamente
      brand: this.computerForm.value.brand ?? '',
      model: this.computerForm.value.model ?? '',
      processor: this.computerForm.value.processor ?? '',
      ram: this.computerForm.value.ram ?? '',
      storage: this.computerForm.value.storage ?? '',
      entryDate: new Date().toISOString(),
    };

    await this.computerService.submitNewComputer(newComputer);
    this.computerForm.reset(); // Limpiar el formulario después de enviar
  }

  async updateComputer() {
    const id = this.computerForm.value.id;
    if (!id) {
      alert("Please enter a valid ID to update.");
      return;
    }

    const updatedComputer: Computer = {
      id: id,
      brand: this.computerForm.value.brand ?? '',
      model: this.computerForm.value.model ?? '',
      processor: this.computerForm.value.processor ?? '',
      ram: this.computerForm.value.ram ?? '',
      storage: this.computerForm.value.storage ?? '',
      entryDate: new Date().toISOString(), // O conservar la fecha original
    };

    await this.computerService.updateComputer(updatedComputer);
    this.computerForm.reset(); // Limpiar el formulario después de actualizar
  }

  async deleteComputer() {
    const id = this.computerForm.value.id;
    if (!id) {
      alert("Please enter a valid ID to delete.");
      return;
    }

    await this.computerService.deleteComputer(id);
    this.computerForm.reset(); // Limpiar el formulario después de eliminar
  }
}
