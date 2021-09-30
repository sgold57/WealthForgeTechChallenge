import { React, Component } from 'react';

export default class AddressDiv extends Component {

  state = {
    expanded: false
  }

  render(){
    const { 
      city,
      state,
      street,
      zip
    } = this.props.address;

    return (
      <div>
        <button 
          onClick={() => this.setState({ expanded: true })}
          style={ this.state.expanded ? {display: 'none'} : {display: 'block'}}
          >Expand
        </button>
        <div 
          className='address-block'
          style={ this.state.expanded ? {display: 'block'} : {display: 'none'}}
        >
          <div className='address-line'>
            City: { city }
          </div>
          <div className='address-line'>
            State: { state }
          </div>
          <div className='address-line'>
            Street: { street }
          </div>
          <div className='address-line'>
            Zip Code:  { zip }
          </div>
          <button
          onClick={() => this.setState({ expanded: false })}
          >Collapse
          </button>
        </div>
      </div>
    )
  }
}