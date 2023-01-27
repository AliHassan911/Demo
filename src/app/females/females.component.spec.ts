import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FemalesComponent } from './females.component';

describe('FemalesComponent', () => {
  let component: FemalesComponent;
  let fixture: ComponentFixture<FemalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FemalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FemalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
