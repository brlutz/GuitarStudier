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

  chords = ['maj', 'min', 'Maj7', 'm7', '7', 'm7/b5', 'm6'];
  allChords = ['maj', 'min', 'Maj7', 'm7', '7', 'm7/b5', 'm6'];
  Arr = Array; // Array type captured in a variable
  num = 20;
  // tslint:disable-next-line:max-line-length
  allGuitarStrings = ['1', '2', '3', '4', '5', '6']; // ['6th', '5th', '4th', '3rd', '2nd', '1st'];
  guitarStrings = ['1', '2', '3', '4', '5', '6'];

  notes = ['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];
  allNotes = ['Ab', 'A', 'A#', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#'];


  constructor() {
    this.count = 0;
  }


  ngOnInit() {
    this.JazzChords();
  }

  JazzChords() {
    // const notes = ['A', 'A#', 'A', 'Bb', 'B', 'C', 'C#', 'Db', 'D', 'D#', 'Eb', 'E', 'F', 'F#', 'Gb', 'G', 'G#', 'Ab'];
    // const strings = ['6th', '5th', '4th', '3rd', '2nd', '1st'];
    // const chords = ['maj', 'min']; // ,'Maj7','m7', '7', 'm7/b5', 'm6'];
    this.count = this.count + 1;
    const noteRand = this.notes[Math.floor(Math.random() * this.notes.length)];
    const stringRand = this.guitarStrings[Math.floor(Math.random() * this.guitarStrings.length)];
    const chordRand = this.chords[Math.floor(Math.random() * this.chords.length)];
    this.jazzChord = noteRand + chordRand + ' root on the ' + stringRand;
  }

  toggleString(e) {
    console.log('dfdds');
    console.log(e.target.value);
    if (e.target.checked && !this.guitarStrings.includes(e.target.value)) {
      this.guitarStrings.push(e.target.value);
    } else if (!e.target.checked && this.guitarStrings.includes(e.target.value)) {
      // tslint:disable-next-line:only-arrow-functions
      this.guitarStrings = this.guitarStrings.filter(function(value, index, arr) {
        return value !== e.target.value;
      });
    }

  }
  toggleChord(e) {
    console.log('dfdds');
    console.log(e.target.value);
    if (e.target.checked && !this.chords.includes(e.target.value)) {
      this.chords.push(e.target.value);
    } else if (!e.target.checked && this.chords.includes(e.target.value)) {
      // tslint:disable-next-line:only-arrow-functions
      this.chords = this.chords.filter(function(value, index, arr) {
        return value !== e.target.value;
      });
    }
  }

  toggleNote(e) {
    console.log('dfdds');
    console.log(e.target.value);
    if (e.target.checked && !this.notes.includes(e.target.value)) {
      this.notes.push(e.target.value);
    } else if (!e.target.checked && this.notes.includes(e.target.value)) {
      // tslint:disable-next-line:only-arrow-functions
      this.notes = this.notes.filter(function(value, index, arr) {
        return value !== e.target.value;
      });
    }
  }

}
