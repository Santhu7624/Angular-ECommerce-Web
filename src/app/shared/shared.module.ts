import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PaginationModule} from 'ngx-bootstrap/pagination';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { PagingHeaderComponent } from './components/paging-header/paging-header.component';
import { PaginationComponent } from './components/pagination/pagination.component';

@NgModule({
  declarations: [
    PagingHeaderComponent,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    PaginationModule.forRoot(),
    CarouselModule.forRoot()
  ],
  exports: [PaginationModule,
  PagingHeaderComponent,
PaginationComponent]
})
export class SharedModule { }
