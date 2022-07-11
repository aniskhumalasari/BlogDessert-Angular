import { Component, OnInit } from '@angular/core';
import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  constructor(private service: BlogDetailsService) { }
  dessertData:any;

  ngOnInit(): void {
    this.dessertData = this.service.dessertDetails;
  }

}
