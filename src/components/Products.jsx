import React, { useState } from 'react'
import Producto from './Producto'


const list = [{
    productName: "Bizcochos",
    price: 120,
    quantity: 1,
    id:0
    },
    {
        productName: "Gaseosa",
        price: 230,
        quantity: 3,
        id: 1
    }
]
const Products = () => {
    const [products, setProducts] = useState(list)

    const editProduct = (id) => {
        console.log("Actualizar producto " + id)
    }



  return (
    <section className='product-container'>
        <h1 className='title-1'>Mi lista de compras</h1>
        {
            products.map( (p, index) => (
                <Producto 
                    key={index}
                    id={p.id}
                    productName={p.productName}
                    quantity={p.quantity}
                    price={p.price}
                    editProduct={editProduct}
                />
            ))
        }
    </section>
  )
}

export default Products