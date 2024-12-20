import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageDoomsdayComponent } from './page-doomsday.component';

describe('PageDoomsdayComponent', () => {
  let component: PageDoomsdayComponent;
  let fixture: ComponentFixture<PageDoomsdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageDoomsdayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageDoomsdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
