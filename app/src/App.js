import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './component/Product/Product';
import Header from './component/Header/Header';
import Dashboard from './component/Dashboard/Dashboard';
import Form from './component/Form/Form';
import router from './router';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    const title = "Hello Title";
    return (
      <div className="App">

       
          <div className="head">
          <Header title={title} />
          </div>
          {/* <div className="dashboard">
          <Dashboard />
          </div>
          <div className="form">
          <Form />
          </div> */}
          <div className="space">
          </div>
          <span><Link to='/Dashboard' className="link">Dashboard</Link></span>
          <span><Link to='/Form' className="link">Form</Link></span>
          <div>
             {router}
          </div>
      </div>
    );
  }
}

export default App;
