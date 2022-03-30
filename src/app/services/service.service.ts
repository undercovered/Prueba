import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getInfo(tags:string, category:string) {
    console.log(category)
    const url_raiz = `${environment.url_api}/?key=${environment.api_key}&per_page=200`;
    if(tags === ''&& category === ''){
      return this.http.get(`${url_raiz}`)
      .pipe(map((response:any) => {
        return response.hits.map(
          (data:any) => ({previewURL:data.previewURL,
                          likes: data.likes,
                          tags: data.tags.replaceAll(' ','').split(','),
                          views: data.views,
                          webformatURL: data.webformatURL})
        )
      }))
    }
    else if (tags !== '' && category === '') {
      return this.http.get(`${url_raiz}&lang=es&q=${tags}&per_page=200`)
      .pipe(map((response:any) => {
        return response.hits.map(
          (data:any) => ({previewURL:data.previewURL,
                          likes: data.likes,
                          tags: data.tags.replaceAll(' ','').split(','),
                          views: data.views,
                          webformatURL: data.webformatURL})
        )
      }))
    }
    else if (tags === '' && category !== '') {
      return this.http.get(`${url_raiz}&lang=es&category=${category}&per_page=200`)
      .pipe(map((response:any) => {
        return response.hits.map(
          (data:any) => ({previewURL:data.previewURL,
                          likes: data.likes,
                          tags: data.tags.replaceAll(' ','').split(','),
                          views: data.views,
                          webformatURL: data.webformatURL})
        )
      }))
    }
    else {
      return this.http.get(`${url_raiz}&lang=es&q=${tags}&category=${category}&per_page=200`)
      .pipe(map((response:any) => {
        return response.hits.map(
          (data:any) => ({previewURL:data.previewURL,
                          likes: data.likes,
                          tags: data.tags.replaceAll(' ','').split(','),
                          views: data.views,
                          webformatURL: data.webformatURL})
        )
      }))
    }
  }
}
