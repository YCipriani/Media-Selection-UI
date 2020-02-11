import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  images: Object;


  constructor(private http_client: HttpClient) { }

  listImages() {
    return this.http_client.get("https://api.unsplash.com/search/photos?query=london&client_id=8432caa0c84fa9846b8de16a15206f888a2c03f2e0127ea61b08107caf8eaa7a");
  }
}
