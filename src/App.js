import "./App.css";
import { Header } from "./components/Header";
import { StoreContent } from "./components/StoreContent";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Cart } from "./components/Cart/index";
import { ProductDetails } from "./components/ProductDetails";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Switch>
          <Route exact={true} path="/">
            <StoreContent />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/product:id">
            <ProductDetails />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
