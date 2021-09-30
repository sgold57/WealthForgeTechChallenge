import { React, Component } from 'react';

export default class OrderItemsCell extends Component {

  state = {
    expanded: false
  }

  render(){

    return (
      <div>
        <button 
          onClick={() => this.setState({ expanded: true })}
          style={ this.state.expanded ? {display: 'none'} : {display: 'block'}}
          >Expand
        </button>
        <table
          style={ this.state.expanded ? {display: 'block'} : {display: 'none'}}
        >
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            {(this.props.items).map(item => {
              return( 
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.price}</td>
                  <td>{item.quantity}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
        <button
          style={ this.state.expanded ? {display: 'block'} : {display: 'none'}}
          onClick={() => this.setState({ expanded: false })}
          >Collapse
        </button>
      </div>
    )
  }
}
