import React, { useState } from 'react'
import { connect } from 'react-redux'
import Set from '../Set/Set'
import NewSet from '../NewSet/NewSet'
import { Paper, IconButton, Typography } from '@material-ui/core'
import { Add, Delete, Edit } from '@material-ui/icons'
import './Exercise.css'
import { removeSet, removeExercise, saveNewSet, showNewSet, repetitionsChanged, weightChanged } from '../../store/actions/workout'

const Exercise = props => {
    const [editing, setEditing] = useState(false)

    const removeSet = (wId, exId, setId) => {
        props.removeSet(wId, exId, setId)
        setEditing(false)
    }

    let newSet = null;
    let allSets = null;

    if (props.newSet.isVisible && props.workoutId === props.newSet.workoutId && props.exerciseId === props.newSet.exerciseId) {
        newSet = <NewSet
            weight={props.newSet.weight}
            weightChanged={props.weightChanged}
            repetitions={props.newSet.repetitions}
            repetitionsChanged={props.repetitionsChanged}
            saveNewSet={props.saveNewSet} />
    }

    if (props.sets) {
        allSets = props.sets.map((set, index) => {
            return (
                <Set
                    key={set.id}
                    setIndex={index}
                    setId={set.id}
                    weight={set.weight}
                    repetitions={set.repetitions}
                    workoutId={props.workoutId}
                    exerciseId={props.exerciseId}
                    removeSet={removeSet}
                    isEditing={editing}
                />
            );
        });
    };

    return (
        <Paper className="Exercise">
            <div className="header">
                <IconButton onClick={() => setEditing(!editing)}>
                    <Edit />
                </IconButton>
                <Typography variant="h6">{props.name}</Typography>
                <IconButton onClick={() => props.removeExercise(props.workoutId, props.exerciseId)}>
                    <Delete />
                </IconButton>
            </div>
            <div className="info">
                <p>№</p>
                <p>Кг</p>
                <p>Пвт</p>
            </div>

            {allSets}

            {newSet}

            <IconButton onClick={() => props.showNewSet(props.workoutId, props.exerciseId)}>
                <Add />
            </IconButton>
        </Paper>
    )
}


const mapStateToProps = state => {
    return {
        newSet: state.newSet
    }
}

const mapDispatchToProps = dispatch => {
    return {
        weightChanged: event => dispatch(weightChanged(event)),
        repetitionsChanged: event => dispatch(repetitionsChanged(event)),
        showNewSet: (workoutId, exerciseId) => dispatch(showNewSet(workoutId, exerciseId)),
        saveNewSet: () => dispatch(saveNewSet()),
        removeExercise: (workoutId, exerciseId) => dispatch(removeExercise(workoutId, exerciseId)),
        removeSet: (workoutId, exerciseId, setId) => dispatch(removeSet(workoutId, exerciseId, setId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Exercise)
