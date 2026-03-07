import React from 'react'
import products from './product'
function GetProduct() {
    return (
        <>
        {
            products.map((product)=>(
                <div key={product.id}> 
                    <h3>{product.id} | {product.name} | {product.price}</h3>
                   
                </div>
            ))
        }
        
        </>
    )
}

export default GetProduct
