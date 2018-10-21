import PropTypes from 'prop-types';
import React from 'react';

import './PatientDetails.css';

const PatientDetails = props => {
    const { children } = props;

    return (
      <div className="details">
        hkjhjk
      </div>
    )
  };

PatientDetails.propTypes = {
  children: PropTypes.node
};

PatientDetails.defaultProps = {
  children: undefined
};

export default PatientDetails;
