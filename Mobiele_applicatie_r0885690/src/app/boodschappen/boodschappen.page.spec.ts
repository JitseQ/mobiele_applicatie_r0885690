import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BoodschappenPage } from './boodschappen.page';

describe('BoodschappenPage', () => {
  let component: BoodschappenPage;
  let fixture: ComponentFixture<BoodschappenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(BoodschappenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
