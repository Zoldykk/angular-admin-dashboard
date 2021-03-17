import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.scss']
})
export class SuggestionsComponent implements OnInit {
  suggestedUsers = [] = [
    {
      id: 0,
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg',
      socialId: '@dr_sarah',
      isFollowed: false
    },
    {
      id: 1,
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg',
      socialId: '@dr_sarah',
      isFollowed: false
    },
    {
      id: 2,
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg',
      socialId: '@dr_sarah',
      isFollowed: false
    },
  ]  

  constructor() { }

  ngOnInit(): void {
  }

  handleClick(id : any) {
    if(!this.suggestedUsers[id].isFollowed){
      this.suggestedUsers[id].isFollowed = true
    }else{
      this.suggestedUsers[id].isFollowed = false
    }
  }

}
