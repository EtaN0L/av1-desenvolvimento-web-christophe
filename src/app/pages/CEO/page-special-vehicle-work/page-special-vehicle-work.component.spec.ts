import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageSpecialVehicleWorkComponent } from './page-special-vehicle-work.component';

describe('PageSpecialVehicleWorkComponent', () => {
  let component: PageSpecialVehicleWorkComponent;
  let fixture: ComponentFixture<PageSpecialVehicleWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageSpecialVehicleWorkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageSpecialVehicleWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
