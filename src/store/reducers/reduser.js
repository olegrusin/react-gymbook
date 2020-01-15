import * as actionTypes from "../actions/actionTypes"

const initialState = {
    workouts: [
        {
            id: '_noleymjyl',
            date: '06.01.2020',
            exercises: [
              {
                id: '_tbiryizc9',
                name: 'Жим штанги лежа',
                sets: [
                  {
                    id: 1,
                    weight: '60',
                    repetitions: '10'
                  },
                  {
                    id: 2,
                    weight: '60',
                    repetitions: '10'
                  },
                  {
                    id: 3,
                    weight: '60',
                    repetitions: '10'
                  }
                ]
              },
              {
                id: '_co8t8rbc6',
                name: 'Жим гантлей лежа',
                sets: [
                  {
                    id: 1,
                    weight: '20',
                    repetitions: '10'
                  },
                  {
                    id: 2,
                    weight: '20',
                    repetitions: '10'
                  },
                  {
                    id: 3,
                    weight: '20',
                    repetitions: '10'
                  }
                ]
              },
              {
                id: '_2hcaiiyct',
                name: 'Разведение гантелей',
                sets: [
                  {
                    id: 1,
                    weight: '11',
                    repetitions: '15'
                  },
                  {
                    id: 2,
                    weight: '11',
                    repetitions: '15'
                  },
                  {
                    id: 3,
                    weight: '11',
                    repetitions: '15'
                  }
                ]
              },
              {
                id: '_xhs7uvror',
                name: 'Подъем штанги на бицепс',
                sets: [
                  {
                    id: 1,
                    weight: '35',
                    repetitions: '6'
                  },
                  {
                    id: 2,
                    weight: '35',
                    repetitions: '6'
                  },
                  {
                    id: 3,
                    weight: '35',
                    repetitions: '6'
                  }
                ]
              },
              {
                id: '_jt15y6vji',
                name: 'Молотки',
                sets: [
                  {
                    id: 1,
                    weight: '15',
                    repetitions: '8'
                  },
                  {
                    id: 2,
                    weight: '15',
                    repetitions: '8'
                  },
                  {
                    id: 3,
                    weight: '15',
                    repetitions: '8'
                  }
                ]
              },
              {
                id: '_lsc1h78gx',
                name: 'Сгибание рук на блоке',
                sets: [
                  {
                    id: 1,
                    weight: '50',
                    repetitions: '15'
                  },
                  {
                    id: 2,
                    weight: '50',
                    repetitions: '15'
                  },
                  {
                    id: 3,
                    weight: '50',
                    repetitions: '15'
                  }
                ]
              }
            ]
          },
          {
            id: '_0jz8f4xe2',
            date: '08.01.2020',
            exercises: [
              {
                id: '_lin9blmsf',
                name: 'Подтягивания с весом',
                sets: [
                  {
                    id: 1,
                    weight: '10',
                    repetitions: '6'
                  },
                  {
                    id: 2,
                    weight: '10',
                    repetitions: '6'
                  },
                  {
                    id: 3,
                    weight: '10',
                    repetitions: '6'
                  }
                ]
              },
              {
                id: '_ytr8c4h0i',
                name: 'Тяга штанги в наклоне',
                sets: [
                  {
                    id: 1,
                    weight: '65',
                    repetitions: '10'
                  },
                  {
                    id: 2,
                    weight: '65',
                    repetitions: '10'
                  },
                  {
                    id: 3,
                    weight: '65',
                    repetitions: '10'
                  }
                ]
              },
              {
                id: '_c3jq3hqvz',
                name: 'Тяга верхнего блока',
                sets: [
                  {
                    id: 1,
                    weight: '35',
                    repetitions: '12'
                  },
                  {
                    id: 2,
                    weight: '35',
                    repetitions: '12'
                  },
                  {
                    id: 3,
                    weight: '35',
                    repetitions: '12'
                  }
                ]
              },
              {
                id: '_h9osb78qh',
                name: 'Брусья с весом',
                sets: [
                  {
                    id: 1,
                    weight: '10',
                    repetitions: '10'
                  },
                  {
                    id: 2,
                    weight: '10',
                    repetitions: '10'
                  },
                  {
                    id: 3,
                    weight: '10',
                    repetitions: '10'
                  }
                ]
              },
              {
                id: '_8vmzn1xo0',
                name: 'Жим штанги узким хватом',
                sets: [
                  {
                    id: 1,
                    weight: '40',
                    repetitions: '8'
                  },
                  {
                    id: 2,
                    weight: '40',
                    repetitions: '8'
                  },
                  {
                    id: 3,
                    weight: '40',
                    repetitions: '8'
                  }
                ]
              },
              {
                id: '_nmz9hizb1',
                name: 'Разгибание рук на блоке',
                sets: [
                  {
                    id: 1,
                    weight: '80',
                    repetitions: '15'
                  },
                  {
                    id: 2,
                    weight: '80',
                    repetitions: '15'
                  },
                  {
                    id: 3,
                    weight: '80',
                    repetitions: '15'
                  }
                ]
              }
            ]
          },
          {
            id: '_o9xvwt4ks',
            date: '10.01.2020',
            exercises: [
              {
                id: '_rf3c7sgly',
                name: 'Жим платформы ногами',
                sets: [
                  {
                    id: 1,
                    weight: '200',
                    repetitions: '6'
                  },
                  {
                    id: 2,
                    weight: '200',
                    repetitions: '6'
                  },
                  {
                    id: 3,
                    weight: '200',
                    repetitions: '6'
                  }
                ]
              },
              {
                id: '_pusvjsl2k',
                name: 'Выпады с гантелями',
                sets: [
                  {
                    id: 1,
                    weight: '15',
                    repetitions: '10'
                  },
                  {
                    id: 2,
                    weight: '15',
                    repetitions: '10'
                  },
                  {
                    id: 3,
                    weight: '15',
                    repetitions: '10'
                  }
                ]
              },
              {
                id: '_uwti6cyt1',
                name: 'Разгибание ног',
                sets: [
                  {
                    id: 1,
                    weight: '40',
                    repetitions: '15'
                  },
                  {
                    id: 2,
                    weight: '40',
                    repetitions: '15'
                  },
                  {
                    id: 3,
                    weight: '40',
                    repetitions: '15'
                  }
                ]
              },
              {
                id: '_ptf9qjiol',
                name: 'Армейский жим',
                sets: [
                  {
                    id: 1,
                    weight: '20',
                    repetitions: '6'
                  },
                  {
                    id: 2,
                    weight: '20',
                    repetitions: '6'
                  },
                  {
                    id: 3,
                    weight: '20',
                    repetitions: '6'
                  }
                ]
              },
              {
                id: '_n4busncf5',
                name: 'Махи гантелей в наклоне',
                sets: [
                  {
                    id: 1,
                    weight: '5',
                    repetitions: '12'
                  },
                  {
                    id: 2,
                    weight: '5',
                    repetitions: '12'
                  },
                  {
                    id: 3,
                    weight: '5',
                    repetitions: '12'
                  }
                ]
              },
              {
                id: '_k9h06ytmd',
                name: 'Пек-дек',
                sets: [
                  {
                    id: 1,
                    weight: '35',
                    repetitions: '15'
                  },
                  {
                    id: 2,
                    weight: '35',
                    repetitions: '15'
                  },
                  {
                    id: 3,
                    weight: '35',
                    repetitions: '15'
                  }
                ]
              }
            ]
          }
    ],
    workoutDate: '',
    exerciseTitle: '',
    newSet: {
        isVisible: false,
        workoutId: null,
        exerciseId: null,
        weight: '',
        repetitions: ''
    }
}

