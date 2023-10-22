import { Component, OnInit } from '@angular/core';
import { ImgService } from '../img.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'nordlys-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  public nordlysImg: any | null;

  constructor(
    private imgServ: ImgService,
    private sanitizer: DomSanitizer
  ){
    console.log("Hello hello constructor angular home");
  }

  ngOnInit(): void {
    console.log("Hello in home ngoninit0");

    this.imgServ.imgData$.subscribe(
      img => {
        console.log("Hello in home ngoninit.5");
        if (img) {
          const blobUrl = URL.createObjectURL(img);
          this.nordlysImg = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
          console.log("Hello in home ngoninit");
        }
      },
      error => {
        console.log(`error: ${error}`);
      }
    );

    setInterval(() => {
      this.shuffleImage();
    }, 7000);
  }

  shuffleImage(): void {
    this.imgServ.setImg();
  }


}
