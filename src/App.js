import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import store from "./store";
import { Provider } from "react-redux";
import HomeScreen from "./screens/HomeScreen";
import AdminScreen from "./screens/AdminScreen";

// feature 1

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="grid-container">
            <header>
              <Link to="/" style={{ "margin-right": "1rem" }}>
                Snapkart
              </Link>
              <Link to="/admin">Admin</Link>
            </header>
            <main>
              <Route path="/admin" component={AdminScreen} />
              <Route path="/" component={HomeScreen} exact />
            </main>
            <footer>All right is reserved.</footer>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
