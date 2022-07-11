import { Component, OnInit } from '@angular/core';
import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private service: BlogDetailsService) { }
  dessertData:any;
  favorite:any;
  
  ngOnInit(): void {
    this.dessertData = this.service.dessertDetails;
  }

}
