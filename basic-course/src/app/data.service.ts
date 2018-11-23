import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Post } from './Post'

@Injectable({
  providedIn: 'root'
})
export class DataService {

	// its private when I use the http only on this class
  constructor(private http: HttpClient) {
  	console.log('---- service is working ----')
  }

  getData() {
  	// with Post we give more information to get hhtp method and we make explicit
  	// <Post[]> >> array of publications
  	return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts')
  }
}
