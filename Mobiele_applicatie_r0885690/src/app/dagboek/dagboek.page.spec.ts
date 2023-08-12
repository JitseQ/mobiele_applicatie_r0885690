import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DagboekPage } from './dagboek.page';

describe('DagboekPage', () => {
  let component: DagboekPage;
  let fixture: ComponentFixture<DagboekPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DagboekPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
