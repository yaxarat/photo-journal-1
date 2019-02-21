import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { DatePipe } from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-submit-post',
  templateUrl: './submit-post.component.html',
  styleUrls: ['./submit-post.component.css'],
  providers: [DatePipe]
})
export class SubmitPostComponent implements OnInit {
  user: User;
  post: Post;
  today = Date();

  constructor(
    private postService: PostService,
    private userService: UserService,
    private datePipe: DatePipe,
    private router: Router
  ) {
    this.today = this.datePipe.transform(this.today, 'yyyy-MM-dd');
  }

  ngOnInit() {
    this.post = {
    image: '',
    writer: 'An anonymous writer',
    title: '',
    timestamp: this.today,
    body: '',
    comment: [],
    commenter: [],
    like: 0,
    };

    console.log(this.user);
  }
    onSubmit() {
    this.postService.addPost(this.post);
    this.router.navigate(['/']);
  }
}
