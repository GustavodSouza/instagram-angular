import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-fotos',
  templateUrl: './feed-fotos.component.html',
  styleUrls: ['./feed-fotos.component.scss']
})
export class FeedFotosComponent implements OnInit {

  @Input() public dados;

  constructor() { }

  ngOnInit() {

  }

}
