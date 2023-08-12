import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToevoegenDagboekPage } from './toevoegen-dagboek.page';

describe('ToevoegenDagboekPage', () => {
  let component: ToevoegenDagboekPage;
  let fixture: ComponentFixture<ToevoegenDagboekPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToevoegenDagboekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
