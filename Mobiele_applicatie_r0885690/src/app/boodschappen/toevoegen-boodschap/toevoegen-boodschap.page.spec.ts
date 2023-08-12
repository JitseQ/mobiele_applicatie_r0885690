import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToevoegenBoodschapPage } from './toevoegen-boodschap.page';

describe('ToevoegenBoodschapPage', () => {
  let component: ToevoegenBoodschapPage;
  let fixture: ComponentFixture<ToevoegenBoodschapPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ToevoegenBoodschapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
