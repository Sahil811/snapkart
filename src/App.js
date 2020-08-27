import React from "react";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Cart from "./components/Cart";
import store from "./store";
import { Provider } from "react-redux";

// feature 1

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="grid-container">
          <header className="header">
            <a href="/">Snapkart</a>
          </header>
          <main>
            <div className="content">
              <div className="main">
                <Filter />
                <Products />
              </div>

              <div className="sidebar">
                <Cart />
              </div>
            </div>
          </main>
          <footer className="footer">All right is reserved.</footer>
        </div>
      </Provider>
    );
  }
}

export default App;
