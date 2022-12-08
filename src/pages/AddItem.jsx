import React from 'react';
import AddItemForm from '../components/AddItemForm';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';

const AddItem = () => {
  return (
    <>
      <Header />
      <main>
        <Sidebar />
        <section className='main-content open'>
          <h1 className='page-title'>Add New Item</h1>
          <AddItemForm />
        </section>
      </main>
    </>
  );
};

export default AddItem;
