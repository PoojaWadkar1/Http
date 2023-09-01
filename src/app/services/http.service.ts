import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppModule } from '../app.module';
import { catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
baseurl:string="http://localhost:3000/";
httpHeader:HttpHeaders=new HttpHeaders({
'content-type':'application/json'
})
  constructor(private http:HttpClient) { 
}
postDataToServer(endPoint:string,data:any ){
const Url=this.baseurl+endPoint;
return this.http.post(Url,data,{ headers:this.httpHeader})
}


getDataToServer(endPoint:string){
  const Url=this.baseurl+endPoint;
  return this.http.get(Url,{headers:this.httpHeader}).pipe(catchError(this.handleErrorResponse))

}
  handleErrorResponse(error:HttpErrorResponse):any{
console.log(error);
if(error.error instanceof ErrorEvent){
console.log("Client side error" + error.error.message);

}else{
console.log("Server side error",error.message);

}
 return throwError("Unable to process your request at the moment")


  }

  

postdata(endPoint:string,data:any){
  const url=this.baseurl+endPoint;
  return this.http.post(url,data,{headers:this.httpHeader}).pipe(catchError(this.handleErrorResponse));
}

 putDataToServer(endPoint:string,data:any){
const url =this. baseurl +endPoint;
return this. http.put(url,data,{headers:this.httpHeader}).pipe(catchError(this.handleErrorResponse));
 }

deleteProduct(endPoint:any){
const url=this.baseurl+endPoint;
return this.http.delete(url,{headers:this.httpHeader}).pipe(catchError(this.handleErrorResponse));
}


}
