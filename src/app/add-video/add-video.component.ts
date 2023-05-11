import { Component, OnInit } from '@angular/core';
import { Video } from '../model/video';
import { Router } from '@angular/router';
import { VideoServiceService } from '../service/video-service.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.css']
})
export class AddVideoComponent implements OnInit {

  video!: Video 
  selectnbrshared : any; 
  constructor(private vidser:VideoServiceService,private route:Router) { }

  ngOnInit(): void {
    this.video=new Video();
  }
  add():void
  {
     this.vidser.ajouter(this.video).subscribe(data=> {
      console.log(data);
    });
     this.route.navigateByUrl("/cherchervideo");
  }

}
