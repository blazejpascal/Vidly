import React, { Component } from 'react';
import Movies from './components/scenes/Movies/Movies'
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/shared/Navbar/Navbar'
import Customers from './components/scenes/Customers/Customer'
import Rentals from './components/scenes/Rentals/Rentals'
import NotFound from './components/scenes/NotFound/NotFound'
import MovieForm from './components/scenes/MovieForm/MovieForm'
import LoginForm from "./components/scenes/LoginForm/LoginForm";
import RegisterForm from "./components/scenes/RegisterForm/RegisterForm";


import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <main className="container">
            <Switch>
                <Route path="/login" component={LoginForm} />
                <Route path="/register" component={RegisterForm} />
                <Route path="/movies/:id" component={MovieForm} />
                <Route path="/movies" component={Movies}/>
              <Route path="/customers" component={Customers}/>
              <Route path="/rentals" component={Rentals}/>
              <Route path="/not-found" component={NotFound}/>
              <Redirect from="/" exact to="/movies"/>
                <Redirect to="/not-found"/>
            </Switch>

        </main>
      </React.Fragment>

    );
  }
}

export default App;
