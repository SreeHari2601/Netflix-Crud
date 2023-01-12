import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateItemmComponent } from './update-itemm.component';

describe('UpdateItemmComponent', () => {
  let component: UpdateItemmComponent;
  let fixture: ComponentFixture<UpdateItemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateItemmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
