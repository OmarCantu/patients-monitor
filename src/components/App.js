import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import 'react-toastify/dist/ReactToastify.css';

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
      selectedPatient: 1
    }
  }

  componentDidMount() {
    const { patientsActions } = this.props;
    patientsActions.fetchPatients();

    const intervalId = setInterval(this.showToast, 10000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    clearInterval(this.state.intervalId);
  }

  showToast = () => {
    const location = Math.floor(Math.random() * 4); // random integer from 0 to 3
    const patient = Math.floor(Math.random() * 3); // random integer from 0 to 2;

    const { patients } = this.props;
    const locations = ['Bathroom', 'Bedroom', 'Kitchen', 'Living room'];
    const patientName = patients[patient].name;

    const message = `Patient ${patientName} is in the ${locations[location]}`;

    toast.warn(message);
  }

  onPatientSelectHandler = id => {
    this.setState({
      selectedPatient: id
    })
  }

  render() {
    const { patients } = this.props;

    const { selectedPatient } = this.state;

    const visiblePatient = patients[selectedPatient - 1];

    return (
      <div className="app">
        <Header>Patients Monitor</Header>

        <ToastContainer 
          autoClose={3000}
        />

        <main className="app__content">
          <Sidebar>
            {/* <PatientList
              patients={patients}
              onPatientSelect={this.onPatientSelectHandler}
            /> */}
            <div className="list-wrapper">
              <h2 className="list-heading">Select a patient:</h2>

              <ul className="list">
                {patients && (
                  patients.map(patient => {
                    const { id, name } = patient;

                    const listItemClass = classNames({
                      'list__item': true,
                      'list__item--active': selectedPatient === id,
                    });

                    return (
                      <li 
                        className={listItemClass}
                        key={id}
                        onClick={() => this.onPatientSelectHandler(id)}
                      >
                        {name}
                      </li>
                    );
                  }))}
              </ul>
            </div>

            <PatientDetails patient={visiblePatient} />
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
