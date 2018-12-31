/* eslint-disable */

"use strict";
import React, { Component } from "react";
import {Input, Textarea} from "../presentational/Input";


class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: { val: "", status: "", sFlag: ""},
      email: { val: "", status: "", sFlag: "" },
      txtbody: { val: "", status: "", sFlag: "" },
    };

    this.handleChange = this.handleChangeFunc.bind(this);
  }

  // tracking changes in form and answer them
  handleChangeFunc(event) {
    console.log([event.target.id]);
    this.setState({ [event.target.id]: { val: event.target.value, status: "", sFlag: "" } });
    this.handleStatus(event.target.id, event.target.value);
  }

  // set status relay on input values 
  handleStatus(attrName, attrVal) {
    let [right, wrong, warning] = ['fa-right', 'fa-wrong', 'fa-warning'];
    let errStatus, flgStatus;

    if (attrName == 'name') {
      if (!attrVal.length) {
        errStatus = "لطفا فیلد را پر نمایید." ;
        flgStatus = wrong;
      } else if (attrVal.length <= 2) {
        errStatus = "اسم کمتر از ۳ حرف وجود ندارد. لطفا نام صحیح خود را وارد فرمایید." ;
        flgStatus = warning;
      } else {
        errStatus = "اسم وارد شده درست است." ;
        flgStatus = right;
      }
    } else if (attrName == 'email') {
      let firstATSignIndex = (Array.from(attrVal).indexOf('@'));
      let lastDOTIndex = (Array.from(attrVal).lastIndexOf('.'));

      if (!attrVal.length) {
          errStatus = "لطفا فیلد را پر نمایید.";
          flgStatus = wrong;
      } else if (firstATSignIndex == -1){
          errStatus = "ایمیل باید دارای @ باشد." ;
          flgStatus = warning;
      } else if (lastDOTIndex == -1) {
          errStatus = "ایمیل باید دارای . باشد." ;
          flgStatus = warning;
      } else if (lastDOTIndex < firstATSignIndex) {
          errStatus = "@ باید قبل . باشد." ;
          flgStatus = warning;
      } else if (lastDOTIndex == attrVal.length - 1) {
          errStatus = "علامت . نمیتواند پایان ایمیل باشد." ;
          flgStatus = warning;
      } else {
          errStatus = "ایمیل وارد شده درست است.";
          flgStatus = right;
      }
    }
    this.setState({ [attrName]: { val: attrVal, status: errStatus, sFlag: flgStatus } });
  }

  render() {
    const { name, email, txtbody } = this.state;
    return (
      <form id="article-form" onSubmit={this.submitme}>
        <Input
          text="نام"
          label="name"
          type="text"
          id="name"
          value={name.val}
          handleChange={this.handleChange}
          status={name.status} 
          flag={name.sFlag}
        />
        <Input
          text="ایمیل"
          label="email"
          type="email"
          id="email"
          value={email.val}
          handleChange={this.handleChange}
          status={email.status} 
          flag={email.sFlag}
        />
        <Textarea
          // label, text, id, value, handleChange, status, flag
          text="نظر خود را وارد فرمایید..."
          label="نظر"
          id="txtbody"
          value={txtbody.val}
          handleChange={this.handleChange}
          status={txtbody.status}
          flag={txtbody.sFlag}
       />
      </form>
    );
  }
}

export default FormContainer;
