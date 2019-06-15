import { Component, OnInit } from '@angular/core';
declare var Vex: any;
@Component({
  selector: 'app-note-flashcard',
  templateUrl: './note-flashcard.component.html',
  styleUrls: ['./note-flashcard.component.scss']
})
export class NoteFlashcardComponent implements OnInit {
  public VF;
  constructor() { }

  ngOnInit() {
    this.SightReading();
  }

  SightReading() {
    const VF = Vex.Flow;

    // Create an SVG renderer and attach it to the DIV element named "boo".
    const div = document.getElementById('boo');
    div.innerHTML = '';
    const renderer = new VF.Renderer(div, VF.Renderer.Backends.SVG);

    // Configure the rendering context.
    renderer.resize(500, 500);
    const context = renderer.getContext();
    context.setFont('Arial', 10, '').setBackgroundFillStyle('#eed');

    // Create a stave of width 400 at position 10, 40 on the canvas.
    const stave = new VF.Stave(10, 40, 400);

    // Add a clef and time signature.
    stave.addClef('treble').addTimeSignature('4/4');




    const notes = [
      // A quarter-note C.
      new VF.StaveNote({ clef: 'treble', keys: [this.getKeys()], duration: 'q' }),

      // A quarter-note D.
      new VF.StaveNote({ clef: 'treble', keys: ['d/4'], duration: 'q' }),

      // A quarter-note rest. Note that the key (b/4) specifies the vertical
      // position of the rest.
      new VF.StaveNote({ clef: 'treble', keys: ['b/4'], duration: 'qr' }),

      // A C-Major chord.
      new VF.StaveNote({ clef: 'treble', keys: ['c/4', 'e/4', 'g/4'], duration: 'q' })
    ];

    // Create a voice in 4/4 and add above notes
    const voice = new VF.Voice({ num_beats: 4, beat_value: 4 });
    voice.addTickables(notes);

    // Format and justify the notes to 400 pixels.
    const formatter = new VF.Formatter().joinVoices([voice]).format([voice], 400);

    // Render voice
    voice.draw(context, stave);

    // Connect it to the rendering context and draw!
    stave.setContext(context).draw();
  }

  getNotes() {
    const octave = '4';
    const notesStrings = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

    return notesStrings[Math.floor(Math.random() * notesStrings.length)];
  }

  getKeys() {
    return this.getNotes() + '/' + this.getOctave();
  }

  getOctave() {
    return '4';
  }

}
