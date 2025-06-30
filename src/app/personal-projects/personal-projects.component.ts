import { Component, ViewChild } from '@angular/core';
import { IgxCarouselComponent } from 'igniteui-angular';

@Component({
  selector: 'app-personal-projects',
  standalone: true,
  imports: [],
  templateUrl: './personal-projects.component.html',
  styleUrl: './personal-projects.component.scss'
})
export class PersonalProjectsComponent {

  @ViewChild('carousel', { static: true }) carousel!: IgxCarouselComponent;

  slides: any[] = [];
  projects: any[] = []

  currentIndex: number =  0;
}
