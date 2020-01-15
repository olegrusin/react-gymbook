import React, { useState } from 'react'
import { connect } from 'react-redux'
import Exercise from '../Exercise/Exercise'
import { Popover, Paper, Fab, Input, IconButton, Typography } from '@material-ui/core'
import { Add, Close, Done } from '@material-ui/icons'
import './Gym.css'
import { addExercise, removeWorkout, exerciseTitleChanged } from '../../store/actions/workout'

const Gym = props => {
    const [anchorEl, setAnchorEl] = useState(null)

    const handleClick = event => {
        setAnchorEl(event.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }

    const addExerciseWithTitle = (workoutId) => {
        handleClose()
        props.addExercise(workoutId)
    }

    const allExercises = props.exercises.map(exercise => {
        return (
            <Exercise
                key={exercise.id}
                name={exercise.name}
                sets={exercise.sets}
                exerciseId={exercise.id}
                workoutId={props.workoutId}
                exerciseTitleChanged={props.exerciseTitleChanged}
            />
        )
    })

    return (
        <Paper className="Gym">
            <Typography variant="h5">{props.date}</Typography>
            <div className="buttons">
                <Fab color="primary" size="medium" onClick={handleClick}>
                    <Add />
                </Fab>
                <Fab color="secondary" size="medium" onClick={() => props.removeWorkout(props.workoutId)}>
                    <Close />
                </Fab>
            </div>
            <Popover
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'center', horizontal: 'right' }}
                transformOrigin={{ vertical: 'center', horizontal: 'left' }}
            >
                <Input 
                    placeholder="Название упражнения"
                    onChange={props.exerciseTitleChanged}
                    style={{marginLeft: 10}}
                />
                <IconButton onClick={() => addExerciseWithTitle(props.workoutId)}>
                    <Done />
                </IconButton>
            </Popover>            
            <div className="exercises">
                {allExercises}
            </div>
        </Paper>
    )
}


const mapStateToProps = state => {
    return {
        workouts: state.workouts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        exerciseTitleChanged: event => dispatch(exerciseTitleChanged(event)),
        removeWorkout: workoutId => dispatch(removeWorkout(workoutId)),
        addExercise: workoutId => dispatch(addExercise(workoutId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Gym)
