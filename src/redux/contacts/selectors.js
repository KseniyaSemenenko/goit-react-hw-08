import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "../filters/selectors";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector([selectContacts, selectFilter], (contacts, name) => {
    if (!name) return contacts;
    return contacts.filter(contact =>
    contact.name.toLowerCase().includes(name.toLowerCase())
    );
})