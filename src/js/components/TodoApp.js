import React from 'react'
import TodoList from './TodoList'

export default class TodoApp extends React.Component {
  componentWillMount() {
    this.setState({items:[],text:'',index:0});
  }
  onChange(e) {
    this.setState({text: e.target.value});
  }
  onIndexChange(e) {
    this.setState({index: e.target.value});
  }
  handleSubmit(e) {
    e.preventDefault();
    //var nextItems = this.state.items.concat([{text:this.state.text, id:Date.now()}]);
    this.state.items.splice(this.state.index,0,{text:this.state.text, id:Date.now()});
    var nextItems = this.state.items;
    var nextText = '';
    this.setState({items:nextItems, text: nextText, index:this.state.items.length});
  }
  render() {
    return (
      <div className='container'>
        <h1>Ordered Todo List</h1>
        <TodoList items={this.state.items}/>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input placeholder='enter task name here' type='text' onChange={this.onChange.bind(this)} value={this.state.text}/>
          <br/>
          <button>{'Add item at index:'}</button>
          <input onChange={this.onIndexChange.bind(this)} value={this.state.index} type='number' name='index' min='0' max={this.state.items.length}/>
        </form>
      </div>
    );
  }
}
