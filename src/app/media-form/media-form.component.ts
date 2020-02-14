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
    var a,b,c,d,e,f,g,h,j,k,l,m,n,o,p,q,r,s,t,u;
    var modal = document.getElementById("list");
    for(var pic of this.photos as Object[]) {
      //console.log(pic);
      //sets the list of 20 images with their appropriate variable
      if (i==0) {a=pic;}
      else if (i==1) {b=pic;}
      else if (i==2) {c=pic;}
      else if (i==3) {d=pic;}
      else if (i==4) {e=pic;}
      else if (i==5) {f=pic}
      else if (i==6) {g=pic}
      else if (i==7) {h=pic;}
      else if (i==8) {j=pic;}
      else if (i==9) {k=pic;}
      else if (i==10) {l=pic;}
      else if (i==11) {m=pic;}
      else if (i==12) {n=pic;}
      else if (i==13) {o=pic}
      else if (i==14) {p=pic}
      else if (i==15) {q=pic;}
      else if (i==16) {r=pic;}
      else if (i==17) {s=pic;}
      else if (i==18) {t=pic;}
      else {u=pic;}
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
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
      };

    imgArray[1].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = b['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = b['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = b['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[2].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = c['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = c['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = c['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[3].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = d['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = d['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = d['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[4].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = e['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = e['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = e['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[5].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = f['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = f['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = f['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[6].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = g['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = g['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = g['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[7].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = h['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = h['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = h['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[8].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = j['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = j['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = j['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[9].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = k['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = k['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = k['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[10].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = l['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = l['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = l['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[11].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = m['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = m['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = m['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[12].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = n['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = n['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = n['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[13].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = o['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = o['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = o['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[14].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = p['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = p['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = p['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[15].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = q['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = q['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = q['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[16].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = r['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = r['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = r['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[17].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = s['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = s['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = s['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[18].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = t['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = t['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = t['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
    };
    imgArray[19].onclick = function(){
      var photo_selected = document.getElementById('selected_image') as HTMLImageElement;
      photo_selected.src = u['urls']['raw'];
      var name_of_photo = document.getElementById('name') as HTMLTextAreaElement;
      name_of_photo.value = u['description'];
      var desc_of_photo = document.getElementById('description') as HTMLTextAreaElement;
      desc_of_photo.value = u['alt_description'];
      document.getElementById("clear_image").style.visibility = "visible";
      document.getElementById("myModal").style.visibility = "hidden";
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
    document.getElementById("clear_image").style.visibility = "hidden";
  }

  openModal() {
    this.showModal =true;
    document.getElementById("myModal").style.visibility = "visible";
    console.log("here");
  }

}