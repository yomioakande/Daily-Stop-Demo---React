import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxesStacked } from '@fortawesome/free-solid-svg-icons';

const InfoCard = (props) => {
  const { name, amount, color } = props;
  return (
    <div className='col-md-3'>
      <div className='info-box'>
        <div className={`info-amount ${color}`}>${amount}</div>
        <h5>{name}</h5>
        <div className='info-icon'>
          <FontAwesomeIcon icon={faBoxesStacked} />
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
