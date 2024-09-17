import { Injectable } from '@angular/core';
import { Computer } from './computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  url = 'http://localhost:3000/computers';

  async getAllComputers(): Promise<Computer[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getComputerById(id: number): Promise<Computer | undefined> {
    console.log(this.url);
    const data = await fetch(`${this.url}/${id}`);
    console.log(data);
    return (await data.json()) ?? {};
  }

  submitNewComputer(brand: string, model: string, processor: string, ram: string, storage: string) {
    console.log(
      `New computer received: brand: ${brand}, model: ${model}, processor: ${processor}, ram: ${ram}, storage: ${storage}.`,
    );
  }

  constructor() { }
}
