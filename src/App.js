import React, {Fragment} from 'react';
import {Route, BrowserRouter} from "react-router-dom"
import {Provider} from "react-redux";
import Counter from "./components/Counter/Counter"
import Todo from "./components/Todo/Todo"


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const {store} = this.props;
    return (
      <Provider store={store}>
        <BrowserRouter>
          <RoutesComponent />
        </BrowserRouter>
      </Provider>
    );
  }
}

const RoutesComponent = () => (
  <Fragment>
    <Route exact path="/" component={Counter} />
    <Route exact path="/todo" component={Todo} />
  </Fragment>
)

export default App;
