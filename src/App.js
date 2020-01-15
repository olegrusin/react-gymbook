import React from 'react'
import GymList from './containers/GymList/GymList'
import './App.css'
import { AppBar, Typography } from '@material-ui/core'
import { MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'
import ruLocale from 'date-fns/locale/ru'

const App = () => {
  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils} locale={ruLocale}>
      <AppBar position="static" className="App">
        <Typography variant="h5" color="inherit">
          GymBook
        </Typography>
      </AppBar>
      <GymList />
    </MuiPickersUtilsProvider>   
  )
}

export default App
