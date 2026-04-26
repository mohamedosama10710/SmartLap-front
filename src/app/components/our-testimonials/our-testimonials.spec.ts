import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurTestimonials } from './our-testimonials';

describe('OurTestimonials', () => {
  let component: OurTestimonials;
  let fixture: ComponentFixture<OurTestimonials>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurTestimonials],
    }).compileComponents();

    fixture = TestBed.createComponent(OurTestimonials);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
