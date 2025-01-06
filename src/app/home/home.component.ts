import { Component, ElementRef, ViewChild } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { NgFor } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatGridListModule, MatCardModule, NgFor, MatButtonModule, MatIconModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  columns = 2;
  stats= [
    {
      title: 'Angular',
      years: 9
    },
    {
      title: 'Git',
      years: 7
    },
    
    {
      title: 'Git',
      years: 7
    },
    
    {
      title: 'Git',
      years: 7
    },
    
    {
      title: 'Git',
      years: 7
    },
  ];


  numSequence(n: number): Array<number> { 
    return Array(n); 
  }

  setColumns() {
    this.columns;
  }
}
