import React from 'react/addons';
import {  Nav, Navbar, NavItem, MenuItem, Button } from 'react-bootstrap';

export default class HelloPerson extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css"/>
        </head>
        <body>
          <div>
            <Navbar brand='Hapi React'>
              <Nav right>
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <a href="#">Log In</a>
                  </li>
                  <li>
                    <a href="#">Sign Up</a>
                  </li>
                </ul>
              </Nav>
            </Navbar>
            <div className="container">
              <div className="row">
                <h1>
                  Hello {this.props.name}!
                </h1>
              </div>
            </div>
          </div>
        </body>
      </html>

    )
  }
}

HelloPerson.propTypes = { name: React.PropTypes.string.isRequired };
HelloPerson.defaultProps = { name: "Stranger" };
