import React, { useState } from "react";
import { postSmurf } from '../store/actions/smurfActions';
import { connect } from 'react-redux';

function SmurfForm(props) {
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
export default connect(
    null , { postSmurf }
  )(SmurfForm)
  