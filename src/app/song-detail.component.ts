import { Component, Input } from '@angular/core';
import { Song } from './song';

@Component({
	selector: 'song-detail',
	template: `
	<div *ngIf="song" class="col-xs-12 col-md-6">
	<h3>{{song.title}}</h3>

	<hr>
	<div class="row">
	<button type="button" class="btn btn-primary pull-right">Edit</button>
	<button type="button" class="btn btn-link pull-right">Delete</button>
	</div>
	<div><label>Artist : {{song.artist}}</label></div>
	<div><label>Duration : {{song.duration}}</label></div>
	<div><p>{{song.description}}</p></div>
	</div>
	`
})

export class SongDetailComponent {
	@Input()
	song: Song;
}