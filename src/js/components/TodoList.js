import React from 'react'
import ListItem from './ListItem'
export default class TodoList extends React.Component {

    render() {
      var createItem = (item) => {
        //return <li key={item.id}>{item.text}</li>;
        return <ListItem key={item.id} text={item.text}/>;
      };
      return <ul>{this.props.items.map(createItem)}</ul>;
    }
}
