import React, { useState } from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { useParams } from 'react-router-dom';
import Sales from '../Sales.json';

const Invoice = () => {
  document.title = 'Daily Stop | Invoice';
  const params = useParams();
  const [invoiceNo, setInvoiceNo] = useState(params.id);
  const [inputs, setInputs] = useState([]);

  const getInvoiceItems = () => {
    Sales.forEach((instance) => {
      if (instance.invoice === invoiceNo) {
        inputs.date = instance.date;
        inputs.retailer = instance.retailer;
        inputs.address = instance.address;
        inputs.invoice = instance.invoice;
        inputs.totalQty = instance.totalQty;
        inputs.totalAmount = instance.totalAmount;
        inputs.paid = instance.paid;
        inputs.items = instance.items;
      }
    });
  };
  getInvoiceItems();

  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Invoice</h1>
          <div className='info-details'>
            <div className='row'>
              <div className='col-md-10 offset-md-1'>
                <form className='item-form'>
                  <label htmlFor='invoice'>Invoice No.:</label>
                  <input
                    type='text'
                    name='invoiceNo'
                    value={invoiceNo}
                    onChange={(e) => {
                      setInvoiceNo(e.target.value);
                    }}
                    placeholder='Enter invoice no.'
                  />
                </form>
                <div className='invoice-box'>
                  <span>INVOICE</span>
                  <div className='retailerDetails'>
                    <h5>Billed To:</h5>
                    <h6>{inputs.retailer || ''}</h6>
                    {inputs.address || ''}
                  </div>
                  <ul className='text-right'>
                    <li>
                      <strong>Invoice No.:</strong> {inputs.invoice || ''}
                    </li>
                    <li>
                      <strong>Invoice Date:</strong> {inputs.date || ''}
                    </li>
                  </ul>
                  <div className='invoice-items'>
                    <table className='table table-stiped'>
                      <thead>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Total</th>
                      </thead>
                      <tbody>
                        {inputs.items
                          ? inputs.items.map((val) => {
                              return (
                                <tr>
                                  <td>
                                    {val.productName} {val.description}
                                  </td>
                                  <td>{val.price}</td>
                                  <td>{val.qty}</td>
                                  <td>{val.price * val.qty}</td>
                                </tr>
                              );
                            })
                          : null}
                      </tbody>
                    </table>
                    <ul className='invoice-total'>
                      <li>
                        Sub-total: <span>$0.00</span>
                      </li>
                      <li>
                        Tax: <span>$0.00</span>
                      </li>
                      <li>
                        Total: <span>$0.00</span>
                      </li>
                    </ul>
                  </div>

                  <div className='tc'>
                    <h5>TERMS & CONDITIONS:</h5>
                    <p>
                      Anim pariatur cliche reprehenderit, enim eiusmod high life
                      accusamus terry richardson ad squid. 3 wolf moon officia
                      aute, non cupidatat skateboard dolor brunch. Food truck
                      quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon
                      tempor, sunt aliqua put a bird on it squid single-origin
                      coffee nulla assumenda shoreditch et. Nihil anim keffiyeh
                      helvetica, craft beer labore wes anderson cred nesciunt
                      sapiente ea proident. Ad vegan excepteur butcher vice
                      lomo. Leggings occaecat craft beer farm-to-table, raw
                      denim aesthetic synth nesciunt you probably haven't heard
                      of them accusamus labore sustainable VHS.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Invoice;
