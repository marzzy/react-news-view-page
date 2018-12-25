

import React from "react";
import ReactDOM from 'react-dom';
import MainHeader from './HeaderContainer';
import { NewsDetails, MainNews } from './PDeafaultArticle';
import FormContainer from './FormContainer';

const headerwrap = document.getElementById('the-header');
const leftwrap = document.getElementById('left_col');
const rightwrap = document.getElementById('main-article');
const commentwrap = document.getElementById('comment');

(headerwrap) ? ReactDOM.render(<><MainHeader /></>, headerwrap) : false;
(leftwrap) ? ReactDOM.render(<><NewsDetails /></>, leftwrap) : false;
(rightwrap) ? ReactDOM.render(<><MainNews /></>, rightwrap) : false;
(commentwrap) ? ReactDOM.render(<><FormContainer /></>, commentwrap) : false;
