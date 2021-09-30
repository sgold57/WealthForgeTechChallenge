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
        <tbody
          className='address-block'
          style={ this.state.expanded ? {display: 'block'} : {display: 'none'}}
        >
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {(this.props.items).map(item => {
            return( 
              <tr>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.description}</td>
                <td>{item.price}</td>
                <td>{item.quantity}</td>
               </tr>
            )
          })}
        </tbody>
        <button
          style={ this.state.expanded ? {display: 'block'} : {display: 'none'}}
          onClick={() => this.setState({ expanded: false })}
          >Collapse
        </button>
      </div>
    )
  }
}
