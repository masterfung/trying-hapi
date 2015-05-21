import React from 'react/addons';
import { Button } from 'react-bootstrap';

export default class HelloPerson extends React.Component {
  render() {
    return (
      <html lang="en">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1"/>
          <link rel="stylesheet" href="//maxcdn.bootstrapcdn.com/bootstrap/3.3.1/css/bootstrap.min.css"/>
        </head>
        <body>
          <div>
            <h1>
              Hello {this.props.name}!
            </h1>
          </div>

        </body>
      </html>

    )
  }
}

HelloPerson.propTypes = { name: React.PropTypes.string.isRequired };
HelloPerson.defaultProps = { name: "Stranger" };
