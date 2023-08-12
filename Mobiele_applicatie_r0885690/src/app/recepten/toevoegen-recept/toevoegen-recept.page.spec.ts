import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToevoegenReceptPage } from './toevoegen-recept.page';

describe('ToevoegenReceptPage', () => {
  let component: ToevoegenReceptPage;
  let fixture: ComponentFixture<ToevoegenReceptPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToevoegenReceptPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
