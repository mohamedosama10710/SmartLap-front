import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-our-testimonials',
  imports: [CommonModule,FormsModule],
  templateUrl: './our-testimonials.html',
  styleUrl: './our-testimonials.css',
  standalone: true
})
export class OurTestimonials {
  currentIndex = 0;

  testimonials = [
    {
      name: 'Ahmed Mansour - Toukh',
      text: 'Extremely impressed with the turnaround time...'
    },
    {
      name: 'Mohamed Ali - Cairo',
      text: 'Great service and fast results...'
    },
    {
      name: 'Sara Ahmed - Giza',
      text: 'Very professional lab...'
    }
  ];

  next() {
    this.currentIndex = (this.currentIndex + 1) % this.testimonials.length;
  }

  prev() {
    this.currentIndex =
      (this.currentIndex - 1 + this.testimonials.length) %
      this.testimonials.length;
  }

  getPrevIndex() {
    return (this.currentIndex - 1 + this.testimonials.length) % this.testimonials.length;
  }

  getNextIndex() {
    return (this.currentIndex + 1) % this.testimonials.length;
  }
}
