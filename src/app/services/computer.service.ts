import { Injectable } from '@angular/core';
import { Computer } from '../computer';

@Injectable({
  providedIn: 'root'
})
export class ComputerService {
  url = 'http://localhost:3000/computers';

  async getAllComputers(): Promise<Computer[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getComputerById(id: string): Promise<Computer | undefined> {
    console.log(this.url);
    const data = await fetch(`${this.url}/${id}`);
    console.log(data);
    return (await data.json()) ?? {};
  }

  async submitNewComputer(newComputer: Computer): Promise<void> {
    try {
      const response = await fetch(this.url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newComputer)
      });
      if (!response.ok) {
        throw new Error('Error submitting the computer');
      }
      console.log('Computer added successfully:', await response.json());
    } catch (error) {
      console.error('Error:', error);
    }
  }

  async updateComputer(computer: Computer) {
    await fetch(`${this.url}/${computer.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(computer),
    });
  }
  
  async deleteComputer(id: string) {
    await fetch(`${this.url}/${id}`, {
      method: 'DELETE',
    });
  }
    
  constructor() { }
}
