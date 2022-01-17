import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";

const baseInputStyle =
  "ring-1 ring-gray-500 rounded-md py-2 px-2 focus:outline-none mt-2 text-sm focus:ring-1 focus:ring-blue-400";

const Login = () => {
  const [emailValue, setEmail] = useState("");
  const [passwordValue, setPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [passwordWeak, setPasswordWeak] = useState(false);
  const [passwordMatch, setPasswordMatch] = useState(true);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
    setValidEmail(true);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordWeak(false);
  };

  const handlePasswordValue = () => {
    //check if the password matches the regular expression for a safe password
    if (
      passwordValue.match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/
      )
    ) {
      setPasswordWeak(false);
    } else {
      setPasswordWeak(true);
    }
  };

  const handleConfirmPassword = (e) => {
    setCheckPassword(e.target.value);
    //check if confirm password and passowrd matches
    handleMatchPassword(e.target.value);
  };

  const handleMatchPassword = (value) => {
    if (value === passwordValue) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }
  };

  const handleEmailValue = () => {
    //check if email value is empty or matches a valid email format
    if (
      emailValue.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  };

  const handleSubmit = (e) => {
    //prevent default behaviour
    e.preventDefault();

    handleEmailValue();
    handlePasswordValue();
    handleMatchPassword(checkPassword);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-24 w-full px-4">
      <p className="text-blue-500 text-2xl font-semibold">Sign In</p>
      <div className="w-full sm:w-1/3">
        <form
          className="flex flex-col mt-8 w-full ring-1 ring-gray-400 rounded-md px-4 py-5 mb-4"
          onSubmit={handleSubmit}
        >
          <Label id="email" label="Email Address" />
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={emailValue}
            onChange={(e) => handleEmailChange(e)}
            className={`${baseInputStyle} ${
              !validEmail ? "focus:ring-red-400" : "focus:ring-blue-400"
            }`}
          />
          {!validEmail && (
            <ErrorMessage message="Please input a valid email :/" />
          )}
          <Label id="password" label="Password" />
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={passwordValue}
            autoComplete="true"
            className={`${baseInputStyle} ${
              passwordWeak && "focus:ring-red-400"
            }`}
            onChange={(e) => handlePasswordChange(e)}
          />
          {passwordWeak && (
            <ErrorMessage message="A strong password should be 8-15 characters with at least one uppercase, one lowercase, one numeric digit and one special character" />
          )}
          <Label id="confirmPassword" label="Confirm Password" />
          <input
            type="password"
            id="confirmPassword"
            placeholder="Confirm password"
            autoComplete="true"
            value={checkPassword}
            className={`${baseInputStyle} ${
              !passwordMatch && "focus:ring-red-400"
            }`}
            onChange={(e) => handleConfirmPassword(e)}
          />
          {!passwordMatch && (
            <ErrorMessage message="Passwords don't match, please crosscheck." />
          )}
          <button
            type="submit"
            onClick={(e) => handleSubmit(e)}
            className="bg-blue-400 w-24 text-center rounded-md p-2 text-white font-bold mt-4 place-self-end"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;

const Label = ({ id, label }) => {
  return (
    <label htmlFor={id} className="font-semibold mt-2">
      {label}
    </label>
  );
};
