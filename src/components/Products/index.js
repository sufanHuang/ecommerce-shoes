import React, { Component } from 'react'
import ProductsData from '../Data'
import { Link } from 'react-router-dom'
import './index.css'

export default class Products extends Component {
    render(){
        return(
            <div className='items-wrapper'>
                <div className='items-title'>
                    <h4> All Items</h4>
                </div>
                <div className='items'>
                    {ProductsData.map( product => (
                        <div key={product.id} className='item'>
                            <Link to={`/products/${product.id}`}>
                                <div className='product-img'>
                                    <img alt={product.name} src={product.img}/>
                                </div>
                                <div className='product-details'>
                                    <h3 id='product-name'>{product.name}</h3>
                                    <h4 id='product-description'>{product.description}</h4>
                                </div>
                            </Link>
                            <div>
                                <h5 id={'product-price'}>${product.price}</h5>
                                <i id='add-icon' className="fas fa-cart-plus">Add</i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
