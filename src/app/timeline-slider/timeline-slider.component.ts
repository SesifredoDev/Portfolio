import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline-slider',
  templateUrl: './timeline-slider.component.html',
  styleUrls: ['./timeline-slider.component.scss']
})
export class TimelineSliderComponent implements OnInit{
  years : Array<{ position: number; label: string }>= [];

  months = Array.from({ length: 120 }, (_, i) => ({ position: i * 0.833 })); // 120 months (10 years * 12)

  @Input() projects: Array<{ name: string; creation: string; updated: string; banner: string; description: string; topics: string[] }> = [];
  
  thumbPosition = 0;
  dragging = false;
  cards: Array<{ position: number; type: string; label?: string; img?: string }> = [];

  ngOnInit(){
    console.log(this.projects)
    this.generateNotches();
    
      this.generateCards();
  }

  startDrag(event: MouseEvent): void {
    this.dragging = true;
    this.moveThumb(event);
  }

  onDrag(event: MouseEvent): void {
    if (this.dragging) {
      this.moveThumb(event);
    }
  }

  endDrag(): void {
    this.dragging = false;
    this.snapToClosestYear();
  }

  moveThumb(event: MouseEvent): void {
    const slider = (event.target as HTMLElement).closest('.slider') as HTMLElement;
    const rect = slider.getBoundingClientRect();
    const offsetX = event.clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    this.thumbPosition = percentage;
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
      this.years.unshift({
        position: 100-position,
        label: isYearStart ? currentDate.getFullYear().toString() : ""
      });

      currentDate.setMonth(currentDate.getMonth() + 1);
      position += positionStep;
    }
  }
    generateCards(): void {
      this.cards = this.projects.map(project => ({
        position: this.calculatePosition(project.creation),
        type: 'project',
        label: project.name,
        img: project.banner
      }));
    }

    calculatePosition(dateString: string): number {
      const projectDate = new Date(dateString);
      const startDate = new Date(Math.min(...this.projects.map(p => new Date(p.creation).getTime())));
      const endDate = new Date(Math.max(...this.projects.map(p => new Date(p.updated).getTime())));
      const totalMonths = this.calculateTotalMonths(startDate, endDate);

      const monthsBetween = this.calculateTotalMonths(startDate, projectDate);
      const position = (monthsBetween / totalMonths) * 100;
      return position;
    }
  calculateTotalMonths(startDate: Date, endDate: Date): number {
    return (endDate.getFullYear() - startDate.getFullYear()) * 12 + (endDate.getMonth() - startDate.getMonth());
  }
}
