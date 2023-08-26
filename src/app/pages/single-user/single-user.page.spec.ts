import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SingleUserPage } from './single-user.page';

describe('SingleUserPage', () => {
  let component: SingleUserPage;
  let fixture: ComponentFixture<SingleUserPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SingleUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
