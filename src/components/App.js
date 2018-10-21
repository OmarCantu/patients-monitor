import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

import * as patientsActs from '../state/modules/patients/actions';
import * as patientsSelectors from '../state/modules/patients/selectors';
import Header from './header/Header';
import MainPanel from './mainPanel/MainPanel';
import PatientDetails from './patientDetails/PatientDetails';
import PatientList from './patientList/PatientList';
import Sidebar from './sidebar/Sidebar';

import './App.css';

class App extends Component {
  static propTypes = {
    patients: PropTypes.array,
    patientsActions: PropTypes.oneOfType([
      PropTypes.func,
      PropTypes.object
    ])
  };

  static defaultProps = {
    patients: [],
    patientsActions: {}
  };

  constructor(props) {
    super(props);

    this.state = {
      patients: []
    }
  }

  componentDidMount() {
    const { patientsActions } = this.props;
    
    patientsActions.fetchPatients();
  }

  componentWillReceiveProps(nextProps) {
    const { patients } = nextProps;
 
    if (patients.length) {
      this.setState({
        patients
      })
      // debugger
    }  
    // debugger 
  }

  onPatientSelectHandler = e => {
    alert(e.target.value);
  }

  render() {
    const { patients } = this.props;

    // debugger
    return (
      <div className="app">
        <Header>Patients Monitor</Header>

        <main className="app__content">
          <Sidebar>
            {/* <PatientList
              patients={patients}
              onPatientSelect={this.onPatientSelectHandler}
            /> */}
            <h2>Patients:</h2>

            <ul className="list">
              {patients && (
                patients.map(patient => {
                  const { id, name } = patient;

                  return (
                    <li 
                      className="list__item" 
                      key={id}
                      onClick={this.onPatientSelectHandler}
                    >
                      {name}
                    </li>
                  );
                }))}
            </ul>

            {/* <PatientDetails /> */}
          </Sidebar>

          <MainPanel />
        </main>
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
