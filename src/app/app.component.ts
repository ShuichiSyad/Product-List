import { Component, OnInit } from '@angular/core';
import { Song } from './song';
import { SongService } from './song.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SongService]
})
export class AppComponent implements OnInit{
  title = 'Song DB';
  username = 'Irsyad';
  songs: Song[];
  selectedSong: Song;

  constructor(private songService: SongService) { }

  ngOnInit(): void {
  	this.getSongs();
  }

  getSongs(): void{
  this.songs = this.songService.getSongs();
  }
   onSelect(song: Song): void {
  this.selectedSong = song;
  }
}
