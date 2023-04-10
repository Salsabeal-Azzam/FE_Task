import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSalesComponent } from './header-sales.component';

describe('HeaderSalesComponent', () => {
  let component: HeaderSalesComponent;
  let fixture: ComponentFixture<HeaderSalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderSalesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
