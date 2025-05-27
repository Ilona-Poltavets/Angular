import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologyHomeComponent } from './ecology-home.component';

describe('EcologyHomeComponent', () => {
  let component: EcologyHomeComponent;
  let fixture: ComponentFixture<EcologyHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcologyHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcologyHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
