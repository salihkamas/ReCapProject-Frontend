import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  dataLoaded = false;
  currentCar: Car;
  filterText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['brandId']) {
        this.getCarsByBrand(params['brandId']);
      } else if (params['colorId']) {
        this.getCarsByColor(params['colorId']);
      } else if (params['brandId'] && params['colorId']) {
        this.getByBrandIdAndColorId(params['brandId'], params['colorId']);
      } else {
        this.getCars();
      }
    });
  }

  setCurrentCar(car: Car) {
    this.currentCar = car;
  }
  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
    });
  }
  getByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService
      .getByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
      });
  }
}
