import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdutosDetalhadosComponent } from './produtos-detalhados.component';

describe('ProdutosDetalhadosComponent', () => {
  let component: ProdutosDetalhadosComponent;
  let fixture: ComponentFixture<ProdutosDetalhadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdutosDetalhadosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdutosDetalhadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
