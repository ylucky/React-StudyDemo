import React from 'react'

class Tabs extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      focus: 0,
      titles: ['HTML', 'CSS', 'JS', 'React', 'PS', 'Painting']
    }
  }

  tabClick (index) {
    this.setState({
      focus: index
    })
  }

  render () {
    var titles = this.state.titles
    var focus = this.state.focus
    var title = titles.map((title, index) => <span
      key={index}
      onClick={this.tabClick.bind(this, index)}
      className={index == focus ? 'current' : ''}
      >{title}</span>)
    return <div className='tab'>
      <h2>1.Tab切换</h2>
      {title}
      <p className='content'>Tab Content：{titles[focus]}</p>
    </div>
  }
}

export default Tabs
