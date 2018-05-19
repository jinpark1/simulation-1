import React, { Component }from 'react';
import Product from '../Product/Product';
import axios from 'axios';
import brokenimg from './brokenimg.jpg';

class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            products: [],
            name: "test",
        }

        this.handleNameChange = this.handleNameChange.bind( this );
    }


componentDidMount() {
    axios.get('/api/products').then( res => {
        this.setState({
         products: res.data
        })
      })
  }

  deleteProduct(id) {
      axios.delete(`/api/products/${ id }`).then( res => {
          this.setState({
              products: res.data
          })
      })
  }

  editName(id, name) {
      axios.put(`api/products/${ id }`, {name}).then( res => {
          this.setState({ products: res.data})
      })
  }

  handleNameChange(event) {
      this.setState({
          name: event.target.value
      });
  }

    render() {
        
        let productList = this.state.products.map( (products) => {
            return (
              <div className="products" key={products.id}>
                <p>Name: {products.name}</p>
                <p>Price: {products.price}</p>
                <img src={`${products.img}`} alt="broken image"/>
                <button onClick={ () => this.deleteProduct(products.id) }>Delete</button>
                
                <input onChange={ this.handleNameChange }/>
                <button onClick={ () => this.editName(products.id, this.state.name)}>Edit Name</button>
                <div>TESTBOX {this.state.name}</div>
              </div>
            )
          })

        return (
            <div>DashBoard
            <Product productList=""/>
            {productList}
 
            </div>
        )
    }
}

export default Dashboard;