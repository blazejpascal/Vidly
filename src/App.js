import React, { Component } from 'react';
import './App.css';
import Movies from './components/Movies/Movies'
import {Route, Switch, Redirect} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Customers from './components/Customers/Customer'
import Rentals from './components/Rentals/Rentals'
import NotFound from './components/NotFound/NotFound'
import MovieForm from './components/MovieForm/MovieForm'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navbar/>
        <main className="container">
            <Switch>
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
