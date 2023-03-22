import React, { useState } from 'react'
import EditProduct from './EditProduct'

const Producto = ({ id, productName, price, quantity, editProduct }) => {
  
    const [productQuantity, setProductQuantity] = useState(quantity)
    const [proName, setProName] = useState(productName)
    const [productPrice, setProductPrice] = useState(price)
    const [modalDisabled, setModalDisabled] = useState(true)

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
    <>
        {
            modalDisabled && <EditProduct />
        }
        <div className='product-item'>
            <div className="product-name">
                <p>{productName}</p>
                <button className='btn' onClick={() => editProductName()}><i>✏</i></button>
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

            <button className="btn btn-trash"><i>🗑</i></button>
        </div>
    </>
  )
}

export default Producto