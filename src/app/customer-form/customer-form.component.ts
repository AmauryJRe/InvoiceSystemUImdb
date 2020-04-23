import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers-list/customer';
import { CustomerService } from '../customers-list/customer.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { timer } from 'rxjs';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  private customer: Customer = new Customer();
  private title: string = "Create Customer";

  constructor(private customerService: CustomerService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.loadCustomer()
  }

  loadCustomer(): void {
    this.activatedRoute.params.subscribe(params => {
      let id = params['id'];
      if (id) {
        this.customerService.getCustomer(id).subscribe((customer) => this.customer = customer)
      }
    })
  }

  public create(): void {
    this.customerService.create(this.customer).subscribe(
      customer => {
        this.router.navigate(['/customers'])
        swal.fire({
          title: 'Customer created',
          text: `Customer ${customer.name} succefully created`,
          icon: 'success',
          timer: 2000,
          timerProgressBar: true
        })
      }
    );
  }

  update():void{
    this.customerService.update(this.customer).subscribe(
      customer => {
        this.router.navigate(['/customers'])
        swal.fire({
          title:'Customer Updated',
          text:`Customer ${customer.name} updated succefully`,
          icon:'success',
          timer: 2000
        })
      }
    )
  }

}
