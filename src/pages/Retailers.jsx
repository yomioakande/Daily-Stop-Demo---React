import React from 'react';
import Header from '../components/Header';
import RetailerCard from '../components/RetailerCard';
import Sidebar from '../components/Sidebar';
import RetailersList from '../Retailers.json';

const Retailers = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Retailers List</h1>
          <div className='info-details'>
            <div className='row'>
              {RetailersList.map((retailer) => {
                return (
                  <RetailerCard
                    code={retailer.retailerCode}
                    name={retailer.name}
                    address={retailer.address}
                    telephone={retailer.telephone}
                  />
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Retailers;
