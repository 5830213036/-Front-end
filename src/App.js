import React, { Component } from "react";
import ProdList from "./components/prodList";
import PostList from "./components/detailList";
import GridList from "./components/gridList";
import { Button } from "react-bootstrap";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import TabSwitcher, { Tab, TabPanel } from "./components/Tab";
import { ButtonToolbar } from "react-bootstrap";
class App extends Component {
  state = {
    prodList: [],
    gridList: []
  };
  componentDidMount() {
    fetch("https://cc-mock-api.herokuapp.com/product/")
      .then(res => res.json())
      .then(data => {
        this.setState({ prodList: data.list, gridList: data.list });
      })
      .catch(console.log);
  }
  render() {
    const IndexPage = () => {
      return <ProdList prodList={this.state.prodList} />;
    };
    const IndexGrid = () => {
      return <GridList gridList={this.state.gridList} />;
    };
    return (
      <div>
        <div class="card">
          <div class="card-body">
            <TabSwitcher>
              <div class="App-b">
                <ButtonToolbar>
                  <Tab id="b">
                    <Button variant="outline-info">
                      <i class="th middle icon" />
                    </Button>
                  </Tab>
                  <Tab id="a">
                    <Button variant="outline-info">
                      <i class="list icon" />
                    </Button>
                  </Tab>
                </ButtonToolbar>
              </div>
              <br />
              <TabPanel whenActive="a">
                <div>
                  <Router>
                    <Switch>
                      <Route exact path="/" component={IndexPage} />
                      <Route path="/product/:id" component={PostList} />
                    </Switch>
                  </Router>
                </div>
              </TabPanel>
              <TabPanel whenActive="b">
                <div>
                  <Router>
                    <Switch>
                      <Route exact path="/" component={IndexGrid} />
                      <Route path="/product/:id" component={PostList} />
                    </Switch>
                  </Router>
                </div>
              </TabPanel>
            </TabSwitcher>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
