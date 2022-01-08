import React from "react";
import FormInput from "../../components/form-input/form-input.component";
import CustomButton from "../../components/custom__button/custom__button.component";
import { signInWithGoogle } from "../../firebase/firebase.utils";
import "./sign-in.styles.css";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };

  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2 className="title">Already have an account?</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="email"
            name="email"
            label={`Email`}
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            type="password"
            label={`Password`}
            name="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />

          <div className="buttons">
            <CustomButton type="submit">
              Sign In <i class="fas fa-sign-in-alt"></i>
            </CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
              {" "}
              Sign In With Google <i class="fab fa-google"></i>
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
