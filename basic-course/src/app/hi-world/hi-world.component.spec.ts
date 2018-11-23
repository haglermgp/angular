import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HiWorldComponent } from './hi-world.component';

describe('HiWorldComponent', () => {
  let component: HiWorldComponent;
  let fixture: ComponentFixture<HiWorldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HiWorldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HiWorldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
