import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute } from '@angular/router';
import { Ideactivate } from '../can-confirmguard.guard';


@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css'],
})
export class CreateProductComponent implements Ideactivate {
  productForm!: FormGroup;
  productId: string | null = null;
  isEdit:boolean=false;
  constructor(
    private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private http: HttpService
  ) {
    this.productId = this.activatedroute.snapshot.paramMap.get('id');
    if(this.productId){
      this.isEdit =true;
    }
  };
  isExit(): boolean {
    if(this.productForm.dirty){
      if(confirm("Do you want to continue?")){
        return true;
      }else{
        return false;
      }
    }else{
      return true;
    }
  }

  ngOnInit() {
    console.log("ngOnInit")
    this.product();
    if(this.isEdit){
      this.getProductDetailsbyId();
    }
  
  }
  getProductDetailsbyId() {
    let endPoint = "products/" + this.productId;
    this.http.getDataToServer(endPoint).subscribe(
      (response: any) => {
        console.log('response', response);
        this.productForm.patchValue(response);
      },
      () => {}
    );
  }
  product() {
    this.productForm = this.fb.group({
      productId:[''],
      productname: [''],
      stock: [''],
      price: [''],
      category: [''],
    });
  }
save(){
  if(this.isEdit){
   this. updatePorductDetails();
  }else{
    this.saveProductDetails();
  }
}
updatePorductDetails(){
  const endPoint="products/"+this.productId; 
this.http.putDataToServer(endPoint,this.productForm.value).subscribe(
  (response:any)=>{
console.log("update successful",response);

  },
  (error)=>{

  })
}

  saveProductDetails() {
    console.log(this.productForm.value);
    this.http.postDataToServer('products', this.productForm.value).subscribe(
      (el) => {
        console.log(el);
      },
      (error) => {
        // console.log(error);
      },
      () => {}
    );
  }
}
