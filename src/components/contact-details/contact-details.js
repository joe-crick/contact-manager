import React from "react";
import * as actions from "./contact-details-actions";
import connect from "reduxigen/connect";
import RaisedButton from "material-ui/RaisedButton";
import Message from "../message/message";

export const ContactDetails = props => {
  const { setName, setEmail, setPhone, setSuite, setCity, setZip, updateContact } = props;
  return (
    <div>
      <Message
        content="Contact Saved"
        contact={props.currentContact}
        type="info"
        show={props.actionSuccess}
      />
      <form>
        <fieldset>
          <legend>Contact Details</legend>
          <label>
            Name:
            <input
              type="text"
              value={props.currentContact.name}
              onChange={event => setName(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input type="email" value={props.currentContact.email} onChange={setEmail} />
          </label>
          <label>
            Phone:
            <input type="text" value={props.currentContact.phone} onChange={setPhone} />
          </label>
          <label>
            Street:
            <input
              type="text"
              value={props.currentContact.address.street}
              onChange={props.setStreet}
            />
          </label>
          <label>
            Suite:
            <input type="text" value={props.currentContact.address.suite} onChange={setSuite} />
          </label>
          <label>
            City:
            <input type="text" value={props.currentContact.address.city} onChange={setCity} />
          </label>
          <label>
            Zip:
            <input type="text" value={props.currentContact.address.zipcode} onChange={setZip} />
          </label>
          <input type="hidden" value={props.currentContact.id} />
        </fieldset>
        <RaisedButton
          disabled={props.currentContact_loading}
          label="Update Contact"
          primary={true}
          onClick={() => updateContact(props.currentContact)}
        />
      </form>
    </div>
  );
};

export default connect(actions)(ContactDetails);
