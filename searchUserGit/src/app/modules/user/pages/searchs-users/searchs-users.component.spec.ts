import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchsUsersComponent } from './searchs-users.component';

describe('SearchsUsersComponent', () => {
  let component: SearchsUsersComponent;
  let fixture: ComponentFixture<SearchsUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchsUsersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SearchsUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
