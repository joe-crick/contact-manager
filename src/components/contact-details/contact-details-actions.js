import { update, asyncUpdate } from "reduxigen/actions";
import store from "../../store/store";

const base = "currentContact";
const address = `${base}.address`;
export const setName = update(`${base}.name`);
export const setEmail = update(`${base}.email`);
export const setPhone = update(`${base}.phone`);
export const setStreet = update(`${address}.street`);
export const setSuite = update(`${address}.suite`);
export const setCity = update(`${address}.city`);
export const setZip = update(`${address}.zipcode`);
export const setSuccess = update("actionSuccess");

const CONTENT_TYPE = "application/json; charset=UTF-8";

const putContact = contact => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${contact.id}`, {
    method: "PUT",
    body: JSON.stringify(contact),
    headers: {
      "Content-type": CONTENT_TYPE
    }
  }).then(data => {
    // You can dispatch any updates you need to, following a successful operation, here
    store.dispatch(setSuccess(true));
    // Make sure you return the payload from your resource
    return data;
  });
};

export const updateContact = asyncUpdate("currentContact", putContact, "json");
