import React, { Component } from "react";
import store from "./store";


import { Provider } from "react-redux";
import Count from "./components/Count";
import Control from "./components/Control";
import { Container } from "reactstrap";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <Container > <h1>Rate my Broccoli !!</h1>
          <Count />
          <Control />
          </Container>
        </div>
      </Provider>
    );
  }
}
export default App;
