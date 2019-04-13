import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FollowingComponent } from './following.component';


import { RatingModule, Rating } from 'ng2-rating';
import {FormsModule} from '@angular/forms'
//import { FilterPipe }from '../filter.pipe';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from '../shared/navbar/navbar.component';



describe('FollowingComponent', () => {
  let component: FollowingComponent;
  let fixture: ComponentFixture<FollowingComponent>;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({

      declarations: [FollowingComponent ,
      NavbarComponent ],
      imports:[
        HttpClientModule,
        RouterModule,
        RouterTestingModule,
        NgbRatingModule,
        FormsModule

        ]
    })
    .compileComponents();
  }));


  beforeEach(() => {
    fixture = TestBed.createComponent(FollowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


// Unit test for delete function check if the count of following peole decrease ?
it('should be able to decrement the count (-1)', () => {

  component.delFollowing(7);

  expect(component.count).toEqual(5);
});
// Unit test for deletefollowing function check if the count of following peole decrease ?

it('should be able to decrement the count (-1)', () => {

  component.delFollowing(7);
  expect(component.count).toEqual(5);
});

// Unit test for search function
it('should be able to find the user', () => {

  component.searchText='waleed';
  expect(component.search).toEqual('waleed');
});

});


