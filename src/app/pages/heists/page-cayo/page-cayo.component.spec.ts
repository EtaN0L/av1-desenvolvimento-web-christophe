import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCayoComponent } from './page-cayo.component';

describe('PageCayoComponent', () => {
  let component: PageCayoComponent;
  let fixture: ComponentFixture<PageCayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCayoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
