import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { BlogPost } from '../BlogPost';
import { PostService } from '../post.service';
import { ActivatedRoute } from '@angular/router';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-post-data',
  templateUrl: './post-data.component.html',
  styleUrls: ['./post-data.component.css'],
})

export class PostDataComponent implements OnInit, OnDestroy {
  post: BlogPost;
  querySub: any;

  constructor(private data: PostService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.querySub = this.route.params.subscribe((params) => {
      this.data.getPostbyId(params['id']).subscribe((data) => {
        this.post = data;
      });
    });
  }

  ngOnDestroy() {
    if (this.querySub) {
      this.querySub.unsubscribe();
    }
  }
}
