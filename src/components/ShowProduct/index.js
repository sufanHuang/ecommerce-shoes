import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductsData from '../Data';
import _ from 'lodash';
import './index.css';

class ShowProduct extends Component {
    render () {
        const currentProduct = _.find(ProductsData, ['id', parseInt(this.props.match.params.id)]);
        return (
            <div className="show-product">
                <div className="item-wrapper">
                    <div className="item-image">
                        <img className="product-image" src={currentProduct.img} alt="product" />
                    </div>
                    <div className="item-name">
                        <div className="product-info">
                            <h3 id="product-name">{currentProduct.name}</h3>
                        </div>
                        <div className="product-bio">
                            <p id="product-description">{currentProduct.description}</p>
                            <p id="product-price">${currentProduct.price}</p>
                            <i id={"add-icon"} className="fas fa-cart-plus">Add</i>
                        </div>
                    </div>
                </div>
                <h2>You might also like</h2>

                <div className="similar-products">
                    {ProductsData.map((product) => {
                        if (
                            product.gender === currentProduct.gender
                            && product.type === currentProduct.type
                            && product.name !== currentProduct.name) {
                            return(
                                <div className='similar-product'>
                                    <Link to={`/products/${product.id}`}>
                                        <div key={product.id}>
                                            <Link to={`/products/${product.id}`}>
                                                <div className="product-img">
                                                    <img alt={product.name} src={product.img} />
                                                </div>
                                                <div className="product-details">
                                                    <h1 id="product-name">{product.name}</h1>
                                                    <h4 id="product-description">{product.description}</h4>
                                                </div>
                                            </Link>
                                            <div className="price-add">
                                                <h5 id="product-price">${product.price}</h5>
                                                <i id="add-icon" className="fas fa-cart-plus">Add</i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        }
                    })}
                </div>
            </div>
        );
    }
}

export default ShowProduct;
