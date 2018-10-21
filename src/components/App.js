import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as patientsActs from '../state/modules/patients/actions';
import * as patientsSelectors from '../state/modules/patients/selectors';

class App extends Component {
  static propTypes = {
    patients: PropTypes.object,
    patientsActions: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
    ])
  };

  static defaultProps = {
    patients: {},
    patientsActions: {}
  };

  componentDidMount() {
    const { patientsActions } = this.props;

    patientsActions.fetchPatients();
  }

  render() {
    const { patients, patientsActions } = this.props;
 
    return (
      <div>
        {/* {patients} */}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  patients: patientsSelectors.patients(state)
});

const mapDispatchToProps = dispatch => ({
  patientsActions: bindActionCreators(patientsActs, dispatch)
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
