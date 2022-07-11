import { Component, OnInit } from '@angular/core';
// import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() {}
  // constructor(private service: BlogDetailsService) { }
  // dessertData:any;

  ngOnInit(): void {
    // this.dessertData = this.service.dessertDetails;
  }

}
