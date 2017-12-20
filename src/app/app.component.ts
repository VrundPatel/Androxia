import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {

  team = [
    {
      'name': 'Asutosh Patel',
      'title': 'Co-Founder',
      'imageUrl': '',
      'aboutMe': '',
      'facebookLink': '',
      'twitterLink': '',
      'linkedInLink': '',
      'youtubeLink': '',
      'githubLink': ''
    }
  ]
}
