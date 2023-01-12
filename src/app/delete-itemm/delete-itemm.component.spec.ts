import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteItemmComponent } from './delete-itemm.component';

describe('DeleteItemmComponent', () => {
  let component: DeleteItemmComponent;
  let fixture: ComponentFixture<DeleteItemmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteItemmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteItemmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
