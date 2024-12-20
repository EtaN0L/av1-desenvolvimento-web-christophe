import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageOgHeistsComponent } from './page-og-heists.component';

describe('PageOgHeistsComponent', () => {
  let component: PageOgHeistsComponent;
  let fixture: ComponentFixture<PageOgHeistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageOgHeistsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageOgHeistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
