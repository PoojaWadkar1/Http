import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css'],
})
export class ProductlistComponent {
  productlist: any = [];
  constructor(private http: HttpService) {
    
  }
  productlistAsync!:Observable<any>

  ngOnInit() {
    this.getproducts();
  }
  getproducts() {
    // console.log(' get products initiated');

    // this.http.getDataToServer('products').subscribe(
    //   (el: any) => {
    //     console.log('products responded');
    //     if (el && el.length > 0) {
    //       this.productlist = el;
    //     }
    //   },
    //   (error) => {
    //     alert(error);
    //   }
    // );
    this.productlistAsync=this.http.getDataToServer('products')
  }
  deleteProduct(index: number, productObj: any) {
    const endPoint = 'products/' + productObj.id;
    this.http.deleteProduct(endPoint).subscribe(
      (el: any) => {
        this.productlist.splice(index, 1);
        alert('Data deleted Successfully');
      },
      (error) => {
        alert(error);
      }
    );
  }
}
