import { createSlice } from "@reduxjs/toolkit";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const usersApi = createApi({
  reducerPath: "usersApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://connections-api.herokuapp.com/",
  }),
  tagTypes: ["Users", "Contacts"],
  endpoints: (builder) => ({
    signupUser: builder.mutation({
      query: (user) => ({
        url: `/users/signup`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: `/users/login`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    logoutUser: builder.mutation({
      query: (user) => ({
        url: `/users/logout`,
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Users"],
    }),
    getUser: builder.query({
      query: () => ({
        url: `/users/current`,
        method: "GET",
      }),
      invalidatesTags: ["Users"],
    }),

    fetchContacts: builder.query({
      query: () => "/contacts",
      providesTags: ["Contacts"],
    }),
    addContact: builder.mutation({
      query: (contact) => ({
        url: `/contacts`,
        method: "POST",
        body: contact,
      }),
      invalidatesTags: ["Contacts"],
    }),
    deleteContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Contacts"],
    }),
    editContact: builder.mutation({
      query: (contactId) => ({
        url: `/contacts/${contactId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["Contacts"],
    }),
  }),
});

// export const contactsApi = createApi({
//   reducerPath: "contactsApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: "https://connections-api.herokuapp.com/",
//   }),
//   tagTypes: ["Contacts"],
//   endpoints: (builder) => ({
//     fetchContacts: builder.query({
//       query: () => "/contacts",
//       providesTags: ["Contacts"],
//     }),
//     addContact: builder.mutation({
//       query: (contact) => ({
//         url: `/contacts`,
//         method: "POST",
//         body: contact,
//       }),
//       invalidatesTags: ["Contacts"],
//     }),
//     deleteContact: builder.mutation({
//       query: (contactId) => ({
//         url: `/contacts/${contactId}`,
//         method: "DELETE",
//       }),
//       invalidatesTags: ["Contacts"],
//     }),
//     editContact: builder.mutation({
//       query: (contactId) => ({
//         url: `/contacts/${contactId}`,
//         method: "PATCH",
//       }),
//       invalidatesTags: ["Contacts"],
//     }),
//   }),
// });

export const filterSlice = createSlice({
  name: "filter",
  initialState: "",
  reducers: {
    filterContacts: (_, { payload }) => payload,
  },
});

export const { filterContacts } = filterSlice.actions;

export const {
  useSignupUserMutation,
  useLoginUserMutation,
  useLogoutUserMutation,
  useGetUserQuery,
  useFetchContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
  useEditContactMutation,
} = usersApi;

// export const {
//   useFetchContactsQuery,
//   useAddContactMutation,
//   useDeleteContactMutation,
//   useEditContactMutation,
// } = contactsApi;
