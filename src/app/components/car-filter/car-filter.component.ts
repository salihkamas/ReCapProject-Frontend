import { Component, OnInit } from '@angular/core';
import { Brand } from 'src/app/models/brand';
import { Color } from 'src/app/models/color';
import { BrandService } from 'src/app/services/brand.service';
import { ColorService } from 'src/app/services/color.service';

@Component({
  selector: 'app-car-filter',
  templateUrl: './car-filter.component.html',
  styleUrls: ['./car-filter.component.css'],
})
export class CarFilterComponent implements OnInit {
  brands: Brand[] = [];
  colors: Color[] = [];
  brandF: number;
  colorF: number;
  constructor(
    private brandService: BrandService,
    private colorService: ColorService
  ) {}

  ngOnInit(): void {
    this.getBrand();
    this.getColor();
  }

  getBrand() {
    this.brandService.getBrands().subscribe((response) => {
      this.brands = response.data;
    });
  }
  getColor() {
    this.colorService.getColors().subscribe((response) => {
      this.colors = response.data;
    });
  }
  
  getSelectedBrand(brandId: number) {
    if (this.brandF == brandId) {
      return true;
    } else {
      return false;
    }
  }
  getSelectedColor(colorId: number) {
    if (this.colorF == colorId) {
      return true;
    } else {
      return false;
    }
  }
}
