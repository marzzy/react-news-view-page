# react-news-page

this is a react project (with sass using benefit of ccs3) to create a web page (include news article)

## status

[![Build Status](https://travis-ci.org/marzzy/react-news-view-page.svg?branch=first-check)](https://travis-ci.org/marzzy/react-news-view-page)
[![Coverage Status](https://coveralls.io/repos/github/marzzy/react-news-view-page/badge.svg?branch=first-check)](https://coveralls.io/github/marzzy/react-news-view-page?branch=first-check)


## Contributing
# Install

in your local system, should nodejs & npm installed 
then clone the project & set it in the local directory 

after that you should install the package that we use 
in this project by type code bellow in the intended directory
```
npm install
```
thats it, fill free to change and modify

# Map

in the root you can find :
1. The output file are in ***dist folder*** and it will create after build the project
2. The src code is in ***src folder*** that you can acces it in root directory,src folder include :
    1. ***css folder***: thats contain styles sass file of project
    2. ***sample folder***: its contain json that we use it for content of page(using axios)
    3. ***webroot folder***: its contain static files that we use in project,like header image
    4. ***index.html***: main html that's news article page
    5. ***index.js***: main js file that's routed in package.json file
    6. ***main.scss***: main sass file thats contain everyone item in css folder
    7. ***js folder***: it contains all the react component devided as container (usually class components) and presentational (usually func commponents) 
3. The ***test folder*** is in root,before add func or class to js,you should write the test func on it - we are working in TDD way ;) - the test folder contain : 
    1. so many __*.spec.js__ file: they are used for testing , and if you want to write test,you can add one to them
    2. ***dom.js file***: we want to simulate browser functionality with test and we are happen it,using this file (using jsdom)
    3. ***helper.js file***: there is many repeatativ import in test files,to decreace import them lots of time,we are define them in this file in global,sowe can use them without need importing each time
4. there is so many other files in root you can see,like .babelrc or .eslintrc and etc. : they are using customize packages thats we are using in the projects

# Run page and test

in the intended directory type code bellow to run program in developer mode :
```
npm run start
```

in other terminal in the directory run :
```
npm run test:unit:watch
```

before set commit ,save changes and run this code in the directory to build output in the dist folder in root project directory : 
```
npm run build
```

## Built With

### Setup With
  * [npm](https://www.npmjs.com/) - as package manager
  * [webpack](https://webpack.js.org/) - as module bundler
  * [eslint](https://eslint.org/) - as JavaScript linting utility
  * [babel](https://babeljs.io/) - as JavaScript transpiler
  * some Npm package and webpack loader and plugin thats listed in [package.json](https://github.com/marzzy/react-news-view-page/blob/master/package.json) file

### Testing & Coverage
  * [mocha](https://mochajs.org) - as JavaScript test framework running in the browser
  * [chai](https://www.chaijs.com/) - as a BDD / TDD assertion library
  * [enzyme](https://github.com/airbnb/enzyme) - as JavaScript Testing utility for React
  * [sinon](https://www.sinonjs.org) - as Standalone test spies, stubs and mocks for JavaScript
  * [jsdom](https://www.npmjs.com/package/jsdom) - use to emulate enough of a subset of a web browser to be useful for testing
  * [nyc](https://istanbul.js.org/docs/tutorials/mocha/) - Using Istanbul With Mocha as coverage 

## Authors

* **Marzzieh Moghtaderi** - [Marzzy Mogh](https://github.com/marzzy)

## Acknowledgments

* in this project we use a local json to fill the page (so in order not to see CROS err you can use [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/) as can use the project on **firefox browser** or you can simply modified json to your server and change https request on project)
* Your editor will be respect our rules thats we set in [.editorconfig file](https://github.com/marzzy/react-news-view-page/blob/master/.editorconfig)

## License
This project is [licensed](https://github.com/marzzy/react-news-view-page/blob/master/LICENSE.md) under the terms of the GPLv3 (GNU General Public License v3.0) license.
