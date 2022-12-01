import { useState } from 'react'
import {Grouping} from './components/grouping'
import { Add } from './components/add';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  return (
    <div className="App">
      <Add/>
      <Grouping/>
    </div>
  )
}

export default App
