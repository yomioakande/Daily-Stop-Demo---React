import React from 'react';
import Sales from '../Sales.json';

const SalesTable = () => {
  var count = 1;
  return (
    <>
      <table className='table table-striped'>
        <thead>
          <tr className='table-primary'>
            <th>S/No</th>
            <th>Date</th>
            <th>Retailer</th>
            <th>Invoice No</th>
            <th>Total Qty</th>
            <th>Total Amount</th>
            <th>Amount Paid</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Sales.map((sale) => {
            return (
              <tr>
                <td>{count++}</td>
                <td>{sale.date}</td>
                <td>{sale.retailer}</td>
                <td>{sale.invoice}</td>
                <td>{sale.totalQty}</td>
                <td>{sale.totalAmount}</td>
                <td>{sale.paid}</td>
                <td>
                  <a className='view-invoice' href={`/invoice/${sale.invoice}`}>
                    View Invoice
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default SalesTable;
