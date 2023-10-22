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
  ){}

  ngOnInit(): void {
    this.imgServ.imgData$.subscribe(
      img => {
        if (img) {
          const blobUrl = URL.createObjectURL(img);
          this.nordlysImg = this.sanitizer.bypassSecurityTrustUrl(blobUrl);
        }
      }
    )

    
  }


}
