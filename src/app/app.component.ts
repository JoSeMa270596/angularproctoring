import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VideoPlayerComponent } from "./video-player/video-player.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VideoPlayerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  public currentStream: any;
  ngOnInit(): void {
    this.checkMediaSource();
  }
  checkMediaSource = () => {
    if (navigator && navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia(  {
        audio: false,
        video: true
      }).then(stream =>{
        this.currentStream = stream;
      }).catch(()=>{
        console.log("no hay permisos");

      })
    }else{
      console.log("No se encontro dispositivos ");

    }
  }
}
