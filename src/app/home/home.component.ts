import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComputerComponent } from '../list-computer/list-computer.component';
import { ComputerService } from '../services/computer.service';
import { Computer } from '../computer';
import { FormComputerComponent } from '../form-computer/form-computer.component';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatTabsModule, ComputerComponent, FormComputerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  computerList: Computer[] = [];
  computerService: ComputerService = inject(ComputerService);
  filteredComputerList: Computer[] = [];
  constructor() {
    this.computerService.getAllComputers().then((computerList: Computer[]) => {
      this.computerList = computerList;
      this.filteredComputerList = computerList;
    });
  }
  filterResults(text: string) {
    if (!text) {
      this.filteredComputerList = this.computerList;
      return;
    }
    this.filteredComputerList = this.computerList.filter((computer) =>
      computer?.brand.toLowerCase().includes(text.toLowerCase()),
    );
  }
}