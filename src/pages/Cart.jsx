import React from "react";
import Emptycart from "../assets/empty_cart.svg"
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const Cart = ({ cart, books, changeQuantity, removeItem }) => {
  const total = () => {
    let price = 0;
    cart.forEach((item) => {
      price =
        price +
        +((item.salePrice || item.originalPrice) * item.quantity).toFixed(2);
    });
    return price;
  };

  const totalTax = () => {
    let tax = total() + 0.9
    console.log(tax)
  }

  return (
    <div>
      <div id="books__body">
        <main id="books__main">
          <div className="books__container">
            <div className="row">
              <div className="book__selected--top">
                <h2 className="cart__title">Cart</h2>
              </div>
              <div className="cart">
                <div className="cart__header">
                  <span className="cart__book">Books</span>
                  <span className="cart__quantity">Quantity</span>
                  <span className="cart__total">Price</span>
                </div>
                <div className="cart__body">
                  {cart.map((book) => {
                    return (
                      <div key={book.id} className="cart__item">
                        <div className="cart__book">
                          <img
                            src={book.url}
                            className="cart__book--img"
                            alt=""
                          />
                          <div className="cart__book--info">
                            <span className="cart__book--title">
                              {book.title}
                            </span>
                            <span className="cart__book--price">
                              $
                              {(book.salePrice || book.originalPrice).toFixed(
                                2
                              )}
                            </span>
                            <button className="cart__book--remove"
                            onClick={() => removeItem(book)}
                            >
                              Remove
                            </button>
                          </div>
                        </div>
                        <div className="cart__quantity">
                          <input
                            type="number"
                            min={0}
                            max={99}
                            className="cart__input"
                            onChange={(event) =>
                              changeQuantity(book, event.target.value)
                            }
                            value={book.quantity}
                            name=""
                            id=""
                          />
                        </div>
                        <div className="cart__total">
                          $
                          {(
                            (book.salePrice || book.originalPrice) *
                            Math.floor(book.quantity)
                          ).toFixed(2)}
                        </div>
                      </div>
                    );
                  })}
                </div>
               
                {
                (cart.length > 0) 
                ? <div className="total">
                <div className="total__sub-title total__item">
                  <span>Subtotal</span>
                  <span>${total()}</span>
                </div>
                <div className="total__tax total__item">
                  <span>Tax</span>
                  <span>${(total() / 9).toFixed(2)}</span>
                </div>
                <div className="total__price total__item">
                  <span>Total</span>
                  <span>${((total() / 9) + total()).toFixed(2)}</span>
                </div>
                <button
                  className="btn btn__checkout no-cursor"
                  onClick={() => alert("Haven't got around to doing this :(")}
                >
                  Proceed to checkout
                </button>
                  </div>
              : <div className="cart__empty">
              <img src={Emptycart} className="cart__empty--img" alt="" />
              <h2>You don't have any books in you cart!</h2>
              <Link to="/books">
              <button className="btn">Browse books</button>
              </Link>
            </div>
              }
                
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Cart;
