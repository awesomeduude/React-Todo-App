import React from 'react'

export default class ListItem extends React.Component {
  componentWillMount() {
    this.setState({completed:true,className:''})

  }
  handleClick(e) {
    this.setState({
      completed: this.state.completed === false ? true:false
    })
    this.setState({
      className: this.state.completed? 'strike':''
    })

  }
  render() {
      return (<li className={this.state.className} onClick={this.handleClick.bind(this)}>{this.props.text}</li>);

  }
}
