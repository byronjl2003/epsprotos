import {Component, OnInit} from '@angular/core';
declare function init_plugins();
@Component(
    {selector: 'app-pages', templateUrl: './pages.component.html', styles: []})
export class PagesComponent implements OnInit {
  constructor() {
    console.log('Constructor de pages');
  }

  ngOnInit() {
    init_plugins();
  }
}
