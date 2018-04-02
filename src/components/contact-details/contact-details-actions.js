import { update, asyncAction, asyncUpdate } from "reduxigen/actions";

const base = "currentContact";
const address = `${base}.address`;
export const setName = update(`${base}.name`);
export const setEmail = update(`${base}.email`);
export const setPhone = update(`${base}.phone`);
export const setStreet = update(`${address}.street`);
export const setSuite = update(`${base}.suite`);
export const setCity = update(`${base}.city`);
export const setZip = update(`${base}.zipcode`);

const CONTENT_TYPE = "application/json; charset=UTF-8";

const createNewContact = contact => {
  return fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(contact),
    headers: {
      "Content-type": CONTENT_TYPE
    }
  })
};

export const addContact = asyncAction(
  "contacts",
  (contact, state) => {
    debugger;
    return [...state.contacts, contact]
  },
  createNewContact,
  "json"
);

const updateContactData = contact =>
  fetch(`https://jsonplaceholder.typicode.com/posts/${contact.id}`, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "Content-type": CONTENT_TYPE
    }
  });

export const updateContact = asyncUpdate("currentContact", updateContactData, "json");
