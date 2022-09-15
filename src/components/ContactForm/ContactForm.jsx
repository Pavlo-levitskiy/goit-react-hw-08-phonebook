import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/contacts-operations";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const dispatch = useDispatch();
  const getContactname = useSelector((state) =>
    state.contacts.items.map((item) => item.name)
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (getContactname.includes(name)) return alert("Contct already exists!");
    dispatch(addContact({ name, number }));
    reset();
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "number":
        setNumber(e.target.value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        onChange={handleChange}
        value={name}
        type="text"
        name="name"
        placeholder="Name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
      <input
        onChange={handleChange}
        value={number}
        type="tel"
        name="number"
        placeholder="Number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <button type="submit" onClick={handleSubmit}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
