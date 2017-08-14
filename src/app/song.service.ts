import { Injectable } from '@angular/core';
import { Song } from './song';
import { SONGS } from './list-songs';

@Injectable()
export class SongService {
	getSongs(): Song[]{
		return SONGS;
	}	
}