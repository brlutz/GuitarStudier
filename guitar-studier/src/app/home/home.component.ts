import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Guitar Studier';
  // tslint:disable-next-line:max-line-length
  jumbotronText1 = 'For intermediate guitar, there is no better way to get better than to study guitar chords all over the neck and their relations to scales.';
  jumbotronText2 = 'Use the guitar studies and exercises below to improve your intermediate guitar.';

  constructor() { }

  ngOnInit() {
  }
}
