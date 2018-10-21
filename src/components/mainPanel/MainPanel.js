import PropTypes from 'prop-types';
import React from 'react';

import './MainPanel.css';

const MainPanel = props => {
    const { children } = props;

    return (
      <div className="main-panel">
        <h2>Patient's home</h2>
        <canvas>

        </canvas>
        <figure>

        </figure>

      </div>
    )
  };

MainPanel.propTypes = {
  children: PropTypes.node
};

MainPanel.defaultProps = {
  children: undefined
};

export default MainPanel;
