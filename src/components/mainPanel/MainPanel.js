import PropTypes from 'prop-types';
import React from 'react';

import src from '../../static/images/home.png';

import './MainPanel.css';

const MainPanel = props => (
  <div className="main-panel">
    <h2 className="main-panel__title">Patient's home</h2>

    <div className="main-panel__pointer-wrapper">
      
    </div>

    <img
        alt="Patient's home"
        className="main-panel__image"
        src={src}
      />
  </div>
)

MainPanel.propTypes = {
  children: PropTypes.node
};

MainPanel.defaultProps = {
  children: undefined
};

export default MainPanel;
