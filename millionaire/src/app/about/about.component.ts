import { Component, OnDestroy, OnInit } from '@angular/core';

import { environment } from 'src/environments/environment';

@Component({
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit, OnDestroy {
  public startAudio;

  constructor() {
    this.startAudio = new Audio(environment.production
      ? 'https://www.dropbox.com/s/9vwp0xdto7afq6c/start.mp3?raw=1'
      : '../../assets/audio/start.mp3'
    );
  }

  ngOnInit(): void {
    this.startAudio.play();
  }

  ngOnDestroy() {
    this.startAudio.pause();
    this.startAudio.currentTime = 0;
  }
}
