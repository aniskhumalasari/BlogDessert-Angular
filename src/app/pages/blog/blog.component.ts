import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BlogComponent implements OnInit {

  // searchTerm !: string;
  BlogDetailsService: any;

  constructor(private service: BlogDetailsService) { }
  dessertData:any;
  searchKey:string ="";
  
  ngOnInit(): void {
    this.dessertData = this.service.dessertDetails;
    // this.BlogDetailsService.search.subscribe((val:any)=>{
    // this.searchKey = val;
  }

  // search(event:any) {
  //   this.searchTerm = (event.target as HTMLInputElement). value;
  //   console.log(this.searchTerm);
  //   this.BlogDetailsService.search.next(this.searchTerm);
  // }
}

