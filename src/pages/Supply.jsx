import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Retailers from '../Retailers.json';
import products from '../products.json';

const Supply = () => {
  const params = useParams();
  const [retailerCode, setRetailerCode] = useState(params.retailerCode);
  const [inputs, setInputs] = useState([]);
  const [searchResults, setSearchResults] = useState('');

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const searchProduct = (event) => {
    const search = event.target.value;
    if (search.length > 0) {
      const items = JSON.parse(localStorage.getItem('products'));
      const updatedProducts = items !== null ? items : products;
      const res = updatedProducts.filter(function (val) {
        if (
          val.productName.toLowerCase().includes(search.toLowerCase()) ||
          val.code.toLowerCase().includes(search.toLowerCase()) ||
          val.description.toLowerCase().includes(search.toLowerCase())
        ) {
          return val;
        }
        return '';
      });

      var results = res.map((val) => {
        return (
          <li className='results' onClick={() => addItem(val.code)}>
            {val.code} - {val.productName} {val.description}
          </li>
        );
      });
      setSearchResults(results);
    } else {
      setSearchResults('');
    }
  };

  function addItem(code) {
    const items = JSON.parse(localStorage.getItem('products'));
    const updatedProducts = items !== null ? items : products;
    updatedProducts.forEach((val) => {
      if (val.code === code) {
        const newItem = `
          <tr>
            <td>${val.code}</td>
            <td>${val.productName}</td>
            <td>
              <input type='text' value='1' />
            </td>
            <td>${val.price}</td>
            <td>${val.price}</td>
          </tr>
        `;
        setSearchResults('');
        document.getElementById('productLists').innerHTML += newItem;
      }
    });
  }

  function getRetailersDetails() {
    Retailers.forEach((instance) => {
      if (instance.retailerCode === retailerCode) {
        inputs.name = instance.name;
        inputs.address = instance.address;
      }
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  getRetailersDetails();

  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Supply Product</h1>
          <div className='info-details'>
            <div className='row'>
              <div className='col-md-10 offset-md-1'>
                <form className='item-form' onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-3'>
                      <label htmlFor='code'>Retailer Code</label>
                      <input
                        type='text'
                        name='retailerCode'
                        value={retailerCode || inputs.retailerCode}
                        onChange={(e) => {
                          setRetailerCode(e.target.value);
                        }}
                        placeholder='Enter retailer code'
                      />
                    </div>
                    <div className='col-md-3'>
                      <label htmlFor='code'>Retailer Name</label>
                      <input
                        type='text'
                        name='name'
                        disabled
                        value={inputs.name || ''}
                        onChange={handleChange}
                        placeholder='Retailer name'
                      />
                    </div>
                    <div className='col-md-3'>
                      <label htmlFor='code'>Retailer Address</label>
                      <input
                        type='text'
                        name='address'
                        disabled
                        value={inputs.address || ''}
                        onChange={handleChange}
                        placeholder='Retailer Address'
                      />
                    </div>
                    <div className='col-md-3'>
                      <label htmlFor='type'>Supply Type</label>
                      <select name='supply_type' id=''>
                        <option value='normal'>Normal</option>
                        <option value='911'>911</option>
                      </select>
                    </div>
                  </div>

                  <input
                    type='text'
                    name='search'
                    className='mt-3'
                    onChange={searchProduct}
                    placeholder='Search for product to supply...'
                  />
                  <ul className='search-results'>{searchResults}</ul>
                </form>
                <div className='invoice-items'>
                  <table className='table table-bordered'>
                    <thead>
                      <th>Product Code</th>
                      <th>Product</th>
                      <th>Qty</th>
                      <th>Rate</th>
                      <th>Amount</th>
                    </thead>
                    <tbody id='productLists'></tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Supply;
