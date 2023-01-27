import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricallyprovenfemalesComponent } from './historicallyprovenfemales.component';

describe('HistoricallyprovenfemalesComponent', () => {
  let component: HistoricallyprovenfemalesComponent;
  let fixture: ComponentFixture<HistoricallyprovenfemalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricallyprovenfemalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricallyprovenfemalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
