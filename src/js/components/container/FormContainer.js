/* eslint-disable */
import React, { Component } from "react";
import Input from "../presentational/Input";


class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: ["ggff",false],
      email:"",
      txtbody: "",
    };

    this.handleChangeS = this.handleChangeSimple.bind(this);
    this.handleChangeE = this.handleChangeEmail.bind(this);
  }

  handleChangeSimple(event) {
    // (console.log(event.target.value.length));
    (console.log(event.target.value));
    this.setState({ [event.target.id[0]]: event.target.value }) 
    (event.target.value.length)?
    console.log('omad'):console.log('naUmad');

  }
  handleChangeEmail(event) {
    // console.log();
    // (event.target.value)?
      this.setState({ [event.target.id]: event.target.value })
  }

  render() {
    const { name: [nameval,namecheck], email } = this.state;
    return (
      <form id="article-form">
        <Input
          text="نام"
          label="name"
          type="text"
          id="name"
          value={nameval}
          handleChange={this.handleChangeS}
        />
        <Input
          text="ایمیل"
          label="email"
          type="email"
          id="email"
          value={email}
          handleChange={this.handleChangeE}
        />
      </form>
    );
  }
}

export default FormContainer;
