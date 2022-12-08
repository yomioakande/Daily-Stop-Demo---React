import React from 'react';
import products from '../products.json';

const LowStockTable = () => {
  var count = 1;
  const items = JSON.parse(localStorage.getItem('products'));
  const updatedProducts = items !== null ? items : products;
  return (
    <table className='table table-striped'>
      <thead>
        <tr className='table-primary'>
          <th>S/No</th>
          <th>Location</th>
          <th>Product Code</th>
          <th>Stock Name</th>
          <th>Description</th>
          <th>Available Qty</th>
          <th>Cost Price</th>
          <th>Selling Price</th>
        </tr>
      </thead>
      <tbody>
        {updatedProducts.map((product) => {
          return (
            <tr>
              <td>{count++}</td>
              <td>Main Warehouse</td>
              <td>{product.code}</td>
              <td>{product.productName}</td>
              <td>{product.description}</td>
              <td>{product.qty}</td>
              <td>{product.costPrice}</td>
              <td>{product.price}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default LowStockTable;
