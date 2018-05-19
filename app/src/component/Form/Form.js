import React, { Component }from 'react';
import axios from 'axios';

class Form extends Component {
    constructor(){
        super();

        this.addProduct = this.addProduct.bind( this );
    }

    addProduct(){
        let newProduct = {
            name: this.refs.name.value,
            price: this.refs.price.value,
            img: this.refs.img.value
        };
        axios.post('api/products', newProduct).then( res => {
            this.setState({
                products: res.data
            })
        })
    }

    render() {
        return (
            <div>Form
                <p>Image URL:</p>
                <input ref="img" type="text" />
                <p>Product Name:</p>
                <input ref="name" type="text" />
                <p>Price:</p>
                <input ref="price" type="text" />
                <div className="formButton">
                    <button>Cancel</button>
                    <button onClick={ this.addProduct }>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form;