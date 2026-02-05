import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobApply } from './job-apply';

describe('JobApply', () => {
  let component: JobApply;
  let fixture: ComponentFixture<JobApply>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JobApply]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobApply);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
