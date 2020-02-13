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
  pics: Object[];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
    this.http.listImages().subscribe(data => {
      this.photos = data;
      //console.log(this.photos);
      this.fillModal(this.photos);
    });
  }

  fillModal(photos) {
    var imgArray = new Array();
    var i = 0;
    var a,b,c,d,e,f,g,h,j,k;
    var modal = document.getElementById("list");
    for(var pic of this.photos as Object[]) {
      console.log(pic);
      if (i==0) {a=pic;}
      else if (i==1) {b=pic;}
      else if (i==2) {c=pic;}
      else if (i==3) {d=pic;}
      else if (i==4) {e=pic;}
      else if (i==5) {f=pic}
      else if (i==6) {g=pic}
      else if (i==7) {h=pic;}
      else if (i==8) {j=pic;}
      else {k=pic;}
      imgArray[i] = new Image(150,200);
      imgArray[i].src = pic['urls']['raw'];
      modal.appendChild(imgArray[i]);
      i++;
    }
    imgArray[0].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = a['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = a['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = a['alt_description'];
    };

    imgArray[1].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = b['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = b['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = b['alt_description'];
    };
    imgArray[2].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = c['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = c['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = c['alt_description'];
    };
    imgArray[3].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = d['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = d['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = d['alt_description'];
    };
    imgArray[4].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = e['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = e['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = e['alt_description'];
    };
    imgArray[5].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = f['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = f['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = f['alt_description'];
    };
    imgArray[6].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = g['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = g['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = g['alt_description'];
    };
    imgArray[7].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = h['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = h['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = h['alt_description'];
    };
    imgArray[8].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = j['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = j['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = j['alt_description'];
    };
    imgArray[9].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = k['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = k['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = k['alt_description'];
    };
    //console.log(imgArray);
  }
  clear() {
    var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
    photo_selected.src = "";
    var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
    name_of_photo.value = "";
    var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
    desc_of_photo.value = "";
  }
}