import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Rental } from 'src/app/models/rental';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { Car } from 'src/app/models/car';
import { RentalService } from 'src/app/services/rental.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-rental',
  templateUrl: './rental.component.html',
  styleUrls: ['./rental.component.css'],
})
export class RentalComponent implements OnInit {
  rentals: Rental[] = [];
  customers: Customer[];
  customerId: number;
  rentDate: Date;
  returnDate: Date;
  rentalAddForm: FormGroup;
  @Input() car: Car;

  constructor(
    private router: Router,
    private customerService: CustomerService,
    private rentalService: RentalService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getCustomers().subscribe((response) => {
      this.customers = response.data;
    });
  }

  getDate(day: number) {
    var today = new Date();
    today.setDate(today.getDate() + day);
    return today.toISOString().slice(0, 10);
  }

  add() {
    let rental: Rental = {
      rentDate: this.rentDate,
      returnDate: this.returnDate,
      carId: this.car.carId,
      customerId: parseInt(this.customerId.toString()),
    };
    this.rentalService.add(rental).subscribe((response) => {
      this.toastr.success('Rent Successfuly');
    });
    
    this.router.navigate(['/payment', JSON.stringify(rental)]);
  }
}
