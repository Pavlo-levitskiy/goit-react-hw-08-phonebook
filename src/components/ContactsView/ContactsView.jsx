import React from "react";
import ContactForm from "../ContactForm/ContactForm";
import Contacts from "../Contacts/Contacts";

const ContactsView = () => {
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Contacts />
    </div>
  );
};

export default ContactsView;
