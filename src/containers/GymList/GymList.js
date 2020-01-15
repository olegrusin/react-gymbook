import React from 'react'
import { connect } from 'react-redux'
import './GymList.css'
import Gym from '../../components/Gym/Gym'
import NewGym from '../../components/NewGym/NewGym';
import { addNewWorkout, workoutDateChanged } from '../../store/actions/workout'

const GymList = props => {
    const allWorkouts = props.workouts.map(workout => {
        return (
            <Gym
                key={workout.id}
                workoutId={workout.id}
                date={workout.date}
                exercises={workout.exercises}
            />
        )
    })
    
    allWorkouts.reverse()
    
    return (
        <div className="GymList">
            <NewGym 
                addNewWorkout={() => props.addNewWorkout(props.workoutDate)}
                workoutDateChanged={props.workoutDateChanged}
                workoutDate={props.workoutDate}
            />
            {allWorkouts}
        </div>
    )
}


const mapStateToProps = state => {
    return {
        workouts: state.workouts,
        workoutDate: state.workoutDate
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addNewWorkout: date => dispatch(addNewWorkout(date)),
        workoutDateChanged: (event, date) => dispatch(workoutDateChanged(event,date))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(GymList)
