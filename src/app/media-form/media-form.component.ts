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
      for(var pic of this.photos as Object[]) {
        console.log("OK");
        console.log(pic);
        console.log(pic['urls']['raw']);
        imgArray[i] = new Image(150,200);
        imgArray[i].src = pic['urls']['raw'];
        modal.appendChild(imgArray[i]);
        imgArray[i].onclick = function(){
          // var selected = new Image(300,350);
          // selected.src = pic['urls']['raw'];
          // var placement = document.getElementById("image_place");
          // placement.appendChild(selected);

          var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
          photo_selected.src = pic['urls']['raw'];
          var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
          name_of_photo.value = pic['description'];
          var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
          desc_of_photo.value = pic['alt_description'];
          //alert( 'You clicked me' );
        };
        i++;
      }

    });
  }
}
