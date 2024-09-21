import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Componenets/Breadcrum/Breadcrum';
import ProductDisplay from '../Componenets/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Componenets/DescriptionBox/DescriptionBox';
import ReletedProducts from '../Componenets/ReletedProducts/ReletedProducts';

function Product() {
    const {all_product} = useContext(ShopContext)
    const {productId} = useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
  return (
    <div>
        <Breadcrum product={product}/>
        <ProductDisplay product={product}/>
        <DescriptionBox/>
        <ReletedProducts/>
    </div>
  )
}

export default Product