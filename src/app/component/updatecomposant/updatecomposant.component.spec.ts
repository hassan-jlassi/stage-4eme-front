import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatecomposantComponent } from './updatecomposant.component';

describe('UpdatecomposantComponent', () => {
  let component: UpdatecomposantComponent;
  let fixture: ComponentFixture<UpdatecomposantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatecomposantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatecomposantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
