import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcomposantComponent } from './addcomposant.component';

describe('AddcomposantComponent', () => {
  let component: AddcomposantComponent;
  let fixture: ComponentFixture<AddcomposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcomposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddcomposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
