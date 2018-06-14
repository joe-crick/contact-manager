import React from "react";
import * as actions from "./contact-details-actions";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import Message from "../message/message";

export const ContactDetails = props => {
  const { 
    setName, 
    setEmail, 
    setPhone, 
    setSuite, 
    setCity, 
    setZip, 
    updateContact, 
    currentContact,
    actionSuccess,
    currentContact_loading
  } = props;
  return (
    <div>
      <Message
        content="Contact Saved"
        contact={currentContact}
        type="info"
        show={actionSuccess}
      />
      <form>
        <fieldset>
          <legend>Contact Details</legend>
          <label>
            Name:
            <input
              type="text"
              value={currentContact.name}
              onChange={event => setName(event.target.value)}
            />
          </label>
          <label>
            Email:
            <input type="email" value={currentContact.email} onChange={setEmail} />
          </label>
          <label>
            Phone:
            <input type="text" value={currentContact.phone} onChange={setPhone} />
          </label>
          <label>
            Street:
            <input
              type="text"
              value={currentContact.address.street}
              onChange={props.setStreet}
            />
          </label>
          <label>
            Suite:
            <input type="text" value={currentContact.address.suite} onChange={setSuite} />
          </label>
          <label>
            City:
            <input type="text" value={currentContact.address.city} onChange={setCity} />
          </label>
          <label>
            Zip:
            <input type="text" value={currentContact.address.zipcode} onChange={setZip} />
          </label>
          <input type="hidden" value={currentContact.id} />
        </fieldset>
        <RaisedButton
          disabled={currentContact_loading}
          label="Update Contact"
          primary={true}
          onClick={() => updateContact(currentContact)}
        />
      </form>
    </div>
  );
};

const mapStateToProps = state => ({
  currentContact: state.currentContact,
  actionSuccess: state.actionSuccess,
  currentContact_loading: state.currentContact_loading
})

export default connect(mapStateToProps, actions)(ContactDetails);
