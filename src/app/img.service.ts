import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs'
import { PyapiService } from './pyapi.service';

@Injectable({
  providedIn: 'root'
})
export class ImgService {

  private imgDataSubject: BehaviorSubject<Blob | null> = new BehaviorSubject<Blob | null>(null);
  public imgData$: Observable<Blob | null> = this.imgDataSubject.asObservable();


  constructor(private pyapi: PyapiService) { 
    this.setImg();
  }

  setImg(): void {
    console.log("img.service setImg");
    this.pyapi.getImg().subscribe(
      img => {
        this.imgDataSubject.next(img);
      },
      error => {
        return error;
      }
    );
  }
}
