import { Component, OnInit } from '@angular/core';
import { faHeart, faCommentDots } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  faHeart = faHeart;
  faCommentDots = faCommentDots;

  images = [] = [
    {
      id: 0,
      counter: 0,
      path: 'assets/images/post-1.png',
      isLiked: false, 
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg'
    },
    {
      id: 1,
      counter: 0,
      path: 'assets/images/post-2.jpg',
      isLiked: false,
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg'
    },
    {
      id: 2,
      counter: 0,
      path: 'assets/images/post-3.png',
      isLiked: false,
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg'
    },
    {
      id: 3,
      counter: 0,
      path: 'assets/images/post-1.png',
      isLiked: false,
      username: 'Dean Winchester',
      userImage: 'assets/images/profile-2.jpg'
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  incrementCounter(id: any){
    console.log(this.getStoredData()[id])
    if(!this.getStoredData()[id].isLiked){
      let action = 'INCREMENT'
      this.updateLocalStorage(id, action)
    } else{
      let action = 'DECREMENT'
      this.updateLocalStorage(id, action)
    }
  }

  getStoredData(){
    let data = JSON.parse(localStorage.getItem('data')!)
    if(data){
      return data
    }else {
      let initialData = localStorage.setItem('data', JSON.stringify(this.images))  
      return initialData
    }
  }

  updateLocalStorage(id: any, action: String){
    if(action === 'INCREMENT'){
      let storedData = JSON.parse(localStorage.getItem('data') || '{}')
      storedData[id].counter += 1
      storedData[id].isLiked = true
      localStorage.setItem('data', JSON.stringify(storedData))  
    }else{
      let storedData = JSON.parse(localStorage.getItem('data') || '{}')
      storedData[id].counter -= 1
      storedData[id].isLiked = false
      localStorage.setItem('data', JSON.stringify(storedData))
    }
  }

}
