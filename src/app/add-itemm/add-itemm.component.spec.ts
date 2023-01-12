import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddItemmComponent } from './add-itemm.component';

describe('AddItemmComponent', () => {
  let component: AddItemmComponent;
  let fixture: ComponentFixture<AddItemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddItemmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
