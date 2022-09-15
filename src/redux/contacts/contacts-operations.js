import { createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../../services/Api";
const API_ENDPOINT = "/contacts";

const fetchContacts = createAsyncThunk(
  "contacts/getContactsStatus",
  async (_, thunkAPI) => {
    try {
      const { data } = await api.getData(API_ENDPOINT);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const addContact = createAsyncThunk(
  "contacts/addContactsStatus",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await api.saveItem(API_ENDPOINT, newContact);
      console.log(`data in cont Operat`, data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something wrong :(");
    }
  }
);

const deleteContact = createAsyncThunk(
  "contacts/deleteContactsStatus",
  async (deleteId, thunkAPI) => {
    try {
      await api.deleteItem(API_ENDPOINT, deleteId);
      return deleteId;
    } catch (error) {
      return thunkAPI.rejectWithValue("Something went wrong");
    }
  }
);

export { fetchContacts, addContact, deleteContact };
