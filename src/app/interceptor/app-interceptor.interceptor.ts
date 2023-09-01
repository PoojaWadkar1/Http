import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Injectable()
export class AppInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler):any{
  console.log("interceptor working",request);
  // get token from session storage
  if(!request.url.includes('login')){
    request=request.clone({setHeaders:{}})
  }else{
    const token="Bearer" + "qeuuruihgdlnf";
    request=request.clone({setHeaders:{'authorization-token':token}})
  }

    return next.handle(request).pipe(map((el:any)=>{
      console.log("response received");
    return el;
    }),
    catchError(this.handleErrorResponse))
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
  }