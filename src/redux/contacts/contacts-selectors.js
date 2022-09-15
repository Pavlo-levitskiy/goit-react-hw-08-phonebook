import { createSlice } from "@reduxjs/toolkit";
import { getContacts, addContact, deleteContacts } from "./contactsOperations";

const initialState = {
  data: {
    items: [],
    loading: false,
    error: null,
    token: null,
  },
  filter: "",
};

const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    changeFilter: (state, { payload }) => {
      state.filter = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getContacts.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(getContacts.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items = payload;
      })
      .addCase(getContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(addContact.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        state.data.items.push(payload);
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      })

      .addCase(deleteContacts.pending, (state) => {
        state.data.loading = true;
        state.data.error = null;
      })
      .addCase(deleteContacts.fulfilled, (state, { payload }) => {
        state.data.loading = false;
        const indx = state.data.items.findIndex((item) => item.id === payload);
        state.data.items.splice(indx, 1);
      })
      .addCase(deleteContacts.rejected, (state, { payload }) => {
        state.data.loading = false;
        state.data.error = payload;
      });
  },
});

export const { changeFilter } = contactsSlice.actions;

export default contactsSlice.reducer;
