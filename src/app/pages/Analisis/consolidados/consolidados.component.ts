import {Component, OnInit} from '@angular/core';
// declare function init_plugins();
// declare function init_pluguins_multi();
// declare function init_plugin_selects();
@Component({
  selector: 'app-consolidados',
  templateUrl: './consolidados.component.html',
  styleUrls: ['./consolidados.component.css']
})
export class ConsolidadosComponent implements OnInit {
  constructor() {
    // init_plugins();
    // init_plugin_selects();
    console.log('Constructor consolidados');
  }

  ngOnInit() {}
}
