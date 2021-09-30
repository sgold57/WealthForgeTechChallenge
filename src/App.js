import React, { Component } from 'react';
import AddressDiv from './AddressDiv'
import OrderItemsCell from './OrderItemsCell'
import testData from './test_data/data.json'
import CsvDownload from 'react-json-to-csv';
import './App.css';

export default class App extends Component {

  componentDidMount(){
    console.log(testData)
  }

  renderData() {
    return testData.map(data => {
      const {
        order_id, 
        customer_id, 
        customer_first_name, 
        customer_last_name,
        customer_address,
        order_amount,
        order_date,
        order_items
      } = data;
      
      return (
        <tr key={order_id}>
          <td>{order_id}</td>
          <td>{customer_id}</td>
          <td>{customer_first_name}</td>
          <td>{customer_last_name}</td>
          <td>
            <AddressDiv address={customer_address} />
          </td>
          <td>{order_amount}</td>
          <td>{order_date}</td>
          <td>
            <OrderItemsCell items={order_items} />
          </td>
        </tr>
      )
    })
  }

  
  render(){
    return (
      <div className="App">
        <h1>WEALTHFORGE TECHNICAL CHALLENGE</h1>
        <table className='main-table'>
          <tbody>
            <tr>
              <th>Order ID</th>
              <th>Customer ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Address</th>
              <th>Order Amount</th>
              <th>Order Date</th>
              <th>Order Items</th>
            </tr>
            {this.renderData()}
          </tbody>
        </table>
        <div>
          <CsvDownload data={testData}>Download Json</CsvDownload>
        </div>
      </div>
    );
  }
}

