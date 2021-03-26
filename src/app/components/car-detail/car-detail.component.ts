import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css'],
})
export class CarDetailComponent implements OnInit {
  car: Car;
  carImages: CarImage[];
  imageUrl = 'https://localhost:44301/';
  constructor(
    private carImagesService: CarImageService,
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['carId']) {
        this.getCarDetails(params['carId']);
        this.getCarImagesByCarId(params['carId']);
      }
    });
  }
  getCarDetails(carId: number) {
    this.carService.getCarDetail(carId).subscribe((response) => {
      this.car = response.data;
      console.log(response);
    });
  }
  getCarImagesByCarId(carId: number) {
    this.carImagesService.getCarImagesByCarId(carId).subscribe((response) => {
      this.carImages = response.data;
    });
  }
}
