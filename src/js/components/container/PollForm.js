"use strict";
import React, { Component } from "react";
import { Submit, Radio } from "../presentational/Input";


class Poll extends Component {

  render() {
    return (
      <form id="poll-form" >
        <p className="title">
          این یک نظر سنجی تستی است
        </p>
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
        <Submit />
      </form>
    );
  }
}

export default Poll;
