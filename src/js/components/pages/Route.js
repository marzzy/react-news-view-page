import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom"
import ReactDOM from 'react-dom'
import React, { Suspense } from 'react'
import propTypes from 'prop-types'
import About from './About/AboutPage'
import Home from './Home/HomePage'
import AppNewsPage from './News/NewsPage'

const FallbackJsx = () => (
  <p>
    در حال بارگزاری ...
  </p>
);

function LinkFunc ({label, to, activeOnlyWhenExact}) {
  return(
  <Route
    path={to}
    exact={activeOnlyWhenExact}
  >
    { ({match}) => (
      <li className={match ? "active" : ""}>
        <Link to={to}>{label}</Link>
      </li>
    )}
  </Route>
  );
}

LinkFunc.propTypes = {
  label : propTypes.string.isRequired,
  to: propTypes.string.isRequired,
  activeOnlyWhenExact : propTypes.bool
}



const App = () => (
  <Router>
    <Suspense fallback={FallbackJsx}>
      <ul>
        <LinkFunc to="/" activeOnlyWhenExact={true} label="صغحه اصلی" />
        <LinkFunc to="/about" label="درباره ما" />
        <LinkFunc to="/news" label="صفحه خبر" />
      </ul>
        
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/news" component={AppNewsPage} />
      </Switch>
    </Suspense>
  </Router>
);


ReactDOM.render(<><App /></>, document.getElementById('root'));