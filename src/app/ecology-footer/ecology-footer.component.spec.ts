import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologyFooterComponent } from './ecology-footer.component';

describe('EcologyFooterComponent', () => {
  let component: EcologyFooterComponent;
  let fixture: ComponentFixture<EcologyFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcologyFooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcologyFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
