import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-jazz',
  templateUrl: './jazz.component.html',
  styleUrls: ['./jazz.component.scss']
})
export class JazzComponent implements OnInit {
  count;
  jazzChord;
  constructor() {
    this.count = 0;
  }


ngOnInit() {
  this.JazzChords();
}

JazzChords() {
  const notes = ['A', 'A#', 'A', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
  const strings = ['6th', '5th', '4th', '3rd', '2nd', '1st'];
  const chords = ['maj', 'min']; // ,'Maj7','m7', '7', 'm7/b5', 'm6'];
  this.count = this.count + 1;
  const noteRand = notes[Math.floor(Math.random() * notes.length)];
  const stringRand = strings[Math.floor(Math.random() * strings.length)];
  const chordRand = chords[Math.floor(Math.random() * chords.length)];
  this.jazzChord = noteRand + chordRand + ' with the root on the ' + stringRand;
}


}
