import { Component, OnInit } from '@angular/core';
import { faHeart, faCommentDots, faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-latest-post',
  templateUrl: './latest-post.component.html',
  styleUrls: ['./latest-post.component.scss']
})
export class LatestPostComponent implements OnInit {
  faHeart = faHeart;
  faCommentDots = faCommentDots;
  faBookmark = faBookmark;
  constructor() { }

  ngOnInit(): void {
  }

}
