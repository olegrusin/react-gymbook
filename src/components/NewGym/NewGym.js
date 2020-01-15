import React, { useState } from 'react'
import { DatePicker } from "@material-ui/pickers";
import { Button } from '@material-ui/core';
import { format } from 'date-fns'
import './NewGym.css'

const NewGym = props => {
    const [selectedDate, handleDateChange] = useState(new Date())

    const onChangeHandler = (date) => {
        handleDateChange(date)
        return props.workoutDateChanged(format(date, 'dd.MM.yyyy'))
    }

    return (
        <div className="NewGym">
            <DatePicker
                variant="inline"
                label="Выбрать дату"
                format="dd/MM/yyyy"
                value={selectedDate}
                onChange={date => onChangeHandler(date)}
                autoOk
            />
            <Button variant="contained" color="primary" disabled={!props.workoutDate} onClick={props.addNewWorkout}>
                Добавить тренировку
            </Button>
        </div>
    )
}

export default NewGym
