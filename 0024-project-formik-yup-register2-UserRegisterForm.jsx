import React from "react";
import { useFormik } from "formik";

function UserRegisterForm() {
  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      age: "",
      password: "",
      retypePassword: "",
      term: "",
    },
  });

  return (
    <div>
      <div>
        <form>
          <div>
            <label>E-mail</label>
            <input
              type="text"
              id="email"
              placeholder="Type your e-mail"
              value={values.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Age</label>
            <input
              type="number"
              id="age"
              placeholder="Type your age"
              value={values.age}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              id="password"
              placeholder="Type your password"
              value={values.password}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Retype Password</label>
            <input
              type="password"
              id="retypePassword"
              placeholder="Retype your password"
              value={values.retypePassword}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="checkbox"
              id="term"
              value={values.term}
              onChange={handleChange}
            />
            <label>I agree to Terms and Conditions</label>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserRegisterForm;
