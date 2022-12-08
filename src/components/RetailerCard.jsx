import React from 'react';
import avatar from '../assets/images/avatar-1.png';
import { Link } from 'react-router-dom';

const RetailerCard = (props) => {
  const { code, name, address, telephone } = props;
  return (
    <div className='col-md-3'>
      <div className='info-box'>
        <div className='retailer-icon'>
          <img src={avatar} alt='' />
        </div>
        <div className='retailer-info'>
          <h5>{name}</h5>
          <h6>
            <strong>Retailer Code: </strong> {code}
          </h6>
          <p>
            <strong>Address: </strong>
            {address}
          </p>
          <p>
            <strong>Telephone: </strong>
            {telephone}
          </p>
          <h5>Credit: $15,000</h5>
          <div className='retailer-action'>
            <Link to={`/supply/${code}`}>
              <button className='btn btn-primary'>Supply Item</button>
            </Link>
            <button className='btn btn-danger'>Reconcile</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailerCard;
