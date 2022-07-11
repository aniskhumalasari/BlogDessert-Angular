import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { BlogComponent } from './pages/blog/blog.component';
import { BlogpageComponent } from './pages/blogpage/blogpage.component';
import { ContactComponent } from './pages/contact/contact.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {path: '',component:HomeComponent},
  {path: 'gallery',component:GalleryComponent},
  {path: 'about',component:AboutComponent},
  {path: 'blog',component:BlogComponent},
  {path: 'blog/:id', component:BlogpageComponent},
  {path: 'contact',component:ContactComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
