import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { Post } from './post.data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent implements OnInit {
  title = 'json-placeholder';
  posts: Post[] = [];

  searchPost: number;

  constructor(private appService: AppService) {}

  // Runs on start up the component
  ngOnInit() {
    this.getAllPosts();
  }

  getAllPosts() {
    this.appService.getPosts()
      .subscribe(
        (posts: Post[]) => this.posts = posts,
        (error) => console.log(error)
      )
  }
}
