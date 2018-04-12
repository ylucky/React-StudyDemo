import React from 'react'

class ToDoList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: ['HTML', 'CSS', 'JS', 'React', 'PS', 'Painting']
    }
  }

  todoAddClick () {
    var lists = this.state.lists
    var value = prompt('新输入的值')
    if (value) {
      lists.push(value)// concat
      this.setState({})
    } else {
      alert('您没有输入任何值！')
    }
  }

  todoClick (index) {
    var lists = this.state.lists
    lists = lists.splice(index, 1)
    this.setState({})
  }

  render () {
    return (
      <div className='todoList'>
        <h2>2.ToDoList</h2>
        <button onClick={this.todoAddClick.bind(this)}>添加</button>
        <ul>
          {
            this.state.lists.map((list, index) => <li key={index} onClick={this.todoClick.bind(this, index)}>{list}</li>)
          }
        </ul>
      </div>
    )
  }
}

export default ToDoList
