import { Component, OnInit } from '@angular/core';
import { faHome, faCommentDots, faUser, faBookmark, faCog, faChevronUp, faChevronDown, faBars} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {
  faHome = faHome;
  faCommentDots = faCommentDots;
  faUser = faUser;
  faBookmark = faBookmark;
  faCog = faCog;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faBars = faBars;

  isNavOpen: boolean = false;
  isOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccountInfo(){
    if(!this.isOpen){
      this.isOpen = true
    }else{
      this.isOpen = false
    }
  }

  toggleNavBar(){
    if(!this.isNavOpen){
      this.isNavOpen = true
    }else{
      this.isNavOpen = false
    }
  }

}
