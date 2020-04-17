import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfActions';
import SmurfForm from './SmurfForm';


import "./App.css";
const App = props => {



  useEffect(() => {
    props.fetchSmurf();
  }, [])

  return (
    <div>
      <SmurfForm />
      {props.smurf.map(person=>(
        <div>Name: {person.name} <br/> Age: {person.age}<br/>Height: {person.height}<br/></div>
      ))}
    </div>
  )
}

const mapStateToProps = state => {
  return {
    smurf: state.smurfReducer.smurf
  };
};
export default connect(
  mapStateToProps, { fetchSmurf }
)(App)
