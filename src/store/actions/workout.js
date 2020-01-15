import * as actionTypes from "./actionTypes"

export function addNewWorkout(date) {
    return {
        type: actionTypes.ADD_WORKOUT,
        date: date
    }
}

export function workoutDateChanged(date) {
    return {
        type: actionTypes.WORKOUT_DATE_CHANGED,
        value: date
    }
}

export function removeWorkout(workoutId) {
    return {
        type: actionTypes.REMOVE_WORKOUT,
        workoutId: workoutId
    }
}

export function exerciseTitleChanged(event) {
    return {
        type: actionTypes.EXERCISE_TITLE_CHANGED,
        newTitle: event.target.value
    }
}

export function addExercise(workoutId) {
    return {
        type: actionTypes.ADD_EXERCISE,
        workoutId: workoutId
    }
}

export function removeExercise(workoutId, exerciseId) {
    return {
        type: actionTypes.REMOVE_EXERCISE,
        workoutId: workoutId,
        exerciseId: exerciseId
    }
}

export function weightChanged(event) {
    return {
        type: actionTypes.WEIGHT_CHANGED,
        newWeight: event.target.value
    }
}

export function repetitionsChanged(event) {
    return {
        type: actionTypes.REPETITIONS_CHANGED,
        newRepetitions: event.target.value
    }
}

export function saveNewSet() {
    return {
        type: actionTypes.SAVE_NEW_SET
    }
}

export function showNewSet(workoutId, exerciseId) {
    return {
        type: actionTypes.SHOW_NEW_SET,
        workoutId: workoutId,
        exerciseId: exerciseId
    }
}

export function removeSet(workoutId, exerciseId, setId) {
    return {
        type: actionTypes.REMOVE_SET,
        workoutId: workoutId,
        exerciseId: exerciseId,
        setId: setId
    }
}