const reducer = (state = initialState, action) => {
    let workoutIndex = null;
    let exerciseIndex = null;
    let setIndex = null;

    const findWorkoutIndexById = (workoutId) => {
        state.workouts.map((workout, index) => {
            if (workout.id === workoutId) {
                workoutIndex = index;
            }
            return null;
        })
    }

    const findExerciseIndexById = (exerciseId) => {
        state.workouts[workoutIndex].exercises.map((exercise, index) => {
            if (exercise.id === exerciseId) {
                exerciseIndex = index;
            }
            return null;
        })
    }

    const findSetIndexById = (setId) => {
        state.workouts[workoutIndex].exercises[exerciseIndex].sets.map((set, index) => {
            if (set.id === setId) {
                setIndex = index;
            }
            return null;
        })
    }

    switch (action.type) {
        case actionTypes.ADD_WORKOUT: {
            console.log(JSON.stringify(state.workouts))
            return {
                ...state,
                workoutDate: '',
                workouts: [
                    ...state.workouts,
                    {
                        id: ID(),
                        date: action.date,
                        exercises: [

                        ],
                    }
                ]
            }
        }
        case actionTypes.WORKOUT_DATE_CHANGED:
            return {
                ...state,
                workoutDate: action.value
            }
        case actionTypes.EXERCISE_TITLE_CHANGED:
            return {
                ...state,
                exerciseTitle: action.newTitle
            }  
        case actionTypes.ADD_EXERCISE: {
            findWorkoutIndexById(action.workoutId)

            const newExercises = [
                ...state.workouts[workoutIndex].exercises,
                {
                    id: ID(),
                    name: state.exerciseTitle,
                    sets: [

                    ]
                }
            ]
            const workoutsAfterAddingExercise = [
                ...state.workouts
            ]
            workoutsAfterAddingExercise[workoutIndex].exercises = newExercises;

            return {
                ...state, 
                exerciseTitle: '',
                workouts: workoutsAfterAddingExercise
            }
        }

        case actionTypes.REMOVE_WORKOUT:
            const removedWorkouts = [
                ...state.workouts
            ];

            const toDelete = new Set([action.workoutId]);
            const newArray = removedWorkouts.filter(obj => !toDelete.has(obj.id));
            return {
                ...state,
                workouts: newArray
            }
        case actionTypes.WEIGHT_CHANGED:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    weight: action.newWeight,
                }
            }
        case actionTypes.REPETITIONS_CHANGED:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    repetitions: action.newRepetitions,
                }
            }
        case actionTypes.SHOW_NEW_SET:
            return {
                ...state,
                newSet: {
                    ...state.newSet,
                    isVisible: true,
                    workoutId: action.workoutId,
                    exerciseId: action.exerciseId,
                }
            }
        case actionTypes.SAVE_NEW_SET:
            findWorkoutIndexById(state.newSet.workoutId);
            findExerciseIndexById(state.newSet.exerciseId);
            const workoutsAfterSavingSet = [
                ...state.workouts
            ]
            let lastSetId = workoutsAfterSavingSet[workoutIndex].exercises[exerciseIndex].sets.length

            workoutsAfterSavingSet[workoutIndex].exercises[exerciseIndex].sets[lastSetId] = {
                id: lastSetId + 1,
                weight: state.newSet.weight,
                repetitions: state.newSet.repetitions,
            }
            return {
                ...state,
                workouts: workoutsAfterSavingSet,
                newSet: {
                    isVisible: false,
                    workoutId: null,
                    exerciseId: null,
                    weight: '',
                    repetitions: ''
                }
            }
        case actionTypes.REMOVE_EXERCISE:
            findWorkoutIndexById(action.workoutId);
            findExerciseIndexById(action.exerciseId);
            const workoutsWithRemovedExercises = [
                ...state.workouts
            ]
            const removedExercises = [
                ...state.workouts[workoutIndex].exercises
            ];
            removedExercises.splice(exerciseIndex, 1);
            workoutsWithRemovedExercises[workoutIndex].exercises = removedExercises;
            return {
                ...state,
                workouts: workoutsWithRemovedExercises
            }
        case actionTypes.REMOVE_SET:
            findWorkoutIndexById(action.workoutId);
            findExerciseIndexById(action.exerciseId);
            findSetIndexById(action.setId);
            const removedSet = {
                ...state
            }
            removedSet.workouts[workoutIndex].exercises[exerciseIndex].sets.splice(setIndex, 1)
            return removedSet
        default:
            return state
    }
}

const ID = () => {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export default reducer