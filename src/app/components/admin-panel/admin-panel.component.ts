import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Brand } from 'src/app/models/brand';
import { Car } from 'src/app/models/car';
import { CarDelete } from 'src/app/models/carDelete';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { CarService } from 'src/app/services/car.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css'],
})
export class AdminPanelComponent implements OnInit {
  cars: Car[];
  brands: Brand[];
  colors: Color[];
  constructor(
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.getCars();
    this.getBrands();
    this.getColors();
  }

  getCars() {
    this.carService.getCars().subscribe((response) => {
      this.cars = response.data;
    });
  }
  getBrands() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColors() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  deleteCar(car: Car) {
    let carModel: CarDelete = {
      carId: car.carId,
      carName: car.carName,
      brandId: car.brandId,
      colorId: car.colorId,
      modelYear: car.modelYear,
      dailyPrice: car.dailyPrice,
      description: car.description,
    };
    this.carService.delete(carModel).subscribe(
      (response) => {
        this.toastr.success(response.message, 'Success');
        window.location.reload();
      },
      (responseError) => {
        this.toastr.error('Error');
      }
    );
  }
  deleteBrand(brand: Brand) {
    this.brandService.delete(brand).subscribe(
      (response) => {
        this.toastr.success(response.message, 'Success');
        window.location.reload();
      },
      (responseError) => {
        this.toastr.error('Error');
      }
    );
  }
  deleteColor(color: Color) {
    this.colorService.delete(color).subscribe(
      (response) => {
        this.toastr.success(response.message, 'Success');
        window.location.reload();
      },
      (responseError) => {
        this.toastr.error('Error');
      }
    );
  }
}
