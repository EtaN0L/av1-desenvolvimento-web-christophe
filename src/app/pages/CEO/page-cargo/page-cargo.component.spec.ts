import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCargoComponent } from './page-cargo.component';

describe('PageCargoComponent', () => {
  let component: PageCargoComponent;
  let fixture: ComponentFixture<PageCargoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCargoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCargoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
