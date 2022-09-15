import s from "./Login.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router";
import { login } from "../../redux/authorization/auth-operations";

export default function LoginView() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case "email":
        return setEmail(value);
      case "password":
        return setPassword(value);
      default:
        break;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
    reset();
  };

  const reset = () => {
    setEmail("");
    setPassword("");
  };

  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.LoginForm}>
        <label>
          E-mail:{" "}
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            className={s.LoginInput}
          />
        </label>
        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            className={s.LoginInput}
          />
        </label>
        <button type="submit" className="btn">
          Sign in
        </button>
      </form>
      <Outlet />
    </div>
  );
}
