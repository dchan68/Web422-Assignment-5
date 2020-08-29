const perPage = 6;

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BlogPost } from './BlogPost';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class PostService {
  constructor(private http: HttpClient) {}

  getPosts(page, tag, category): Observable<BlogPost[]> {
    let link = `https://daryan-app-web422.herokuapp.com/api/posts?page=${page}&perPage=${perPage}`;

    if (tag != null && tag != '') {
      link += `&tag=${tag}`;
    }

    if (category != null && tag != '') {
      link += `&category=${category}`;
    }

    return this.http.get<BlogPost[]>(link);
  }

  getPostbyId(id): Observable<BlogPost> {
    return this.http.get<BlogPost>(
      `https://daryan-app-web422.herokuapp.com/api/posts/${id}`
    );
  }

  getCategories(): Observable<any> {
    return this.http.get<any>(
      'https://daryan-app-web422.herokuapp.com/api/categories'
    );
  }

  getTags(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://daryan-app-web422.herokuapp.com/api/tags'
    );
  }
}
