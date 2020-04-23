import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from './customer.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.css']
})
export class CustomersListComponent implements OnInit {

  public enabled : boolean = true;
  public customers: Customer[];
  public headElements = ['ID', 'Name', 'LastName', 'Email', 'Date','Commands'];
  
  constructor(private customerService: CustomerService) { 
  }

  setEnabled = () =>{
    this.enabled = this.enabled ? false : true;
  }

  trackByFn(index, customer) {    
    return customer.id; // unique id corresponding to the item
 }
  
  ngOnInit() {
  this.customerService.getCustomers().subscribe(
    customers => this.customers = customers
  );
  }

  delete(customer:Customer):void{
    Swal.fire({
      title: 'Are you sure?',
      text: `You won't be able to revert this!, the customer ${customer.name} will be deleted`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.value) {
        this.customerService.delete(customer.id).subscribe(
          response => {
            this.customers = this.customers.filter(cus => cus !== customer)
            Swal.fire({
              title:'Deleted!',
              text:`The customer ${customer.name} has been deleted.`,
              icon:'success',
              timer:2000,
              timerProgressBar:true
            }
            )
          }
        )
      }
    })
  }
  
}