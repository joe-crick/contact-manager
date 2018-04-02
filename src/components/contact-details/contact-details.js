import React, { Component } from "react";
import * as actions from "./contact-details-actions";
import connect from "reduxigen/connect";
import RaisedButton from "material-ui/RaisedButton";

export class ContactDetails extends Component {
  render() {
    const props = this.props;
    const contact = props.currentContact;
    const address = contact.address;
    return (
      <form>
        <fieldset>
          <legend>Contact Details</legend>
          <label>
            Name:
            <input type="text" value={contact.name} onChange={props.setName} />
          </label>
          <label>
            Email:
            <input type="text" value={contact.email} onChange={props.setEmail} />
          </label>
          <label>
            Phone:
            <input type="text" value={contact.phone} onChange={props.setPhone} />
          </label>
          <label>
            Street:
            <input type="text" value={address.street} onChange={props.setStreet} />
          </label>
          <label>
            Suite:
            <input type="text" value={address.suite} onChange={props.setSuite} />
          </label>
          <label>
            City:
            <input type="text" value={address.city} onChange={props.setCity} />
          </label>
          <label>
            Zip:
            <input type="text" value={address.zipcode} onChange={props.setZip} />
          </label>
        </fieldset>
        <RaisedButton
          label="Update Contact"
          primary={true}
          onClick={() => props.updateContact(contact)}
        />
        <RaisedButton
          label="Add Contact"
          secondary={true}
          onClick={() => props.addContact(contact)}
        />
      </form>
    );
  }
}

const setMap = [
  "name",
  "currentContact.name",
  "currentContact.email",
  "currentContact.phone",
  "currentContact.address"
];

export default connect(setMap, actions)(ContactDetails);
