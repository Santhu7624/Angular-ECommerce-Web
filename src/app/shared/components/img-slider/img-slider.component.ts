import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-img-slider',
  templateUrl: './img-slider.component.html',
  styleUrls: ['./img-slider.component.scss']
})
export class ImgSliderComponent implements OnInit {

  itemsPerSlide: number;
   slides = [
    {image: '../assets/images/logo.jpeg'},
    {image: '../assets/images/img.jpg'},
    {image: '../assets/images/img2.jpg'}

    // {image: '../assets/images/img4.jpg'},
    // {image: '../assets/images/img5.jpg'}
    // {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/5.jpg'},
    // {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/6.jpg'},
    // {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/7.jpg'},
    // {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/8.jpg'},
    // {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/1.jpg'},
    // {image: 'https://valor-software.com/ngx-bootstrap/assets/images/nature/2.jpg'}
  ];
  constructor() { }

  ngOnInit(): void {
    this.itemsPerSlide = this.mobileDevice() ? 1 : 1;
  }

  private mobileDevice(): boolean {
    return navigator.userAgent.match(/Android/i)
      ||  navigator.userAgent.match(/webOS/i)
      ||  navigator.userAgent.match(/iPhone/i)
      ||  navigator.userAgent.match(/iPad/i)
      ||  navigator.userAgent.match(/iPod/i)
      ||  navigator.userAgent.match(/BlackBerry/i)
      ||  navigator.userAgent.match(/Windows Phone/i)
      ? true : false;
  }

}
