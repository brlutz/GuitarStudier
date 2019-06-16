import { Component, OnInit, DebugElement } from '@angular/core';
declare var Vex: any;
@Component({
  selector: 'app-note-flashcard',
  templateUrl: './note-flashcard.component.html',
  styleUrls: ['./note-flashcard.component.scss']
})
export class NoteFlashcardComponent implements OnInit {
  public VF;
  name = 'Angular 6';
  marked = false;
  theCheckbox = false;

  notesStrings = [];
  octaves = [];
  // tslint:disable-next-line:max-line-length
  // notesStrings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a#', 'b#', 'c#', 'd#', 'e#', 'f#', 'g#', 'ab', 'bb', 'cb', 'db', 'eb', 'fb', 'gb'];

  constructor() { this.VF = Vex.Flow; }

  ngOnInit() {
    this.SightReading();
  }

  toggleNote(e) {

    this.marked = e.target.checked;
    console.log('dfdds');
    console.log(e.target.value);
    if (e.target.checked && !this.notesStrings.includes(e.target.value)) {
      this.notesStrings.push(e.target.value);
    } else if (!e.target.checked && this.notesStrings.includes(e.target.value)) {
      // tslint:disable-next-line:only-arrow-functions
      this.notesStrings = this.notesStrings.filter( function(value, index, arr) {
        return value !== e.target.value;
    });
    }

  }
  toggleOctave(e) {

    this.marked = e.target.checked;
    console.log('dfdds');
    console.log(e.target.value);
    if (e.target.checked && !this.octaves.includes(e.target.value)) {
      this.octaves.push(e.target.value);
    } else if (!e.target.checked && this.octaves.includes(e.target.value)) {
      // tslint:disable-next-line:only-arrow-functions
      this.octaves = this.octaves.filter( function(value, index, arr) {
        return value !== e.target.value;
    });
    }

  }


  SightReading() {

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = document.getElementById('boo');
    div.innerHTML = '';
    const renderer = new this.VF.Renderer(div, this.VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(400, 200);
    const context = renderer.getContext();
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new this.VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef('treble').addTimeSignature('4/4');




    const notes = [
      // A quarter-note C.
     this.getNote(),
     this.getNote(),
     this.getNote(),
     this.getNote()
    ];

    // Create a voice in 4/4 and add above notes
    const voice = new this.VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    const formatter = new this.VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }

  getNote() {
    const note = new this.VF.StaveNote({ clef: 'treble', keys: [this.getKeys()], duration: 'q' });
    const rand = Math.floor(Math.random() * 3);

    if (rand === 0) {
     // note.addAccidental(0, new this.VF.Accidental('#'));
    } else if (rand === 1) {
     // note.addAccidental(0, new this.VF.Accidental('b'));
    }

    return note;
  }
  getNoteValues() {
    // tslint:disable-next-line:max-line-length
    return this.notesStrings[Math.floor(Math.random() * this.notesStrings.length)];
  }

  getKeys() {
    const key = this.getNoteValues() + '/' + this.getOctave();
    console.log(key);
    return key;
  }

  getOctave() {
    const octaveRaw = this.octaves[Math.floor(Math.random() * this.octaves.length)];
    // do this to strip the character '' away
    return octaveRaw.substring(1, octaveRaw.length - 1);
  }

}
