import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BlogDetailsService } from 'src/app/services/blog-details.service';

@Component({
  selector: 'app-blogpage',
  templateUrl: './blogpage.component.html',
  styleUrls: ['./blogpage.component.css']
})
export class BlogpageComponent implements OnInit {

  constructor(private param:ActivatedRoute, private service:BlogDetailsService) { }
  getBlogId:any;
  blogData:any;
  dessertData:any;

  ngOnInit(): void {
    this.getBlogId = this.param.snapshot.paramMap.get('id');
    console.log(this.getBlogId,"getblog");
    if(this.getBlogId)
    {
      this.blogData = this.service.dessertDetails.filter((value)=>{
        return value.id == this.getBlogId;
      });
      console.log(this.blogData,'blogData>>');
    }
    this.dessertData = this.service.dessertDetails;
  }
}

