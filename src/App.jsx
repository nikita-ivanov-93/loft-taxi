import './App.css';
import React from 'react'
import Header from './components/Header'
import {Login} from './components/Login'
import {Map} from './components/Map'
import {Profile} from './components/Profile'
import {Registration} from './components/Registration'


class App extends React.Component {
  state = { currentPage: "login" };
  navigateTo = (page) => {
    this.setState({ currentPage: page });
  };
  PAGES = {
    login: <Login navigateTo={this.navigateTo}/>,
    map: <Map />,
    profile: <Profile />,
    registration: <Registration navigateTo={this.navigateTo}/>,
  };
  render() {
    return (
      <div>
        <Header navigateTo={this.navigateTo}/>
        <div>
          {this.PAGES[this.state.currentPage]}
        </div>
      </div>
    )

  }
}

export default App;
