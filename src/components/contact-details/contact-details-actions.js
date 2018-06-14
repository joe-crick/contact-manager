import {
  set,
  asyncUpdate,
  update
} from "reduxigen";

const base = "currentContact";
const address = `${base}.address`;
export const setEmail = set(`${base}.email`);
export const setPhone = set(`${base}.phone`);
export const setStreet = set(`${address}.street`);
export const setSuite = set(`${address}.suite`);
export const setCity = set(`${address}.city`);
export const setZip = set(`${address}.zipcode`);
export const setSuccess = set("actionSuccess");

export const setName = update('name', (name, state) => ({
  currentContact: {
    ...state.currentContact,
    name,
    test: state.currentContact.phone
  }
}));

const CONTENT_TYPE = "application/json; charset=UTF-8";

const putContact = contact => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${contact.id}`, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "Content-type": CONTENT_TYPE
    }
  })
};

// You can make any data transformations you need here, and
// update any computed values, or perform any app-level property
// updates here. In this case, there are no transforms being performed.
// By default, Reduxigen will use the identity function.
const setContactData = data => ({
  currentContact: data,
  actionSuccess: true
});

export const updateContact = asyncUpdate("currentContact", putContact, setContactData);