import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import { books } from "./data";
import BooksInfo from "./pages/BooksInfo"
import Cart from "./pages/Cart";
import { useState } from "react";

function App() {
  const [cart, setCart] = useState([])

  function addToCart() {
    console.log("add this to my cart")
  }

  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={()=> <Home/>} />
        <Route path="/books" exact render={() => <Books books={books} />} />
        <Route path="/books/:id" render={() => <BooksInfo addToCart={addToCart} books={books}/>}  />
        <Route path="/cart" render={() => <Cart books={books} />} />
        <Footer />
        </div>
    </Router>
  );
}

export default App;
