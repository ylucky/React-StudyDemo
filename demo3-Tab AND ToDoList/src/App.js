import React from 'react'
import Tabs from '../components/Tab'
import ToDoList from '../components/ToDoList'
import './main.css'

class App extends React.Component {
  render () {
    return <ol>
      <li><Tabs /></li>
      <li><ToDoList /></li>
    </ol>
  }
}

export default App
