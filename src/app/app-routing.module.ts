import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddVideoComponent } from './add-video/add-video.component';
import { ListvideoComponent } from './listvideo/listvideo.component';

const routes: Routes = [
{path: 'cherchervideo' , component: ListvideoComponent } , 
  
  {path: 'addvideo' , component: AddVideoComponent } ,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
