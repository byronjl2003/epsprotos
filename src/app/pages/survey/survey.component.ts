import { Component, OnInit } from '@angular/core';
declare function init_plugins();
@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    init_plugins();
  }

}
