import { set, asyncUpdate } from "reduxigen";

export const setCurrentContact = set("currentContact");

export const getContacts = asyncUpdate(
  "contacts",
  () => fetch("https://jsonplaceholder.typicode.com/users"),
  contacts => ({
    contacts
  })
);
