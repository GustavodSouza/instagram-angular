import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatProgressBarModule, ThemePalette } from '@angular/material';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { resolve } from 'url';

@Component({
  selector: 'app-stories-aberto',
  templateUrl: './stories-aberto.component.html',
  styleUrls: ['./stories-aberto.component.scss']
})
export class StoriesAbertoComponent implements OnInit {

  public faTimes = faTimes;
  public value = 0;
  public imgs = ['img1', 'img2', 'img3'];
  public posicaoImg = 0;

  constructor(
    public popupRef: MatDialogRef<StoriesAbertoComponent>,
  ) { }

  ngOnInit() {
    this.contador();
  }

  public async contador(): Promise<void> {
    let x = 0;

    while (x < 100) {
      await new Promise((r) => setTimeout(r, 500));
      x++;

      if (x === 15) {
        if (this.posicaoImg > this.imgs.length - 1) {
          return;
        }
        this.posicaoImg++;
        x = 0;
      }
      this.value = (x / 15) * 100;
    }
  }
}
