import { Component, OnInit } from '@angular/core';
import { faBell, faCloudUploadAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  faBell = faBell;
  faCloudUploadAlt = faCloudUploadAlt;
  faSearch = faSearch;
  constructor() { }

  ngOnInit(): void {
  }

}
