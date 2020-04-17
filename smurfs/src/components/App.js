import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfActions';



import "./App.css";
const App = props => {
  const [newSmurf, setNewSmurf] = useState({name:'', age:'', height:''});
  useEffect(()=>{
    props.fetchSmurf();
  }, [])
  console.log('outside in app ', props.smurf)
  return (
      <div>
        
      </div>
  )
}

const mapStateToProps = state => {
  return {
    smurf: state.smurfReducer.smurf
  };
};
export default connect(
  mapStateToProps, {fetchSmurf}
)(App)
