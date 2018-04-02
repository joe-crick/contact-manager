import React, { Component } from "react";
import * as actions from "./contact-details-actions";
import connect from "reduxigen/connect";
import RaisedButton from "material-ui/RaisedButton";
import Message from "../message/message";

export class ContactDetails extends Component {
  render() {
    const props = this.props;
    const contact = props.currentContact;
    const address = contact.address;
    return (
      <div>
        <Message content="Contact Saved" contact={contact} type="info" show={props.actionSuccess} />
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
        </form>
      </div>
    );
  }
}

// TODO Fix funkiness with nested prop names and connect?
const setMap = [
  "name",
  "currentContact.id",
  "currentContact.name",
  "currentContact.email",
  "currentContact.phone",
  "currentContact.address",
  "actionSuccess"
];

export default connect(setMap, actions)(ContactDetails);
