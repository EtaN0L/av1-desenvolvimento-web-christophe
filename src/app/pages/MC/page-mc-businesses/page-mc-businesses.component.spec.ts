import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMcBusinessesComponent } from './page-mc-businesses.component';

describe('PageMcBusinessesComponent', () => {
  let component: PageMcBusinessesComponent;
  let fixture: ComponentFixture<PageMcBusinessesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageMcBusinessesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageMcBusinessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
