import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomlayoutComponent } from './bottomlayout.component';

describe('BottomlayoutComponent', () => {
  let component: BottomlayoutComponent;
  let fixture: ComponentFixture<BottomlayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomlayoutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomlayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
