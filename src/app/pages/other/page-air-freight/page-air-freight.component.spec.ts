import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAirFreightComponent } from './page-air-freight.component';

describe('PageAirFreightComponent', () => {
  let component: PageAirFreightComponent;
  let fixture: ComponentFixture<PageAirFreightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageAirFreightComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageAirFreightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
