import React from 'react'
import {useStateValue} from '../../StateProvider'
import "./Checkout.css"
import CheckoutProduct from './CheckoutProduct'
import Subtotal from './Subtotal'

function Checkout() {

    const [{basket}] = useStateValue()

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img 
                    src="https://images-eu.ssl-images-amazon.com/images/G/39/Prime/XCM_Manual_1222000_Prime_Detail_page_ILM_650x45_1x_en_c9b388c1-dd37-4396-b2c9-33770303ab02._CB432014043_.jpg" 
                    className="checkout__ad" 
                    alt=""
                />
                {basket?.length === 0 ? (
                    <div>
                        <h2>Shopping Cart is empty</h2>
                        <p>
                            You have no items currently in your basket. To add items,
                            simply click on the "Add to Basket" right below the item's image.
                        </p>
                    </div>
                ):(
                    <div>
                        <h2 className="checkout__title">Your Shopping Cart</h2>
                        {basket?.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                price={item.price}
                                image={item.image}
                                rating={item.rating}
                            />
                        ))}
                        
                    </div>   
                )}
            </div>
            {basket?.length>0 && (
                <div className="checkout__right">
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
