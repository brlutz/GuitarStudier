import { Component, OnInit } from '@angular/core';
declare var Vex: any;
@Component({
  selector: 'app-note-flashcard',
  templateUrl: './note-flashcard.component.html',
  styleUrls: ['./note-flashcard.component.scss']
})
export class NoteFlashcardComponent implements OnInit {
  public VF;
  constructor() { this.VF = Vex.Flow; }

  ngOnInit() {
    this.SightReading();
  }

  SightReading() {

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = document.getElementById('boo');
    div.innerHTML = '';
    const renderer = new this.VF.Renderer(div, this.VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    const context = renderer.getContext();
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new this.VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef('treble').addTimeSignature('4/4');




    const notes = [
      // A quarter-note C.
     this.getNote(),

    // A quarter-note D.
      new this.VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' }),

      // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // position of the rest.
      new this.VF.StaveNote({ clef: 'treble', keys: ['b/4'], duration: 'qr' }),

      // A C-Major chord.
      new this.VF.StaveNote({ clef: 'treble', keys: ['c/4', 'e/4', 'g/4'], duration: 'q' })
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
      note.addAccidental(0, new this.VF.Accidental('#'));
    } else if (rand === 1) {
      note.addAccidental(0, new this.VF.Accidental('b'));
    }

    return note;
  }
  getNoteValues() {
    const octave = '4';

    // tslint:disable-next-line:max-line-length
    const notesStrings = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'a#', 'b#', 'c#', 'd#', 'e#', 'f#', 'g#', 'ab', 'bb', 'cb', 'db', 'eb', 'fb', 'gb'];

    return notesStrings[Math.floor(Math.random() * notesStrings.length)];
  }

  getKeys() {
    return this.getNoteValues() + '/' + this.getOctave();
  }

  getOctave() {
    const octaves = ['3', '4', '5'];
    return octaves[Math.floor(Math.random() * octaves.length)];
  }

}
