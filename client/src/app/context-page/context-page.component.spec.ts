import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContextPageComponent } from './context-page.component';

describe('ContextPageComponent', () => {
  let component: ContextPageComponent;
  let fixture: ComponentFixture<ContextPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContextPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContextPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
