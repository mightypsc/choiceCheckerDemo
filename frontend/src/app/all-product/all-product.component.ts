import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.scss']
})
export class AllProductComponent implements OnInit {

  currentPage = 1;

  constructor() { }

  ngOnInit() {
  }

  // toggleHeart() {
  //   this.
  // }
}
