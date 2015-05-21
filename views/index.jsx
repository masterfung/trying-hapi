var React = require('react');

var HelloPerson = React.createClass({
  propTypes: function() {
    name: React.propTypes.string.isRequired
  },
  render: function() {
    return (
      <div>
        Hello {this.props.name}!
      </div>
    )
  }
});


module.exports = HelloPerson;
