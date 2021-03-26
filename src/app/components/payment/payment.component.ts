import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Car } from 'src/app/models/car';
import { Rental } from 'src/app/models/rental';
import { CarService } from 'src/app/services/car.service';
import { PaymentService } from 'src/app/services/payment.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  car: Car;
  rental: Rental;
  amount: number = 0;
  constructor(
    private carService: CarService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private paymentService: PaymentService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['rental']) {
        this.rental = JSON.parse(params['rental']);
        this.getCar();
      }
    });
  }
  getCar() {
    this.carService.getCarDetail(this.rental.carId).subscribe((response) => {
      this.car = response.data;
      this.totalAmount();
    });
  }
  totalAmount() {
    if (this.rental.returnDate != null) {
      let rentDate = new Date(this.rental.rentDate.toString());
      let returnDate = new Date(this.rental.returnDate.toString());

      let timeDifference = returnDate.getTime() - rentDate.getTime();

      let numberOfDays = Math.ceil(timeDifference / (1000 * 3600 * 24));
      this.amount = numberOfDays * this.car.dailyPrice ;
      if (this.amount <= 0) {
        this.router.navigate(['/cars']);
        this.toastr.error('Payment Error');
      }
    }
  }

  payment() {
    this.paymentService.payment().subscribe((response) => {
      this.toastr.success('Payment Successful');
    });
  }
}
