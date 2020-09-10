import React from 'react'
import "./CheckoutProduct.css"
import {useStateValue} from '../../StateProvider'

function CheckoutProduct({id,title,rating,image,price}) {

    const [{basket},dispatch] = useStateValue()

    console.log(id,title,rating,image,price)
    const removeFromBasket =() => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    }

    return (
        <div className="checkouProduct">
            <img className="checkouProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">{title}</p>
                
                <p className="checkoutProduct__price">
                    <small>AED</small>
                    <strong> {price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {
                        Array(rating)
                            .fill()
                            .map((_,i)=>(
                                <p>⭐</p>
                            ))
                    }
                </div>
                <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
