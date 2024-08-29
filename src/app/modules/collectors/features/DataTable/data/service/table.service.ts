import { Injectable } from '@angular/core';
import { debtors } from '../../interfaces/dbtors.interface';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DebtorsService {
  private baseURL = 'http://localhost:3000/deudores';

  constructor() {}

  getComputedDebtors(): Observable<debtors[]> {
    const promise = fetch(this.baseURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        return data as debtors[];
      })
      .catch((error) => {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
      });

    return from(promise);
  }


  orderByid(debtors: debtors[], flag: boolean): debtors[] {
    const aux = [...debtors]; 
    if (flag) { 
      aux.sort((a, b) => a.nroSolicitud - b.nroSolicitud); 
    } else {
      aux.sort((a, b) => b.nroSolicitud - a.nroSolicitud); 
    }
    return aux;
  }

  orderByName(debtors: debtors[], flag: boolean): debtors[] {
    const aux = [...debtors]; 
    if (flag) { 
      aux.sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordenar de A a Z
    } else {
      aux.sort((a, b) => b.nombre.localeCompare(a.nombre)); // Ordenar de Z a A
    }
    return aux;
  }

  orderByDoc(debtors: debtors[], flag: boolean): debtors[] {
    const aux = [...debtors]; 
    if (flag) { 
      aux.sort((a, b) => parseInt(a.docIdentidad) - parseInt(b.docIdentidad)); 
    } else {
      aux.sort((a, b) => parseInt(b.docIdentidad) - parseInt(a.docIdentidad)); 
    }
    return aux;
  }

  orderByStatus(debtors: debtors[], flag: boolean): debtors[] {
    const aux = [...debtors]; 
    if (flag) { 
      aux.sort((a, b) => a.status.localeCompare(b.status)); 
    } else {
      aux.sort((a, b) => b.status.localeCompare(a.status)); 
    }
    return aux;
  }

  orderByDate(debtors: debtors[], flag: boolean): debtors[] {
    const aux = [...debtors]; 
    if (flag) { 
      aux.sort((a, b) => new Date(a.fechaCobranza).getTime() - new Date(b.fechaCobranza).getTime()); // Ordenar de más antigua a más reciente
    } else {
      aux.sort((a, b) => new Date(b.fechaCobranza).getTime() - new Date(a.fechaCobranza).getTime()); // Ordenar de más reciente a más antigua
    }
    
    return aux;
  }

}
