import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Car } from 'src/app/models/car';
import { CarService } from 'src/app/services/car.service';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css'],
})
export class CarComponent implements OnInit {
  cars: Car[];
  carImages: CarImage[];
  dataLoaded = false;
  currentCar: Car;
  filterText = '';

  constructor(
    private carService: CarService,
    private activatedRoute: ActivatedRoute,
    private carImageService: CarImageService
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
      this.setCoverImage(this.cars);
    });
  }
  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.setCoverImage(this.cars);
    });
  }
  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe((response) => {
      this.cars = response.data;
      this.dataLoaded = true;
      this.setCoverImage(this.cars);
    });
  }
  getByBrandIdAndColorId(brandId: number, colorId: number) {
    this.carService
      .getByBrandIdAndColorId(brandId, colorId)
      .subscribe((response) => {
        this.cars = response.data;
        this.setCoverImage(this.cars);
      });
  }
  getCarImage() {
    this.carImageService.getCarImages().subscribe((response) => {
      this.carImages = response.data;
    });
  }
  setCoverImage(carList: Car[]) {
    carList.forEach((item) => {
      this.carImageService
        .getCarImagesByCarId(item.carId)
        .subscribe((response) => {
          item.imagePath =
            'https://localhost:44301/' + response.data[0].imagePath;
        });
    });
  }
}
