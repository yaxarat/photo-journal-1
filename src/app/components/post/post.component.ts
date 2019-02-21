import {Component, OnInit} from '@angular/core';
import { Post } from '../../models/Post';
import { PostService } from '../../services/post.service';
import { UserService } from '../../services/user.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})

export class PostComponent implements OnInit {
  post: Post;
  id: string;

  constructor(
    private postService: PostService,
    private userService: UserService,
    private router: Router, private route: ActivatedRoute
  ) { }

  ngOnInit() {
    // Get id
    this.id = this.route.snapshot.params['id'];
    // Get post
    this.postService.getPost(this.id).subscribe(post => {
      if (post != null) {
        this.post = post;
      } else {
        console.log('This.post is null');
      }
    });
  }

  like() {
    this.post.like += 1;
    this.postService.updateLike(this.post);
  }
}
