import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import * as fs from 'fs';
@Component({
  selector: 'app-timeline-slider',
  templateUrl: './timeline-slider.component.html',
  styleUrls: ['./timeline-slider.component.scss']
})
export class TimelineSliderComponent implements OnChanges{
  years : Array<{ position: number; label: string; date?: Date }>= [];
  months = Array.from({ length: 120 }, (_, i) => ({ position: i * 0.833 })); // 120 months (10 years * 12)
  @Input() projects: Array<{ name: string; creation: string; updated: string; banner: string; description: string; topics: string[], icon: string }> = [];
  @Input() currentIndex: number = 0;

  @Output() selectCard = new EventEmitter<number>();
  
  thumbPosition = 0;
  dragging = false;
  cards: any[] = [];

  async  ngOnChanges(){
      this.generateNotches();
    
      this.generateCards();
  }
  snapToClosestYear(): void {
    const closestYear = this.years.reduce((prev, curr) =>
      Math.abs(curr.position - this.thumbPosition) < Math.abs(prev.position - this.thumbPosition) ? curr : prev
    );
    this.thumbPosition = closestYear.position;
  }

  generateNotches(): void {
    if (!this.projects || this.projects.length === 0) return;

    const startDate = new Date(Math.min(...this.projects.map(p => new Date(p.creation).getTime())));
    const endDate = new Date(Math.max(...this.projects.map(p => new Date(p.updated).getTime())));
    const totalMonths = this.calculateTotalMonths(startDate, endDate);
    let currentDate = new Date(startDate);
    let positionStep = 100 / totalMonths;
    let position = 0;

    while (currentDate <= endDate) {
      const isYearStart = currentDate.getMonth() === 0;
      if(currentDate.getMonth() % 2 === 0)      this.years.unshift({
        position: 100-position,
        label: isYearStart ? currentDate.getFullYear().toString() : "",
      });

      currentDate.setMonth(currentDate.getMonth() + 1);
      position += positionStep;
    }
  }
  generateCards(): void {
    
    this.projects = this.projects.sort((a,b) => (new Date(b.creation)).getTime() - new Date(a.creation).getTime());
    if (!this.projects || this.projects.length === 0) return;
  
    this.cards = this.projects.map((project, index) => {
      let position = this.calculatePosition(project.creation);
  
      // Check for overlap with previous card
  
      let result =  {
        position: position,
        label: project.name,
        img: project.banner,
      };
      
      if(project.icon !== ""){
        result.img = project.icon
      }


      return result
    });
  }
  

    calculatePosition(dateString: string): number {
      const projectDate = new Date(dateString);
      const startDate = new Date(Math.min(...this.projects.map(p => new Date(p.creation).getTime())));
      const endDate = new Date(Math.max(...this.projects.map(p => new Date(p.updated).getTime())));
      const totalMonths = this.calculateTotalMonths(startDate, endDate);

      const monthsBetween = this.calculateTotalMonths(projectDate,  endDate);
      const position = (monthsBetween / totalMonths)*100;
      console.log(position)
      return  position;
    }



  calculateTotalMonths(startDate: Date, endDate: Date): number{
    
    let result =  (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth()); 


    return result;

  }


  cardClick(index: number){
    this.selectCard.emit(index);
    console.log("card clicked", index)
  }
}
