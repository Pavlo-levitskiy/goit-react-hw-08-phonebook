import { useState } from "react";
import s from "./Registration.module.scss";
import { Link, Outlet } from "react-router-dom";
import { register } from "../../redux/authorization/auth-operations";
import { useDispatch } from "react-redux";
// import { useSignupUserMutation } from "../../redux/todos/todoSlice";

const Registration = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const dispatch = useDispatch();
  // const { data } = useGetUserQuery();
  // const [signupUser, result] = useSignupUserMutation();
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
    // signupUser({ name, email, password });
    reset();
  };

  const handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "pass":
        setPass(e.target.value);
        break;

      default:
        break;
    }
  };

  const reset = () => {
    setName("");
    setEmail("");
    setPass("");
  };

  return (
    <div className={s.regContainer}>
      <h1>
        Please sign up or if you have an account,{" "}
        <Link to="/login">Log in</Link>
      </h1>
      <form onSubmit={handleSubmit} className={s.regForm}>
        <input
          onChange={handleChange}
          value={name}
          className={s.regForm__input}
          type="text"
          name="name"
          placeholder="Name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
        <input
          onChange={handleChange}
          value={email}
          className={s.regForm__input}
          type="email"
          name="email"
          placeholder="Email"
          // pattern=".+@globex.com"
          title="Please Provide A Valid Email Address !"
          required
        />
        <input
          onChange={handleChange}
          value={password}
          className={s.regForm__input}
          type="password"
          name="pass"
          placeholder="Password"
          // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 3}$"
          title="Please Provide A Valid Email Address !"
          required
        />
        <button type="submit" className={"btn"}>
          Register
        </button>
      </form>
      <Outlet />
    </div>
  );
};

export default Registration;
