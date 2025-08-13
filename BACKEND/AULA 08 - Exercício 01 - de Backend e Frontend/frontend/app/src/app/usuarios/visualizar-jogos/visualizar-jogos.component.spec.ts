import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarJogosComponent } from './visualizar-jogos.component';

describe('VisualizarJogosComponent', () => {
  let component: VisualizarJogosComponent;
  let fixture: ComponentFixture<VisualizarJogosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisualizarJogosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarJogosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
