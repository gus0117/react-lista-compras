import React, { useState } from 'react'
import EditProduct from './EditProduct'

const Producto = ({ id, productName, price, quantity, editProduct, removeProduct }) => {
  
    const [productQuantity, setProductQuantity] = useState(quantity)


    const editProductName = () => {
        console.log("Editar nombre")
        editProduct(id)
    }

    const editQuantity = (op) => {
        if(op == 1){
            setProductQuantity(productQuantity + 1)
        }
        else {
            if(productQuantity > 1){
                setProductQuantity(productQuantity - 1)
            }
        }

        //Editar en el array
    }
  return (
    <div className='product-item'>
        <div className="product-name">
            <p>{productName}</p>
            <button className='btn' onClick={() => editProduct(id)}><i>✏</i></button>
        </div>

        <div className="quantity">
            <p>{productQuantity}</p>
            <div className="quantity-buttons">
                <button className='btn' onClick={() => editQuantity(1)}>+</button>
                <button className='btn' onClick={() => editQuantity(2)}>-</button>
            </div>    
        </div>

        <div className="price">
            <p>${price}</p>
            <button className='btn'><i>✏</i></button>
        </div>

        <button className="btn btn-trash" onClick={() => removeProduct(id)}><i>🗑</i></button>
    </div>
  )
}

export default Producto