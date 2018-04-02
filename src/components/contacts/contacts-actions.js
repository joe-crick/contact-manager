import { update, asyncUpdate } from "reduxigen/actions";

export const setCurrentContact = update("currentContact");

export const getContacts = asyncUpdate(
  "contacts",
  () => fetch("https://jsonplaceholder.typicode.com/users"),
  "json"
);
