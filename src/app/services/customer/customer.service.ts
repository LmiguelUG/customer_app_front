import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  baseUrl: string = 'https://localhost:5001/api/Customer';

  constructor(private http: HttpClient) {
  }

  getCustomers(){
    return this.http.get(this.baseUrl)
  }
}
