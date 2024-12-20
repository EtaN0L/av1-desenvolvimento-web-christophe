import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageGunrunningComponent } from './page-gunrunning.component';

describe('PageGunrunningComponent', () => {
  let component: PageGunrunningComponent;
  let fixture: ComponentFixture<PageGunrunningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageGunrunningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageGunrunningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
