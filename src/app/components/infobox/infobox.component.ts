import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infobox',
  templateUrl: './infobox.component.html',
  styleUrls: ['./infobox.component.scss']
})
export class InfoboxComponent implements OnInit {

  text: string = "additional Info-Text on our info box!";
  toggleText: string = "Show"
  hidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.hidden = !this.hidden;
    if(this.hidden === false) {
      this.toggleText = "Hide"
    } else {
      this.toggleText = "Show"
    }
  }
}
