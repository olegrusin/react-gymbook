import React from 'react'
import './Set.css'
import { HighlightOff } from '@material-ui/icons'

const Set = props => {
    let removeSetBtn = null;
    
    if(props.isEditing){
        removeSetBtn = <HighlightOff onClick={() => props.removeSet(props.workoutId, props.exerciseId, props.setId)} />
    }

    return (
        <div className="Set">
            <div>{props.setIndex+1}</div>
            <div>{props.weight}</div>
            <div>{props.repetitions}</div>
            {removeSetBtn}
        </div>
    )
}

export default Set
