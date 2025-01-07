import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcologyNavbarComponent } from './ecology-navbar.component';

describe('EcologyNavbarComponent', () => {
  let component: EcologyNavbarComponent;
  let fixture: ComponentFixture<EcologyNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcologyNavbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcologyNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
