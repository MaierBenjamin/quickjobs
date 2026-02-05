import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {
  items = [
    { title: 'Haushaltshilfe', img: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952' },
    { title: 'Gartenarbeit', img: 'https://images.unsplash.com/photo-1599687351724-dfa3c4ff81b1' },
    { title: 'Umzugshilfe', img: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c' },
    { title: 'Hundesitting', img: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b' },
  ];

  index = 0;

  get visibleItems() {
    return this.items.slice(this.index, this.index + 3);
  }

  next() {
    if (this.index < this.items.length - 3) this.index++;
  }

  prev() {
    if (this.index > 0) this.index--;
  }
}
