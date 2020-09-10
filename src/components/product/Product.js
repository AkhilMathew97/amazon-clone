import React from 'react'
import "./Product.css"
import {useStateValue} from "../../StateProvider"

function Product({id,title,price,image,rating}) {
    const [{}, dispatch] = useStateValue();

    const addToBasket= () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        })
    }

    return (
        <div className="product">
            <div className="product__info">
                <p className="product__title" title={title}>
                    {title.length > 75 ? title.substring(0,73)+'...': title}
                </p>
                <p className="product__price">
                    <small>AED</small>
                    <strong> {price}</strong>
                </p>
                <div className="product__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,i)=>(
                                <p>⭐</p>
                            ))
                    }
                </div>
            </div>
            <br />
            <img src={image} alt=""/>
            <button onClick={addToBasket}>Add to basket</button>
            
            
        </div>
    )
}

export default Product
