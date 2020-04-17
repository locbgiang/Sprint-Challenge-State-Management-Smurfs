import React, { Component, useEffect, useState } from "react";
import { connect } from 'react-redux';
import { fetchSmurf } from '../store/actions/smurfActions';
import { postSmurf } from '../store/actions/smurfActions';


import "./App.css";
const App = props => {
  const [newSmurf, setNewSmurf] = useState({ name: '', age: '', height: '' });

  const hanndleChanges = e => {
    setNewSmurf({
      ...newSmurf,
      [e.target.name]: e.target.value
    })
  }

  const formSubmit = event => {
    event.preventDefault();
    props.postSmurf(newSmurf);
  }


  useEffect(() => {
    props.fetchSmurf();
  }, [])

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor='name'>Name
      <input
          onChange={hanndleChanges}
          value={newSmurf.name}
          name='name'
          type='text'
          id='name'
        />
      </label>

      <label htmlFor='age'>AGE
      <input
          onChange={hanndleChanges}
          value={newSmurf.age}
          name='age'
          type='text'
          id='age'
        />
      </label>

      <label htmlFor='height'>Height
      <input
          onChange={hanndleChanges}
          value={newSmurf.height}
          name='height'
          type='text'
          id='height'
        />
      </label>

      <button>Submit</button>
    </form>
  )
}

const mapStateToProps = state => {
  return {
    smurf: state.smurfReducer.smurf
  };
};
export default connect(
  mapStateToProps, { fetchSmurf, postSmurf }
)(App)
