import React, { Component } from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from "material-ui/Table";
import { connect } from "react-redux";
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

  showContact(selectedContact) {
    const contactId = selectedContact[0] + 1;
    const currentContact = this.props.contacts.filter(contact => contact.id === contactId)[0];
    this.props.setCurrentContact(currentContact);
    this.props.history.push(`/details`);
  }

  render() {
    return this.props.contacts_loading ? (
      <h4>Loading...</h4>
    ) : this.props.contacts ? (
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
            return address ? (
              <TableRow key={contact.id} data-id={contact.id}>
                <TableRowColumn>{contact.name}</TableRowColumn>
                <TableRowColumn>{contact.email}</TableRowColumn>
                <TableRowColumn>{contact.phone}</TableRowColumn>
                <TableRowColumn>
                  {`${address.street}${address.suite}, ${address.city}
                  ${address.zipcode}`}
                </TableRowColumn>
              </TableRow>
            ) : null;
          })}
        </TableBody>
      </Table>
    ) : (
      <h1>No contacts found</h1>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contacts,
  contacts_loading: state.contacts_loading
});

export default connect(mapStateToProps, actions)(Contacts);
