import React from 'react'
import { image } from '../../image/image'

const FavoritesProduct = () => {
  return (
    <div style={{display : 'flex', justifyContent : 'flex-end', width : '100%',paddingBottom : '22px'}}>
      <img src={image.favorites} alt="" style={{width : '20px', height : '20px'}}/>
    </div>
  )
}

export default FavoritesProduct
