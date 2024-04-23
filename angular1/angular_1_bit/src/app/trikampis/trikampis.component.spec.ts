import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrikampisComponent } from './trikampis.component';

describe('TrikampisComponent', () => {
  let component: TrikampisComponent;
  let fixture: ComponentFixture<TrikampisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrikampisComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TrikampisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
