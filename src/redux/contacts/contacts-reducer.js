import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { changeFilter } from "./contacts-actions";
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./contacts-operations";

const itemsReducer = createReducer([], (builder) => {
  builder
    .addCase(fetchContacts.fulfilled, (_, action) => action.payload)
    .addCase(addContact.fulfilled, (state, action) => [
      ...state,
      action.payload,
    ])
    .addCase(deleteContact.fulfilled, (state, action) =>
      state.filter((contact) => contact.id !== action.payload)
    );
});

const filterReducer = createReducer("", (builder) => {
  builder.addCase(changeFilter, (state, action) => action.payload);
});

const contactsReducer = combineReducers({
  items: itemsReducer,
  filter: filterReducer,
});
export default contactsReducer;
