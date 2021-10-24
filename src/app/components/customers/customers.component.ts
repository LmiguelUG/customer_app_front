import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {

  constructor(private customerService: CustomerService) { 

  }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((data:any) => {
      console.log(data);
    });
  }

}
