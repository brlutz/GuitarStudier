import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-triads',
  templateUrl: './triads.component.html',
  styleUrls: ['./triads.component.scss']
})
export class TriadsComponent implements OnInit {
  count;
  triad;
  constructor() {
    this.count = 0;
  }


ngOnInit() {
   this.Triads();
}

Triads() {
  const notes = ['A', 'A#', 'A', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
  const strings = ['6th', '5th', '4th', '3rd', '2nd', '1st'];
  const chords = ['maj', 'min']; // ,'Maj7','m7', '7', 'm7/b5', 'm6'];
  this.count = this.count + 1;
  const noteRand = notes[Math.floor(Math.random() * notes.length)];
  const stringRand = strings[Math.floor(Math.random() * strings.length)];
  const chordRand = chords[Math.floor(Math.random() * chords.length)];
  this.triad = noteRand + chordRand + ' with the root on the ' + stringRand;
}

}
