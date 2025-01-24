import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartComponent } from './cart.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BookService } from 'src/app/services/book.service';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { Book } from 'src/app/models/book.model';

const books: Book[] = [
  {
    name: 'book1',
    author: 'book1',
    isbn: 'book1',
    price: 15,
    amount: 2,
  },
  {
    name: 'book1',
    author: 'book1',
    isbn: 'book1',
    price: 20,
    amount: 1,
  },
  {
    name: 'book1',
    author: 'book1',
    isbn: 'book1',
    price: 8,
    amount: 7,
  },
];

describe('CartComponent', () => {
  let component: CartComponent;
  let componentFixture: ComponentFixture<CartComponent>;

  // * create configure testing module
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CartComponent],
      imports: [HttpClientTestingModule],
      providers: [BookService],
      // avoid no sense problems
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
    });
  });

  // * create component and test instance
  beforeEach(() => {
    componentFixture = TestBed.createComponent(CartComponent);
    component = componentFixture.componentInstance;
    componentFixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('getTotalPrice returns an amount', () => {
    const totalPrice = component.getTotalPrice(books);
    expect(totalPrice).toBeGreaterThan(0);
    expect(totalPrice).not.toBe(0);
    expect(totalPrice).not.toBeNull();
  });
});
