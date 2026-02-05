import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJobs } from './all-jobs';

describe('AllJobs', () => {
  let component: AllJobs;
  let fixture: ComponentFixture<AllJobs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllJobs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllJobs);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
