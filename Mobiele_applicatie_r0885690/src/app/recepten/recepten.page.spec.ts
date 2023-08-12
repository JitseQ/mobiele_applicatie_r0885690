import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReceptenPage } from './recepten.page';

describe('ReceptenPage', () => {
  let component: ReceptenPage;
  let fixture: ComponentFixture<ReceptenPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ReceptenPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
