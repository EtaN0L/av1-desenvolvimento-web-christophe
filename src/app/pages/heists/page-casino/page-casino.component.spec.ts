import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCasinoComponent } from './page-casino.component';

describe('PageCasinoComponent', () => {
  let component: PageCasinoComponent;
  let fixture: ComponentFixture<PageCasinoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageCasinoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageCasinoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
