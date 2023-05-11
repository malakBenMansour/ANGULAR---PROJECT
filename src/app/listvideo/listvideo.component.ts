import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-listvideo',
  templateUrl: './listvideo.component.html',
  styleUrls: ['./listvideo.component.css']
})
export class ListvideoComponent implements OnInit {
  listVideo!: Video[] ;
  constructor(private videoService:VideoServiceService) { }

  ngOnInit(): void {
    this.videoService.getVideo().subscribe(data=> 
      {
        this.listVideo=data
      }); 
  }

  partager(i:number) {
    if(this.listVideo[i].public==true){
    this.listVideo[i].nbShared++ ;
  }}

  modifier(i:number) {
   if(  this.listVideo[i].nbShared==0)
   {
    this.listVideo[i].nbShared++ ;
   }
  }


}
