import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNightclubComponent } from './page-nightclub.component';

describe('PageNightclubComponent', () => {
  let component: PageNightclubComponent;
  let fixture: ComponentFixture<PageNightclubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageNightclubComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageNightclubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
