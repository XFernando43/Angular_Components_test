import { Injectable } from '@angular/core';
import { debtors } from '../../interfaces/dbtors.interface';

@Injectable({
  providedIn: 'root',
})
export class DebtorsService {
  private baseURL = 'http://localhost:3000/deudores';

  constructor() {}

  async getDebtors():Promise<debtors[]> {
    try {
      const response = await fetch(this.baseURL);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      console.log(data);
      return data as debtors[];
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
      throw error;
    }
  }
}
