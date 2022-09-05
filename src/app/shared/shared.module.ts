import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ImgSliderComponent } from './components/img-slider/img-slider.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaginationComponent,
    ImgSliderComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [
    PaginationModule,
    PagingHeaderComponent,
    PaginationComponent,
    ImgSliderComponent]
})
export class SharedModule { }
