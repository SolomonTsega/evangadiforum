import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import classes from "./signUp.module.css";
import { axiosInstance } from "../../API/axios";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp({ onSwap }) {

  const [visible, setVisible] = useState(false);
   const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  
  const handleToggleVisibility = () => {
    setVisible(!visible);
  };


  const [errors, setErrors] = useState({
    username: false,
    firstname: false,
    lastname: false,
    email: false,
    password: false,
  });

  const userNameDom = useRef(null);
  const firstNameDom = useRef(null);
  const lastNameDom = useRef(null);
  const emailDom = useRef(null);
  const passwordDom = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();
    const usernameValue = userNameDom.current.value;
    const firstValue = firstNameDom.current.value;
    const lastValue = lastNameDom.current.value;
    const emailValue = emailDom.current.value;
    const passValue = passwordDom.current.value;

    const newErrors = {
      username: !usernameValue,
      firstname: !firstValue,
      lastname: !lastValue,
      email: !emailValue,
      password: !passValue,
    };
    setErrors(newErrors);

    // if (Object.values(newErrors).some((error) => error)) {
    //   alert("Please provide all required information");
    //   return;
    // }

    try {
      const response = await axiosInstance.post("/api/user/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailValue,
        password: passValue,
      });

      console.log(response.data);
      alert("Register successful. Please login");
      navigate("/home");
} catch (error) {
  let errorMessage = "Something went wrong. Please try again.";

  if (error.response && error.response.data) {
    if (error.response.status === 400) {
      if (error.response.data.message === "Please provide all required fields.") {
        errorMessage = "Please provide all required fields.";
      } else if (error.response.data.message === "Password must be at least 8 characters.") {
        errorMessage = "Password must be at least 8 characters.";
      } else {
        errorMessage = error.response.data.message || "Bad Request";
      }
    } else if (error.response.status === 409) {
      errorMessage = error.response.data.message || "User already exists";
    } else if (error.response.status === 500) {
      errorMessage = error.response.data.message || "An unexpected error occurred";
    }
  }

      setErrorMessage(errorMessage);
    }
  }

  return (
    <div className={classes.sign_up_container}>
      <div>
        <div className={classes.upper_heading}>
          <p className={classes.error_message}>{errorMessage}</p>
          <h3 className={classes.join_login}>Join the network</h3>
          <p className={classes.upper_signin_button}>
            Already have an account?{" "}
            <Link to="/" onClick={onSwap}>
              Sign in
            </Link>
          </p>
        </div>
        <form className={classes.sign_up_form} onSubmit={handleSubmit}>
          <div
            className={`${classes.item} ${
              errors.username ? classes.error : ""
            }`}
          >
            <input ref={userNameDom} type="text" placeholder="Username" />
          </div>
          <div className={classes.column_container}>
            <div
              className={`${classes.item} ${
                errors.firstname ? classes.error : ""
              }`}
            >
              <input ref={firstNameDom} type="text" placeholder="First name"/>
            </div>
            <div
              className={`${classes.item} ${
                errors.lastname ? classes.error : ""
              }`}
            >
              <input ref={lastNameDom} type="text" placeholder="Last name" />
            </div>
          </div>
          <div
            className={`${classes.item} ${errors.email ? classes.error : ""}`}
          >
            <input ref={emailDom} type="email" placeholder="Email address" />
          </div>
          <div
            className={`${classes.item_password} ${
              errors.password ? classes.error : ""
            }`}
          >
            <input
              ref={passwordDom}
              type={visible ? "text" : "password"}
              placeholder="Password"
              style={{ paddingRight: 0 }}
            />
            <span
              className={classes.password_toggle}
              onClick={handleToggleVisibility}
            >
              {visible ? <FaEye /> : <FaEyeSlash />}
            </span>
          </div>
          <div>
            <p className={classes.signin_button}>
              I agree to the
              <Link to="/"> privacy policy</Link> and
              <Link to="/"> terms of service.</Link>
            </p>
          </div>
          <button className={classes.join_button} type="submit">
            Agree and Join
          </button>
        </form>
        <p className={classes.lower_account_button}>
          <Link to="/" onClick={onSwap}>
            Already have an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
