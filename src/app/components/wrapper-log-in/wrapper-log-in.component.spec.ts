import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WrapperLogInComponent } from './wrapper-log-in.component';

describe('WrapperLogInComponent', () => {
  let component: WrapperLogInComponent;
  let fixture: ComponentFixture<WrapperLogInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WrapperLogInComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WrapperLogInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
