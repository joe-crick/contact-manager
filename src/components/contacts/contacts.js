import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import connect from "reduxigen/connect";
import * as actions from "./contacts-actions";

export class Contacts extends Component {

  constructor(props) {
    super(props);
    this.showContact = this.showContact.bind(this);
  }

  componentDidMount() {
    // This is the action we created in contacts-actions.js
    this.props.getContacts();
  }

  showContact(contactId) {
    const currentContact = this.props.contacts.filter(contact => contact.id === contactId[0])[0];
    this.props.setCurrentContact(currentContact);
    this.props.history.push(`/details`);
  };

  render() {
    return this.props.contacts ? (
      <Table onRowSelection={this.showContact}>
        <TableHeader displaySelectAll={false}>
          <TableRow>
            <TableHeaderColumn>Name</TableHeaderColumn>
            <TableHeaderColumn>Email</TableHeaderColumn>
            <TableHeaderColumn>Mobile</TableHeaderColumn>
            <TableHeaderColumn>Address</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false} showRowHover={true}>
          {this.props.contacts.map(contact => {
            const address = contact.address;
            return (
              <TableRow key={contact.id} data-id={contact.id} >
                <TableRowColumn>{contact.name}</TableRowColumn>
                <TableRowColumn>{contact.email}</TableRowColumn>
                <TableRowColumn>{contact.phone}</TableRowColumn>
                <TableRowColumn>
                  {`${address.street}${address.suite}, ${address.city}
                  ${address.zipcode}`}
                </TableRowColumn>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    ) : (
      <h1>No contacts found</h1>
    );
  }
}

export default connect(["contacts"], actions)(Contacts);
