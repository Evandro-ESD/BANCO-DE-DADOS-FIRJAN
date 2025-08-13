import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciaLayoutComponent } from './gerencia-layout.component';

describe('GerenciaLayoutComponent', () => {
  let component: GerenciaLayoutComponent;
  let fixture: ComponentFixture<GerenciaLayoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GerenciaLayoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GerenciaLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
