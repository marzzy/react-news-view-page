/* eslint-disable */
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      isLoading: true,
      errors: null
    };
  }

  getUsers() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.thumbnail}`
        }))
        )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getUsers();
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <React.Fragment>
        <h2>Random User</h2>
        <div>
          {!isLoading ? (
            users.map(user => {
              const { username, name, email, image } = user;
              return (
                <div key={username}>
                  <p>{name}</p>
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <p>{email}</p>
                  <hr />
                </div>
              );
            })
          ) : (
              <p>Loading...</p>
            )}
        </div>
      </React.Fragment>
    );
  }
}


export default App


const wrapper = document.getElementById('right_col')
if (wrapper) {
  ReactDOM.render(<App />, wrapper)
}
