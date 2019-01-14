"use strict";
import React, { Component } from "react";
import { Input, Textarea, Submit } from "../presentational/Input";


class FormContainer extends Component {
  constructor() {
    super();

    this.state = {
      name: { val: "", status: "", sFlag: ""},
      email: { val: "", status: "", sFlag: "" },
      txtbody: { val: "", status: "", sFlag: "" },
      sendCm: {status: "",sFlag: ""},
    };

    this.handleChange = this.handleChangeFunc.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // submit function
  handleSubmit(event) {
    // preventdefult  
    event.preventDefault();

    // check for warning and turn it to err 
    Object.entries(this.state).forEach((item) => { 
      let checkitem = ['name','email','txtbody'];
      // just for name & email & txtbody check
      if (checkitem.includes(item[0])) {
        let [itemName, itemVal, itemStatus, itemFlag] = [item[0],item[1].val, item[1].status, item[1].sFlag];
        
        if (itemFlag == 'fa-warning' ) {
          this.setState({ [itemName]: { val: itemVal, status: itemStatus, sFlag: 'fa-wrong' } });
        } else if (!itemFlag.length) {
          this.setState({ [itemName]: { val: itemVal, status: 'لطفا فیلد را پر کنید.', sFlag: 'fa-wrong' } });
        }
      }    
    });

    // if all of the inbox write in a right way show the msg 
    if (this.state.name.sFlag == 'fa-right' &&
        this.state.email.sFlag == 'fa-right' &&
        this.state.txtbody.sFlag == 'fa-right' ) {
      this.setState({ sendCm: { status: 'با تشکر از نظر شما . بعد از تایید مدیریت روی سایت قرار میگیرد.', sFlag: 'fa-right' } });
    }  

  }

  // tracking changes in form and answer them
  handleChangeFunc(event) {
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
    } else {
        if (!attrVal.length) {
          errStatus = "لطفا فیلد را پر نمایید.";
          flgStatus = wrong;
        } else {
          errStatus = "برای ارسال دکمه ارسال را بزنید.";
          flgStatus = right;
      }
    }

    this.setState({ [attrName]: { val: attrVal, status: errStatus, sFlag: flgStatus } });
  }

  render() {
    const { name, email, txtbody ,sendCm} = this.state;
    return (
      <form id="article-form" onSubmit={this.handleSubmit}>
        <div className="name-con">
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
        </div>
        <div>
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
        </div>
        <div>
          <Textarea
            label="نظر"
            id="txtbody"
            value={txtbody.val}
            handleChange={this.handleChange}
            status={txtbody.status}
            flag={txtbody.sFlag}
          />
          <Submit />
        </div>
        <p className={`${sendCm.sFlag} status`}>{sendCm.status}</p>
      </form>
    );
  }
}

export default FormContainer;
