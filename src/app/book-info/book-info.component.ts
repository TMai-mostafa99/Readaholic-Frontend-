import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { HttpService } from '../http.service';
import { review } from '../classes/review';
import { book } from '../classes/book';

@Component({
  selector: 'app-book-info',
  templateUrl: './book-info.component.html',
  styleUrls: ['./book-info.component.css']
})
export class BookInfoComponent implements OnInit {
  myBook: book;
  reviews: review[];
  i: number;
  activity: boolean = true;
  isUser: boolean;

  constructor(private http: HttpService, private route: ActivatedRoute,private router: Router) {
  }

  ngOnInit() {
  this.http.getBook(+this.route.snapshot.paramMap.get('id')).subscribe((data:book) => this.myBook = data, error=> this.router.navigateByUrl("/404"));
  this.http.getBookReviews().subscribe((data:review[]) => this.reviews = data);
  if(localStorage.getItem('token') == null){
    this.isUser = false;
  }
  else{
    this.isUser = true;
  }
  }
}
  

