import React from 'react'
import "./Home.css"
import Product from "../product/Product"

function Home() {
    return (
        <div className="home">
            <img className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/39/electronics/CE_BAU/TH_TopPicks_Electronics_1500x600_En._CB430729903_.jpg"
                alt=""    
            />
            <div className="home__row">
                <Product 
                    id="1247193"
                    title="Nellnissa 3D Hologram Projector LED (Black)"
                    price={1572.50}
                    rating={2}
                    image="https://images-na.ssl-images-amazon.com/images/I/41Kk+N6w+uL._SCLZZZZZZZ___AC_SY200_.jpg"
                />
                <Product 
                    id="284397"
                    title="Ring Video Doorbell 1st Gen - Satin Nickel - Rechargeable Battery Powered WiFi Doorbell Security Camera with Two way talk - Full HD video - Motion Detection - Night Vision"
                    price={499}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/414pIgbUI+L._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="343749"
                    title="PUMA Unisex-Adult Ftblplay Backpack Backpack"
                    price={60}
                    rating={3}
                    image="https://m.media-amazon.com/images/I/41vaBZTCdZL.__AC_SY200_.jpg"
                />
                <Product 
                    id="987213"
                    title="Diesel Men's Master Chief Watch"
                    price={470.96}
                    rating={4}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41HxrjOLm9L._AC_SY200_.jpg"
                />
                <Product 
                    id="685184"
                    title="Philips Avance Collection 2200W 1.4 kg Air Fryer, with Fat Removal Technology for Healthy Cooking/Baking/Grilling, XXL, HD9650/91, Black, 1 Year Brand Warranty, UAE Version"
                    price={1335}
                    rating={5}
                    image="https://images-eu.ssl-images-amazon.com/images/I/31qp5mWfo3L._AC_SY200_.jpg"
                />
            </div>
            <div className="home__row">
                <Product 
                    id="294739"
                    title="Outdoor Sports Garden Trampoline with Safety Enclosure"
                    price={1477.01}
                    rating={3}
                    image="https://images-eu.ssl-images-amazon.com/images/I/41sPH0lIx1L._AC_SY200_.jpg"
                />
            </div>
        </div>

    )
}

export default Home
