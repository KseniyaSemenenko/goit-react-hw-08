import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from '../filters/selectors';

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, query) => {
    if (!query) return contacts;
    return contacts.filter(contact => {
      const filterName = contact.name
        .toLowerCase()
        .includes(query.toLowerCase());
      const filterNumber = contact.number.includes(query);

      return filterName || filterNumber;
    });
  }
);
