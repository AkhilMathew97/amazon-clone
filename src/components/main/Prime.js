import React, { useState } from 'react'
import './Prime.css'
import { Modal, Backdrop } from '@material-ui/core'

function Prime({isPrime,isPrimeClose}) {
    const [open,setOpen] = useState(isPrime)

      const handleClose = () => {
        setOpen(false);
        isPrimeClose();
      };

      if(isPrime===false){
          return null
      }
      
    return (
        open?(<div className="prime">
        {console.log("reached there")}
        <Modal 
            className="prime__modal"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <img 
            className="prime__image"
            src="https://m.media-amazon.com/images/G/01/digital/video/sonata/Superhero_UK_Acquisition_FT_Apr_20/7a2ef2c8-d54c-4da8-beba-f4e12a0f10d5._UR1280,600_SX1500_FMjpg_.jpg"
            alt=""
        />
        </Modal>    

        
    </div>):null
        
    )
}

export default Prime
