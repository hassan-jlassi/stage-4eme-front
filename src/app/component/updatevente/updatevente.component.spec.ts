import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateventeComponent } from './updatevente.component';

describe('UpdateventeComponent', () => {
  let component: UpdateventeComponent;
  let fixture: ComponentFixture<UpdateventeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateventeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateventeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
