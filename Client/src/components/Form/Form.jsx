import { useState } from "react";
import { Validation } from "../Validation.js";
import style from "./form.module.css";

const Forms = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors({
      ...errors,
      [event.target.name]: Validation(userData, event.target.name),
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.Forms}>
      <form>
        <label htmlFor="email"> Email: </label>
        <input
          required=""
          onChange={handleChange}
          value={userData.email}
          type="text"
          name="email"
        />
        {errors.email !== "" ? <p>{errors.email}</p> : ""}
        <hr />

        <label htmlFor="password"> Password: </label>
        <input
          required=""
          onChange={handleChange}
          value={userData.password}
          type="text"
          name="password"
        />
        {errors.password !== "" ? <p>{errors.password}</p> : ""}
        <hr />

        <button onClick={handleSubmit} type="submit">
          Summit
        </button>
      </form>
    </div>
  );
};

export default Forms;
