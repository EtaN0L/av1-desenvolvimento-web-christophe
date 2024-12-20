import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageImportExportComponent } from './page-import-export.component';

describe('PageImportExportComponent', () => {
  let component: PageImportExportComponent;
  let fixture: ComponentFixture<PageImportExportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PageImportExportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PageImportExportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
