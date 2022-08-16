import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'My Fav PICZ';
  image1 = 'https://cdn.shopify.com/s/files/1/0322/2365/8028/products/Fearless_11.png?v=1649916423';
  image2 = 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/birria-tacos-1648842127.jpg';
  image3 = 'https://upload.wikimedia.org/wikipedia/commons/d/da/Strawberry_ice_cream_cone_%285076899310%29.jpg';

  constructor() { }

  ngOnInit() {
  }

}