import React from 'react'
import './NewSet.css'
import { IconButton, TextField } from '@material-ui/core'
import { Save } from '@material-ui/icons'

const NewSet = props => {
    return (
        <div className="NewSet">
                <IconButton onClick={props.saveNewSet}>
                    <Save />
                </IconButton>
                <TextField
                    type="number"
                    inputProps={{ min: "0"}}
                    value={props.weight} 
                    onChange={props.weightChanged}
                />
                <TextField
                    type="number"
                    inputProps={{ min: "0"}}
                    value={props.repetitions} 
                    onChange={props.repetitionsChanged}
                />
        </div>
    )
}

export default NewSet
