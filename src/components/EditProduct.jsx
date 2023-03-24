import React from 'react'

const EditProduct = ({ productName, quantity, price, updateProp }) => {
  return (
    <div className='modal-overlay'>
      <div className="modal">
        <div className="modal-content">
          <h1 className="title-2">Editar Producto</h1>
          <form className='form'>
              <div className="form-group">
                <label htmlFor="productName">Nombre</label>
                <input name="productName" type="text" value={productName} />
              </div>
              <div className="form-group">
                <label htmlFor="quantity">Cantidad</label>
                <input className='input-quantity' name="quantity" type="number" value={quantity} />
              </div>
              <div className="form-group">
                <label htmlFor="price">Precio</label>
                <input className='input-price' name="price" type="number" value={price} />
              </div>
              <button onClick={()=>updateProp(id)}>Aceptar</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditProduct