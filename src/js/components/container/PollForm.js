"use strict";
import React, { Component } from "react";
import { Submit, Radio } from "../presentational/Input";


class Poll extends Component {
  constructor(props){
    super(props);
    this.state = {
      counter: 0,
      selectedval: '',
      errmsg: '',
    }

    this.handleRadioCheck = this.handleRadioCheck.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleRadioCheck(e) {
    this.setState({ selectedval: e.target.value , errmsg: ''});
  }
  handleSubmit(e) {
    e.preventDefault();
    if (this.state.selectedval) {
      this.setState((perv) => { return { counter: perv.counter + 1, errmsg: ''}; });
    } else {
      this.setState({ errmsg: 'لطفا ابتدا یکی از گزینه ها را انتخاب فرمایید.'});
    }
  }

  render() {
    const { counter, selectedval, errmsg } = this.state;
    return (
      <form id="poll-form" onSubmit={this.handleSubmit}>
        <p className="title">
          این یک نظر سنجی تستی است
        </p>
        <div id="radio-con" onChange={this.handleRadioCheck}>
          <Radio 
            label='آیتم اول' 
            name="poll-item"
            value="first-1th"
          />
          <Radio 
            label='آیتم دوم' 
            name="poll-item"
            value="first-2th"
          />
          <Radio 
            label='آیتم سوم' 
            name="poll-item"
            value="first-3th"
          />
        </div>
        {
          (selectedval) ? ((
            <p>
              مقدار انتخابی شما 
                {selectedval}
              می باشد.
            </p>
          )) : '' 
        }
        <span>
          تا الان
          {counter}
          نفر رای داده اند
        </span>
        <p>
          {errmsg}
        </p>
        <br />
        <Submit />
      </form>
    );
  }
}

export default Poll;
