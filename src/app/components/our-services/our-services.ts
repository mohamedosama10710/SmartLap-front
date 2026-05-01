import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  imports: [CommonModule],
  templateUrl: './our-services.html',
  styleUrl: './our-services.css',
})
export class OurServices {
  services = [
  {
    title: 'Clinical Chemistry',
    desc: 'Precision testing for vital organ functions, including blood glucose, lipid profiles, and kidney & liver function tests',
    image: 'images/Clinical.png'
  },
  {
    title: 'Immunology & Serology',
    desc: 'Advanced immune system testing and infectious disease diagnostics',
    image: 'images/Footer.png'
  },
  {
    title: 'Specialized Hormones',
    desc: 'Precise hormone analysis for better health insights',
    image: 'images/Footer.png'
  },
  {
    title: 'Hematology & Blood Banking',
    desc: 'Complete blood analysis and safe blood banking services',
    image: 'images/Footer.png'
  }
];
}
