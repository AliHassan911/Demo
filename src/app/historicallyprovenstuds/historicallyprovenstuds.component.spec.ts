import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricallyprovenstudsComponent } from './historicallyprovenstuds.component';

describe('HistoricallyprovenstudsComponent', () => {
  let component: HistoricallyprovenstudsComponent;
  let fixture: ComponentFixture<HistoricallyprovenstudsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricallyprovenstudsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricallyprovenstudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
