import React, { useState } from 'react';
import products from '../products.json';

const AddItemForm = () => {
  const [inputs, setInputs] = useState('');
  const [visible, setVisible] = useState(false);
  const [oldStock, setOldStock] = useState(0);

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const checkCode = () => {
    const code = inputs.code;
    if (code !== undefined) {
      const items = JSON.parse(localStorage.getItem('products'));
      const updatedProducts = items !== null ? items : products;
      updatedProducts.forEach((instance) => {
        if (instance.code === code) {
          inputs.code = instance.code;
          inputs.productName = instance.productName;
          inputs.description = instance.description;
          setOldStock(instance.qty);
          inputs.costPrice = instance.costPrice;
          inputs.price = instance.price;
        }
      });
      setVisible(true);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const code = inputs.code;
    const items = JSON.parse(localStorage.getItem('products'));
    const updatedProducts = items !== null ? items : products;
    updatedProducts.forEach((instance) => {
      if (instance.code === code) {
        const index = updatedProducts.findIndex((obj) => obj.code === code);

        if (index > -1) {
          updatedProducts.splice(index, 1);
        }
      }
    });
    const newProduct = {
      code: inputs.code,
      productName: inputs.productName,
      description: inputs.description,
      qty: Number(oldStock) + Number(inputs.qty),
      costPrice: inputs.costPrice,
      price: inputs.price
    };
    updatedProducts.push(newProduct);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    alert(`${newProduct.productName} added successfully to inventory`);
    window.location.reload();
  };
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3'>
          <form className='item-form' onSubmit={handleSubmit}>
            <label htmlFor='code'>Product Code</label>
            <input
              type='text'
              name='code'
              value={inputs.code || ''}
              onChange={handleChange}
              placeholder='Enter product code'
            />
            {!visible ? (
              <button onClick={checkCode} className='add-btn' type='button'>
                Next
              </button>
            ) : null}
            {visible ? (
              <>
                <label htmlFor='name'>Product Name</label>
                <input
                  type='text'
                  name='productName'
                  value={inputs.productName || ''}
                  onChange={handleChange}
                  placeholder='Enter product name...'
                />
                <label htmlFor='Description'>Product Description</label>
                <input
                  type='text'
                  name='description'
                  value={inputs.description || ''}
                  onChange={handleChange}
                  placeholder='Enter product description...'
                />
                <label htmlFor='Quantity'>Product Quantity</label>
                <input
                  type='number'
                  name='qty'
                  value={inputs.qty || ''}
                  onChange={handleChange}
                  placeholder='Enter product quantity...'
                />
                <label htmlFor='Price'>Product Cost Price</label>
                <input
                  type='number'
                  name='costPrice'
                  value={inputs.costPrice || ''}
                  onChange={handleChange}
                  placeholder='Enter product cost price...'
                />
                <label htmlFor='Price'>Product Selling Price</label>
                <input
                  type='number'
                  name='price'
                  value={inputs.price || ''}
                  onChange={handleChange}
                  placeholder='Enter product selling price...'
                />
                <button className='add-btn' type='submit'>
                  Add Item
                </button>
              </>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItemForm;
