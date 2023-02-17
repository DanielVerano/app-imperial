import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardVComponent } from './card-v.component';

describe('CardVComponent', () => {
  let component: CardVComponent;
  let fixture: ComponentFixture<CardVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardVComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
