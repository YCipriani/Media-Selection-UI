import { HttpService } from './../http.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-form',
  templateUrl: './media-form.component.html',
  styleUrls: ['./media-form.component.css']
})
export class MediaFormComponent implements OnInit {
  showModal: boolean;
  photos: Object;
  name: string;
  description: string;
  element: HTMLImageElement;

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    var imgArray = new Array();
    var i = 0;
    var modal = document.getElementById("list");
    this.http.listImages().subscribe(data => {
      this.photos = data;
      console.log(this.photos);
      for(var pic of this.photos['results']) {
        console.log("OK");
        console.log(pic);
        console.log(pic['urls']['raw']);
        imgArray[i] = new Image(150,150);
        imgArray[i].src = pic['urls']['raw'];
        modal.appendChild(imgArray[i]);
        i++;
      }
    });
  }
}
