
/* eslint-disable */

import React from "react";
import ReactDOM from 'react-dom';
import MainHeader from './HeaderContainer';
import { NewsDetails, MainNews } from './PDeafaultArticle';
import FormContainer from './FormContainer';
import Poll from './PollForm';

const headerwrap = document.getElementById('the-header');
const newslistwrap = document.getElementById('news-list');
const rightwrap = document.getElementById('main-article');
const commentwrap = document.getElementById('comment');
const pollwrap = document.getElementById('poll');

(headerwrap) ? ReactDOM.render(<><MainHeader /></>, headerwrap) : false;
(newslistwrap) ? ReactDOM.render(<><NewsDetails /></>, newslistwrap) : false;
(rightwrap) ? ReactDOM.render(<><MainNews /></>, rightwrap) : false;
(commentwrap) ? ReactDOM.render(<><FormContainer /></>, commentwrap) : false;
(pollwrap) ? ReactDOM.render(<><Poll /></>, pollwrap) : false;
