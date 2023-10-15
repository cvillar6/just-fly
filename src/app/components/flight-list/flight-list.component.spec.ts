import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightListComponent } from './flight-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('FlightListComponent', () => {
  let component: FlightListComponent;
  let fixture: ComponentFixture<FlightListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [FlightListComponent]
    });
    fixture = TestBed.createComponent(FlightListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
