import React from 'react'

class Lists extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      lists: [
      {'name': '阮一峰'},
      {'name': '张鑫旭'}
      ]
    }
  }
  render () {
    var list = this.state.lists.map((list, index) => <li key={index}>{list.name}</li>)
    return <ul>{list}</ul>
  }
}

class Counter extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      num: 0
    }
    this.timer = null
  }

  componentDidMount () {
    var num = this.state.num
    var multiple = this.props.multiple
    this.timer = setInterval(function () {
      num = num + multiple
      this.setState({
        num: num
      })
    }.bind(this), 1000)
  }

  componentWillUnmount () {
    this.clearInterval(this.timer)
  }

  render () {
    return <h2 style={{color: `${this.props.color}`}}>
              Counter({this.props.multiple}):{this.state.num}</h2>
  }
}

class App extends React.Component {
  render () {
    return <ol>
      <li>姓名列表：<Lists /></li>
      <li>计数器<Counter multiple={10} color='green' /></li>
    </ol>
  }
}

export default App
