import React from 'react'

const EditProduct = ({ productName, quantity, price, updateProp }) => {
  return (
    <>
        <h1 className="title-2">Editar Producto</h1>
        <form className='edit-product'>
            <label htmlFor="productName"></label>
            <input name="productName" type="text" value={productName} />
            <button onClick={()=>updateProp(id)}>Aceptar</button>
        </form>
    </>
  )
}

export default EditProduct